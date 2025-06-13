"use server";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
};

export const updateSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};
