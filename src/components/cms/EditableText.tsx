"use client";

import {
  useState,
  useRef,
  useEffect,
  CSSProperties,
  ElementType,
  KeyboardEvent,
} from "react";
import { useCMS } from "@/contexts/CMSContext";

interface EditableTextProps {
  path: string;
  defaultValue: string;
  as?: ElementType;
  multiline?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function EditableText({
  path,
  defaultValue,
  as: Component = "span",
  multiline = false,
  className,
  style,
}: EditableTextProps) {
  const { isEditMode, getContentValue, updateContent } = useCMS();
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const currentValue = getContentValue(path, defaultValue);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Select all text
      if (inputRef.current instanceof HTMLInputElement) {
        inputRef.current.select();
      } else if (inputRef.current instanceof HTMLTextAreaElement) {
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
    }
  }, [isEditing]);

  // Non-edit mode - render normally
  if (!isEditMode) {
    return (
      <Component className={className} style={style}>
        {currentValue}
      </Component>
    );
  }

  // Edit mode - actively editing
  if (isEditing) {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsEditing(false);
      }
      if (e.key === "Enter" && !multiline) {
        setIsEditing(false);
      }
    };

    const inputStyle: CSSProperties = {
      ...style,
      background: "rgba(208, 153, 71, 0.15)",
      border: "2px solid #D09947",
      borderRadius: "4px",
      outline: "none",
      padding: "4px 8px",
      width: "100%",
      minWidth: "100px",
      font: "inherit",
      color: "inherit",
      resize: multiline ? "vertical" : "none",
    };

    if (multiline) {
      return (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          value={currentValue}
          onChange={(e) => updateContent(path, e.target.value)}
          onBlur={() => setIsEditing(false)}
          onKeyDown={handleKeyDown}
          className={className}
          style={{ ...inputStyle, minHeight: "80px" }}
          rows={3}
        />
      );
    }

    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type="text"
        value={currentValue}
        onChange={(e) => updateContent(path, e.target.value)}
        onBlur={() => setIsEditing(false)}
        onKeyDown={handleKeyDown}
        className={className}
        style={inputStyle}
      />
    );
  }

  // Edit mode - not actively editing, show clickable state
  const editableStyle: CSSProperties = {
    ...style,
    cursor: "pointer",
    outline: "2px dashed rgba(208, 153, 71, 0.4)",
    outlineOffset: "2px",
    borderRadius: "2px",
    transition: "outline-color 0.2s",
  };

  return (
    <Component
      className={className}
      style={editableStyle}
      onClick={() => setIsEditing(true)}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.outlineColor = "#D09947";
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.outlineColor = "rgba(208, 153, 71, 0.4)";
      }}
      title="Click to edit"
    >
      {currentValue}
    </Component>
  );
}
