import type { CSSProperties } from "react";

export default function AppHomeIndicator() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex items-end justify-center bg-white lg:hidden"
      style={
        {
          height: "calc(34px + env(safe-area-inset-bottom))",
          paddingBottom: "calc(8px + env(safe-area-inset-bottom))"
        } as CSSProperties
      }
      aria-hidden="true"
    >
      <span className="h-[5px] w-[134px] rounded-full bg-black" />
    </div>
  );
}
