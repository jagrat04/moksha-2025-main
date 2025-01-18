import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }).max(100, { message: "Email should not exceed 100 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(20, { message: "Password should not exceed 20 characters" }),
});

export default LoginSchema;
