import Link from "next/link";

import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import BentoBox from "@/components/bentobox";
import JobSearch from "@/components/jobSearch";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="from-background to-card flex min-h-screen flex-col items-center justify-center bg-gradient-to-r">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Create <span className="text-periwinkle">T3</span> App
          </h1>
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <JobSearch />
          </div>
        </div>
        <div className="bg-lightsection card-foreground flex w-full flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex w-4/5 flex-col items-center justify-center gap-12">
            <h1 className="text-background text-4xl font-bold">CareerPath</h1>
            <p className="text-destructive text-lg">
              CareerPath is a platform that is designed to help you find the
              best job opportunities. We see the value in candidates over the
              value of job postings. We want to make sure that you get the best
              job opportunities.
            </p>
            <BentoBox />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
