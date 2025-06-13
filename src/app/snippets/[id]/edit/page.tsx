import { db } from "@/db";
import { notFound } from "next/navigation";
import React from "react";
import Editor from "@/components/editor";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const snippet = await db.snippet.findUnique({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <Editor snippet={snippet} />
    </div>
  );
}
