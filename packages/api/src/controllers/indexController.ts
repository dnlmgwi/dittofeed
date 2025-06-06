import config from "backend-lib/src/config";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

// eslint-disable-next-line @typescript-eslint/require-await
export default async function indexController(fastify: FastifyInstance) {
  fastify.get(
    "/",
    {
      schema: {
        description: "Application health check endpoint.",
      },
    },
    async (_request: FastifyRequest, reply: FastifyReply) => {
      const { appVersion } = config();

      return reply.status(200).send({
        version: appVersion,
      });
    },
  );
}
