import Link from "next/link";

import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import BentoBoxFeatures from "@/components/bentoBoxFeatures";
import BentoBoxArticles from "@/components/bentoBoxArticles";
import JobSearch from "@/components/jobSearch";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-background to-card">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-14">
          <div className="flex h-64 w-full flex-col items-center justify-center gap-12">
            <JobSearch />
          </div>
        </div>
        <div className="card-foreground flex w-full flex-col items-center justify-center gap-12 bg-lightsection px-4 py-16">
          <div className="flex w-fit flex-col items-start justify-center gap-12">
            <h1 className="text-4xl font-bold text-background">Features</h1>
            <BentoBoxFeatures />
          </div>
          <div className="flex w-fit flex-col items-start justify-center gap-12">
            <BentoBoxArticles />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
