import { auth } from "@/server/auth";
import { api, HydrateClient } from "@/trpc/server";
import BentoBoxFeatures from "@/components/bentoBoxFeatures";
import BentoBoxArticles from "@/components/bentoBoxArticles";
import HeroSection from "@/components/heroSection";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="from-homepagegradient1 to-homepagegradient2 flex min-h-screen flex-col items-center justify-center bg-gradient-to-r">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-14">
          <div className="flex min-h-80 w-full flex-col items-center justify-center">
            <HeroSection />
          </div>
        </div>
        <div className="card-foreground bg-homepagelightsection flex w-full flex-col items-center justify-center gap-12 px-4 py-16">
          <div className="flex w-fit flex-col items-start justify-center gap-12">
            <h1 className="text-homepagebackground text-4xl font-bold">
              Features
            </h1>
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
