/*
 * @Author: zrDeng
 * @Date: 2023-08-27 22:19:26
 * @LastEditTime: 2023-08-28 16:36:56
 * @LastEditors: zrDeng
 * @Description:
 * @FilePath: \项目\threads\lib\validations\user.ts
 */
import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  name: z.string().min(3).max(30),
  username: z.string().min(3).max(30),
  bio: z.string().min(3).max(1000),
});

// export const UserValidation = z.object({
//   profile_photo: z.string().url().nonempty(),
//   name: z
//     .string()
//     .min(3, { message: "Minimum 3 characters." })
//     .max(30, { message: "Maximum 30 caracters." }),
//   username: z
//     .string()
//     .min(3, { message: "Minimum 3 characters." })
//     .max(30, { message: "Maximum 30 caracters." }),
//   bio: z
//     .string()
//     .min(3, { message: "Minimum 3 characters." })
//     .max(1000, { message: "Maximum 1000 caracters." }),
// });
