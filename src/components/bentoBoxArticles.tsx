import React from "react";
import BentoItemImage from "@/components/ui/bentoItemImage";
import Link from "next/link";

export default function BentoBoxFeatures() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <BentoItemImage
            imageSrc="/stock/interview-stock-1.jpg"
            imageAlt="interview"
            title="Common interview questions"
            description="We have prepared a list of common interview questions to help you prepare for your next interview."
          />
          <BentoItemImage
            imageSrc="/stock/salary.jpg"
            imageAlt="salary"
            title="Salary and Benefits"
            description="The ultimate guide to negotiating your salary and benefits package."
          />
          <BentoItemImage
            imageSrc="/stock/man-with-laptop.jpg"
            imageAlt="interview"
            title="CV writing tips"
            description="Get expert advice on how to write a compelling CV that stands out to potential employers."
          />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/articles"
            className="bg-homepagebackground rounded-md px-6 py-3 font-semibold text-white"
          >
            Explore All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
