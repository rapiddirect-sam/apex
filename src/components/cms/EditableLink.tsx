"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps } from "react";
import { useCMS } from "@/contexts/CMSContext";

type EditableLinkProps = ComponentProps<typeof Link>;

function resolveHref(href: EditableLinkProps["href"]): string {
  if (typeof href === "string") return href;
  if (href && typeof href === "object" && "pathname" in href && href.pathname) {
    return String(href.pathname);
  }
  return "";
}

export function EditableLink({
  href,
  onClick,
  onDoubleClick,
  children,
  title,
  ...props
}: EditableLinkProps) {
  const { isEditMode } = useCMS();
  const router = useRouter();
  const hrefString = resolveHref(href);

  const navigate = () => {
    if (!hrefString) return;
    if (hrefString.startsWith("http://") || hrefString.startsWith("https://")) {
      const target = props.target === "_blank" ? "_blank" : "_self";
      window.open(hrefString, target, "noopener,noreferrer");
      return;
    }
    router.push(hrefString);
  };

  if (!isEditMode) {
    return (
      <Link href={href} onClick={onClick} onDoubleClick={onDoubleClick} title={title} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      {...props}
      title={title ?? "Double-click to open link. Single-click text to edit."}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate();
        onDoubleClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
