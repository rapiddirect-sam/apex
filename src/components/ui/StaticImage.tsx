"use client";

import Image from "next/image";
import type { ComponentProps } from "react";

type StaticImageProps = Omit<ComponentProps<typeof Image>, "src" | "alt"> & {
  /** Retained for a drop-in migration away from CMS image hydration. */
  path?: string;
  defaultSrc: string;
  alt: string;
};

export function StaticImage({ path: _path, defaultSrc, ...props }: StaticImageProps) {
  void _path;
  // The wrapper forwards the required `alt` prop declared above.
  // eslint-disable-next-line jsx-a11y/alt-text
  return <Image src={defaultSrc} {...props} />;
}
