/**
 * Faint HUD reticle grid floating above the aurora, faded toward the edges
 * with a radial mask so the centre content stays legible.
 */
export function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      className="holo-grid pointer-events-none fixed inset-0 -z-10"
      style={{
        maskImage:
          "radial-gradient(ellipse 90% 80% at 50% 45%, #000 45%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 90% 80% at 50% 45%, #000 45%, transparent 100%)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(95,227,204,0.08),transparent_60%)]" />
    </div>
  );
}
