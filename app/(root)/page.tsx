/*
 * @Author: zrDeng
 * @Date: 2023-08-27 09:31:27
 * @LastEditTime: 2023-08-30 11:35:35
 * @LastEditors: zrDeng
 * @Description:
 * @FilePath: \项目\threads\app\(root)\page.tsx
 */
import { currentUser } from "@clerk/nextjs";
import { fetchPosts } from "@/lib/actions/thread.actions";
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await currentUser();
  if (!user){
    redirect("/sign-in")
  };
  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect("/onboarding");
  const result = await fetchPosts(1, 30);
  console.log(result);
  return (
    <main>
      <div className="head-text">Home</div>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </main>
  );
}
