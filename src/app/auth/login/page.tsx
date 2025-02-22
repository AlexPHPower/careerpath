import { Layers } from "lucide-react";
import { LoginForm } from "@/components/loginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-gradient-to-r from-background to-card p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md text-primary-foreground">
            <Layers className="size-4" />
          </div>
          StackMatch
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
