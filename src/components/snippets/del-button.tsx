"use client";
import { deleteSnippet } from "@/actions";
import { startTransition } from "react";

export default function DelButton({ id }: { id: number }) {
  const handleClick = async () => {
    startTransition(async () => {
      await deleteSnippet(id);
    });
  };

  return (
    <button
      className="pt-1 pb-1 p-2 border border-gray-200 rounded"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
