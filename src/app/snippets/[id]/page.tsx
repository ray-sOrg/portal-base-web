import Link from "next/link";
import { db } from "@/db";
import { notFound } from "next/navigation";
// import { sleep } from "@/utils";
import { deleteSnippet } from "@/actions";
// import DelButton from "@/components/snippets/del-button";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const page = async ({ params }: Props) => {
  // await sleep(300);

  const { id } = await params;

  const snippet = await db.snippet.findUnique({
    where: { id: parseInt(id) },
  });

  const deleteSnippetWithId = deleteSnippet.bind(null, parseInt(id));

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="font-bold text-2xl">{snippet.title}</h1>

        <div className="flex gap-2">
          <Link
            className="pt-1 pb-1 p-2 border border-gray-200 rounded"
            href={`/snippets/${id}/edit`}
          >
            Edit
          </Link>
          {/* <DelButton id={parseInt(id)} /> */}
          <form action={deleteSnippetWithId}>
            <button className="pt-1 pb-1 p-2 border border-gray-200 rounded">
              Delete
            </button>
          </form>
        </div>
      </div>

      <pre className="mt-10 p-4 bg-gray-200  rounded">
        <code className="text-sm text-black">{snippet.code}</code>
      </pre>
    </div>
  );
};

export default page;

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => ({
    id: snippet.id.toString(),
  }));
}
