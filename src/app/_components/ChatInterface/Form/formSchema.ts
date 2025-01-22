import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the schema for form validation
export const formSchema = z.object({
  question: z
    .string()
    .min(2, { message: "Question must be at least 2 characters." })
    .max(50, { message: "Question must be at most 50 characters." }),
});
