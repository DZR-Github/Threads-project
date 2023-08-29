/*
 * @Author: zrDeng
 * @Date: 2023-08-27 23:05:15
 * @LastEditTime: 2023-08-27 23:09:17
 * @LastEditors: zrDeng
 * @Description: 
 * @FilePath: \threads\app\api\uploadthing\route.ts
 */
import { createNextRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";

// Export routes for Next App Router
export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
