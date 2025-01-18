import { z } from 'zod';

const ForgotSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(100, { message: "Email should not exceed 100 characters" }),
});

export default ForgotSchema;