// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from "../generated/prisma";

export const db = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});

db.snippet
  .create({
    data: {
      title: "React",
      code: "test",
    },
  })
  .then((res) => {
    console.log(res);
  });
