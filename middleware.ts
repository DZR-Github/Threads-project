/*
 * @Author: zrDeng
 * @Date: 2023-08-27 10:27:42
 * @LastEditTime: 2023-08-27 10:34:24
 * @LastEditors: zrDeng
 * @Description:
 * @FilePath: \threads\middleware.ts
 */
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/", "/api/webhook/clerk"],
  ignoredRoutes: ["/api/webhook/clerk"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
