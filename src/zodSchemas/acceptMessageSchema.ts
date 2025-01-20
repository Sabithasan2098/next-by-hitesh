import { z } from "zod";

export const acceptMessageSchema = z.object({
  acceptedMessages: z.boolean(),
});
