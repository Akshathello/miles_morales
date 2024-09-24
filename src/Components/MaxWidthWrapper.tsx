import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl lg:px-20 md:px-8 px-5",
        className
      )}
    >
      {children}
    </div>
  );
}

export default MaxWidthWrapper;
