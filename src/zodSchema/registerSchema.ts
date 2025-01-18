import { z } from 'zod';

const RegisterSchema = z.object({
  fullname: z.string().nonempty({ message: "Fullname is required" }).max(50, { message: "Fullname should not exceed 50 characters" }),
  phone: z.string().regex(/^[0-9]{10}$/, { message: "Invalid mobile number" }),
  email: z.string().email({ message: "Invalid email address" }).max(100, { message: "Email should not exceed 100 characters" }),
  college: z.string().nonempty({ message: "College name is required" }).max(150, { message: "College name should not exceed 100 characters" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(20, { message: "Password should not exceed 20 characters" }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export default RegisterSchema;
