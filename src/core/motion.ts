/**
 * Motion core.
 *
 * Central place for three things every illusion needs:
 *  1. A single reduced-motion gate. When the user prefers reduced motion (or is
 *     on a touch device where pointer illusions don't apply), illusions should
 *     ask this module rather than each re-implementing the check.
 *  2. A shared pointer state, updated once per frame, that pointer-driven
 *     effects can read without each attaching their own listeners.
 *  3. A single requestAnimationFrame loop. Illusions subscribe a callback and
 *     get a smoothed pointer + delta time, avoiding N competing RAF loops.
 */

export type FrameCallback = (state: FrameState) => void;

export interface FrameState {
  /** Smoothed pointer, normalised to -1..1 with 0,0 at viewport centre. */
  pointer: { x: number; y: number };
  /** Raw pointer, same normalisation, no smoothing. */
  pointerRaw: { x: number; y: number };
  /** Seconds since the previous frame (clamped). */
  dt: number;
  /** Milliseconds since loop start. */
  time: number;
}

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const isTouch = () =>
  window.matchMedia("(hover: none), (pointer: coarse)").matches;

class Motion {
  readonly reducedMotion = prefersReducedMotion();
  readonly touch = isTouch();

  private callbacks = new Set<FrameCallback>();
  private raf = 0;
  private last = 0;
  private start = 0;

  private state: FrameState = {
    pointer: { x: 0, y: 0 },
    pointerRaw: { x: 0, y: 0 },
    dt: 0,
    time: 0,
  };

  constructor() {
    if (!this.touch) {
      window.addEventListener("pointermove", this.onPointerMove, {
        passive: true,
      });
    }
  }

  /** True when heavy pointer illusions should be skipped entirely. */
  get allowPointerFx() {
    return !this.reducedMotion && !this.touch;
  }

  /** True when scroll-driven motion is allowed (still ok on touch). */
  get allowScrollFx() {
    return !this.reducedMotion;
  }

  private onPointerMove = (e: PointerEvent) => {
    this.state.pointerRaw.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.state.pointerRaw.y = (e.clientY / window.innerHeight) * 2 - 1;
    this.ensureRunning();
  };

  private ensureRunning() {
    if (!this.raf) {
      this.last = performance.now();
      this.start = this.last;
      this.raf = requestAnimationFrame(this.tick);
    }
  }

  private tick = (now: number) => {
    const dt = Math.min((now - this.last) / 1000, 1 / 30);
    this.last = now;
    this.state.dt = dt;
    this.state.time = now - this.start;

    // Critically-damped-ish smoothing toward the raw pointer.
    const ease = 1 - Math.pow(0.001, dt);
    this.state.pointer.x +=
      (this.state.pointerRaw.x - this.state.pointer.x) * ease;
    this.state.pointer.y +=
      (this.state.pointerRaw.y - this.state.pointer.y) * ease;

    for (const cb of this.callbacks) cb(this.state);

    this.raf = requestAnimationFrame(this.tick);
  };

  /** Subscribe a per-frame callback. Returns an unsubscribe function. */
  onFrame(cb: FrameCallback): () => void {
    this.callbacks.add(cb);
    this.ensureRunning();
    return () => {
      this.callbacks.delete(cb);
      if (this.callbacks.size === 0 && this.raf) {
        cancelAnimationFrame(this.raf);
        this.raf = 0;
      }
    };
  }
}

export const motion = new Motion();
