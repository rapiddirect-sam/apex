"use client";

import dynamic from "next/dynamic";
import { useCMSOptional } from "@/contexts/CMSContext";

const CMSToolbar = dynamic(
  () => import("./CMSToolbar").then((module) => ({ default: module.CMSToolbar })),
  { ssr: false }
);

/**
 * Keeps the editor controls and their dependencies off public visitor sessions.
 * A signed-in administrator receives the toolbar after the session marker is read.
 */
export function CMSPageToolbar() {
  const cms = useCMSOptional();

  if (!cms?.isAdmin) return null;

  return <CMSToolbar />;
}
