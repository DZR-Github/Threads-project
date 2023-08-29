/*
 * @Author: zrDeng
 * @Date: 2023-08-29 14:08:27
 * @LastEditTime: 2023-08-29 14:30:29
 * @LastEditors: zrDeng
 * @Description:
 * @FilePath: \项目\threads\app\(root)\create-thread\page.tsx
 */
import PostThread from "@/components/forms/PostThread";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import {redirect} from "next/navigation"


async function Page() {
    const user = await currentUser()

    if(!user) return null

    const userInfo = await fetchUser(user.id)

    if(!userInfo?.onboarded) redirect("/onboarding")

  return (
    <div>
        <h1 className="head-text">Create Threads!</h1>
        <PostThread userId={userInfo._id}></PostThread>
    </div>
  )
}

export default Page;
