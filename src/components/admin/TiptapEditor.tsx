"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useState, useCallback } from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  Heading1,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  Quote,
  Undo,
  Redo,
  Link as LinkIcon,
  Image as ImageIcon,
  Code2,
} from "lucide-react";

interface TiptapEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export function TiptapEditor({ content, onChange, placeholder = "Write your content..." }: TiptapEditorProps) {
  const [showHtml, setShowHtml] = useState(false);
  const [htmlContent, setHtmlContent] = useState(content);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Image.configure({
        HTMLAttributes: {
          class: "blog-image",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "blog-link",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content,
    immediatelyRender: false,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
      setHtmlContent(html);
    },
    editorProps: {
      attributes: {
        class: "tiptap-editor-content",
      },
    },
  });

  const addImage = useCallback(() => {
    const url = window.prompt("Enter image URL:");
    if (url && editor) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const addLink = useCallback(() => {
    const url = window.prompt("Enter URL:");
    if (url && editor) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  const handleHtmlChange = (html: string) => {
    setHtmlContent(html);
    if (editor) {
      editor.commands.setContent(html);
    }
    onChange(html);
  };

  if (!editor) {
    return null;
  }

  const ToolbarButton = ({
    onClick,
    isActive = false,
    children,
    title,
  }: {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      title={title}
      style={{
        padding: "8px",
        background: isActive ? "#D09947" : "transparent",
        color: isActive ? "#000" : "#C5C6C9",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = "#333";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = "transparent";
      }}
    >
      {children}
    </button>
  );

  return (
    <div style={{ border: "1px solid #444", borderRadius: "8px", overflow: "hidden" }}>
      {/* Toolbar */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
          padding: "8px 12px",
          background: "#1a1a1a",
          borderBottom: "1px solid #444",
          alignItems: "center",
        }}
      >
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold"
        >
          <Bold size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic"
        >
          <Italic size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="Strikethrough"
        >
          <Strikethrough size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive("code")}
          title="Inline Code"
        >
          <Code size={18} />
        </ToolbarButton>

        <div style={{ width: "1px", height: "24px", background: "#444", margin: "0 8px" }} />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive("heading", { level: 1 })}
          title="Heading 1"
        >
          <Heading1 size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive("heading", { level: 2 })}
          title="Heading 2"
        >
          <Heading2 size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive("heading", { level: 3 })}
          title="Heading 3"
        >
          <Heading3 size={18} />
        </ToolbarButton>

        <div style={{ width: "1px", height: "24px", background: "#444", margin: "0 8px" }} />

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        >
          <List size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Ordered List"
        >
          <ListOrdered size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="Blockquote"
        >
          <Quote size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
          title="Code Block"
        >
          <Code2 size={18} />
        </ToolbarButton>

        <div style={{ width: "1px", height: "24px", background: "#444", margin: "0 8px" }} />

        <ToolbarButton onClick={addLink} title="Add Link">
          <LinkIcon size={18} />
        </ToolbarButton>
        <ToolbarButton onClick={addImage} title="Add Image">
          <ImageIcon size={18} />
        </ToolbarButton>

        <div style={{ width: "1px", height: "24px", background: "#444", margin: "0 8px" }} />

        <ToolbarButton
          onClick={() => editor.chain().focus().undo().run()}
          title="Undo"
        >
          <Undo size={18} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().redo().run()}
          title="Redo"
        >
          <Redo size={18} />
        </ToolbarButton>

        <div style={{ flex: 1 }} />

        <button
          type="button"
          onClick={() => setShowHtml(!showHtml)}
          style={{
            padding: "6px 12px",
            background: showHtml ? "#D09947" : "#333",
            color: showHtml ? "#000" : "#C5C6C9",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          {showHtml ? "Visual" : "HTML"}
        </button>
      </div>

      {/* Editor content */}
      {showHtml ? (
        <textarea
          value={htmlContent}
          onChange={(e) => handleHtmlChange(e.target.value)}
          style={{
            width: "100%",
            minHeight: "400px",
            padding: "16px",
            background: "#2a2a2a",
            color: "#C5C6C9",
            border: "none",
            outline: "none",
            resize: "vertical",
            fontFamily: "monospace",
            fontSize: "14px",
            lineHeight: 1.6,
          }}
        />
      ) : (
        <div
          style={{
            background: "#2a2a2a",
            minHeight: "400px",
          }}
        >
          <style jsx global>{`
            .tiptap-editor-content {
              padding: 16px;
              min-height: 400px;
              color: #C5C6C9;
              outline: none;
            }
            .tiptap-editor-content > * + * {
              margin-top: 0.75em;
            }
            .tiptap-editor-content p.is-editor-empty:first-child::before {
              content: attr(data-placeholder);
              float: left;
              color: #666;
              pointer-events: none;
              height: 0;
            }
            .tiptap-editor-content h1 {
              font-size: 2em;
              font-weight: 700;
              color: #fff;
            }
            .tiptap-editor-content h2 {
              font-size: 1.5em;
              font-weight: 600;
              color: #fff;
            }
            .tiptap-editor-content h3 {
              font-size: 1.25em;
              font-weight: 600;
              color: #fff;
            }
            .tiptap-editor-content ul,
            .tiptap-editor-content ol {
              padding-left: 1.5em;
            }
            .tiptap-editor-content blockquote {
              border-left: 3px solid #D09947;
              padding-left: 1em;
              margin-left: 0;
              font-style: italic;
              color: #999;
            }
            .tiptap-editor-content code {
              background: #1a1a1a;
              padding: 0.2em 0.4em;
              border-radius: 4px;
              font-family: monospace;
            }
            .tiptap-editor-content pre {
              background: #1a1a1a;
              padding: 1em;
              border-radius: 8px;
              overflow-x: auto;
            }
            .tiptap-editor-content pre code {
              background: none;
              padding: 0;
            }
            .tiptap-editor-content img.blog-image {
              max-width: 100%;
              height: auto;
              border-radius: 8px;
            }
            .tiptap-editor-content a.blog-link {
              color: #D09947;
              text-decoration: underline;
            }
          `}</style>
          <EditorContent editor={editor} />
        </div>
      )}
    </div>
  );
}
