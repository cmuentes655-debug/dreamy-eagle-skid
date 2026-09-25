import { useEffect, useState } from "react";

const DESKTOP_QUERY = "(min-width: 1024px) and (hover: hover) and (pointer: fine)";

/**
 * `true` only on wide screens with a true pointing device.
 * Used to gate the 3D tilt and the reticle cursor.
 */
export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(DESKTOP_QUERY);
    const onChange = () => setIsDesktop(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isDesktop;
}
