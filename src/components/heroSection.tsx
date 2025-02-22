import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";
import HeroSectionForm from "@/components/heroSectionForm";

export default function HeroSection() {
  return (
    <div className="flex w-full flex-col-reverse items-center space-y-6 md:flex-row md:space-x-4 md:space-y-0 md:p-10">
      {/* Left Section */}
      <div className="w-full space-y-4 text-center md:w-1/2 md:text-left">
        <h2 className="text-xl font-bold text-card-foreground sm:text-4xl md:text-6xl">
          Craft your profile
        </h2>
        <h2 className="text-2xl font-bold text-card-foreground sm:text-3xl md:text-4xl">
          Choose your stack
          <br />
          <span className="text-lg text-card-foreground sm:text-xl md:text-2xl">
            Get hired.
          </span>
        </h2>
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2">
        <Card className="border-none bg-transparent p-4 shadow-none sm:p-6">
          <CardHeader className="pl-0 pt-0 text-center text-2xl font-semibold sm:text-3xl md:text-left">
            It all starts with...
          </CardHeader>
          <CardDescription>
            <HeroSectionForm />
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
