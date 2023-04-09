import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input, ctx }) => {
      return {
        greeting: `Hello ${input.text}, you appear to be ${
          ctx.auth.userId === null ? "signed out" : ctx.auth.userId
        }.`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  stringLengthPrivate: privateProcedure
    .input(z.string())
    .query(({ input, ctx }) => {
      return input.length;
    }),
});
