// export const dynamic = "force-dynamic";
// export const revalidate = 0;

import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => (
    <Link
      className="flex justify-between items-center mt-5 border border-gray-200 rounded p-2"
      href={`/snippets/${snippet.id}`}
      key={snippet.id}
    >
      <span>{snippet.title}</span>
      <span>View</span>
    </Link>
  ));

  return (
    <div>
      <div className="flex justify-between items-center mt-5">
        <h1 className="font-bold text-lg">Snippets</h1>
        <Link
          className="pt-1 pb-1 pl-2 pr-2 border border-gray-300 rounded"
          href="/snippets/new"
        >
          Create
        </Link>
      </div>
      {renderSnippets}
    </div>
  );
}
