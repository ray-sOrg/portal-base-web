import React from "react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { db } from "@/db";

const page = () => {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    revalidatePath("/");
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold text-2xl m-3 text-center">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        {/* // title */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border border-gray-200 p-2 rounded w-full"
            type="text"
            name="title"
            id="title"
          />
        </div>
        {/* // code */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            className="border border-gray-200 p-2 rounded w-full"
            name="code"
            id="code"
            rows={10}
          />
        </div>
        {/* button */}
        <button className="rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};

export default page;
