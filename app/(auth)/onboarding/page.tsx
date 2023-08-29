/*
 * @Author: zrDeng
 * @Date: 2023-08-27 10:45:33
 * @LastEditTime: 2023-08-29 12:16:52
 * @LastEditors: zrDeng
 * @Description: 
 * @FilePath: \项目\threads\app\(auth)\onboarding\page.tsx
 */
import  AccountProfile  from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

async function Page() {
  const user = await currentUser();
  if (!user) return null; // to avoid typescript warnings

  const userInfo = {};
  if (userInfo?.onboarded) redirect("/");

  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="text-light-2">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now, to use Threads.
      </p>

      <section className="mt-9 bg-slate-300 p-10">
        <AccountProfile  user={userData} btnTitle='Continue'></AccountProfile>
      </section>
    </main>
  );
}

export default Page;
