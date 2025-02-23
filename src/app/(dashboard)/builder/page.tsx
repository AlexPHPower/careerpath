// pages/create-profile.tsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreateProfile() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;

    // Redirect if the profile is already complete
    if (session?.user.isProfileComplete) {
      router.push("/dashboard");
    }
  }, [session, status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold">Create Your Profile</h1>
      <form>
        {/* Profile creation form fields */}
        <div className="mt-4">
          <label htmlFor="displayName">Display Name</label>
          <input
            id="displayName"
            type="text"
            placeholder="Enter your display name"
            className="w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 rounded bg-blue-500 p-2 text-white"
        >
          Save Profile
        </button>
      </form>
    </div>
  );
}
