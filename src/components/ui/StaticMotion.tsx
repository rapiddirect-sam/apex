"use client";

import type { ComponentPropsWithoutRef } from "react";

type MotionOnlyProps = {
  initial?: unknown;
  whileInView?: unknown;
  animate?: unknown;
  transition?: unknown;
  viewport?: unknown;
};

type StaticMotionProps<T extends "div" | "button" | "article" | "ol"> =
  ComponentPropsWithoutRef<T> & MotionOnlyProps;

function StaticDiv({
  initial: _initial,
  whileInView: _whileInView,
  animate: _animate,
  transition: _transition,
  viewport: _viewport,
  ...props
}: StaticMotionProps<"div">) {
  void [_initial, _whileInView, _animate, _transition, _viewport];
  return <div {...props} />;
}

function StaticButton({
  initial: _initial,
  whileInView: _whileInView,
  animate: _animate,
  transition: _transition,
  viewport: _viewport,
  ...props
}: StaticMotionProps<"button">) {
  void [_initial, _whileInView, _animate, _transition, _viewport];
  return <button {...props} />;
}

function StaticArticle({
  initial: _initial,
  whileInView: _whileInView,
  animate: _animate,
  transition: _transition,
  viewport: _viewport,
  ...props
}: StaticMotionProps<"article">) {
  void [_initial, _whileInView, _animate, _transition, _viewport];
  return <article {...props} />;
}

function StaticOl({
  initial: _initial,
  whileInView: _whileInView,
  animate: _animate,
  transition: _transition,
  viewport: _viewport,
  ...props
}: StaticMotionProps<"ol">) {
  void [_initial, _whileInView, _animate, _transition, _viewport];
  return <ol {...props} />;
}

/**
 * Lightweight compatibility layer for content sections that do not need
 * runtime animation. It preserves their markup while keeping Framer Motion
 * out of the route's visitor bundle.
 */
export const motion = {
  div: StaticDiv,
  button: StaticButton,
  article: StaticArticle,
  ol: StaticOl,
};
