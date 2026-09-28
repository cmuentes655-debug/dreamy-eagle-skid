/**
 * Darkening layer above the background stack: a top gradient (keeps the top bar
 * legible) plus a vignette toward the edges (keeps the bento cards legible).
 */
export function AtmosphereOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: -5 }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,33,29,0.8), rgba(0,33,29,0))",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,33,29,0) 45%, rgba(0,33,29,0.6) 100%)",
        }}
      />
    </div>
  );
}
