/* eslint-disable import/no-default-export */
"use client";

import dynamic from "next/dynamic";

export { EditableText } from "./EditableText";
export { EditableLink } from "./EditableLink";
export { EditableImage } from "./EditableImage";
export { EditableArray } from "./EditableArray";
// Lazy-load toolbar on all pages; only admins see it.
export const CMSToolbar = dynamic(
  () => import("./CMSToolbar").then((m) => ({ default: m.CMSToolbar })),
  { ssr: false }
);
