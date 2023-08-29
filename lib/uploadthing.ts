/*
 * @Author: zrDeng
 * @Date: 2023-08-27 23:03:35
 * @LastEditTime: 2023-08-27 23:03:40
 * @LastEditors: zrDeng
 * @Description: 
 * @FilePath: \threads\lib\uploadthing.ts
 */
import { generateReactHelpers } from "@uploadthing/react/hooks";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();
