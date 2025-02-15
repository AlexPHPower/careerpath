import Link from "next/link";
import { Globe, FileText, MessageSquare, ThumbsUp } from "lucide-react";
import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function BentoBox() {
  return (
    <div className="w-full px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <BentoItem
            icon={<Globe className="h-8 w-8" />}
            title="Subdomain CV Hosting"
            description="Transform your CV into a professional web link, making it easier to share and stand out."
          />
          <BentoItem
            icon={<FileText className="h-8 w-8" />}
            title="AI CV Writing Assistance"
            description="Get intelligent suggestions and improvements for your CV with our AI-powered tools."
          />
          <BentoItem
            icon={<MessageSquare className="h-8 w-8" />}
            title="Interactive Application Process"
            description="Engage in a feedback-based application process to refine your application and increase your chances."
          />
          <BentoItem
            icon={<ThumbsUp className="h-8 w-8" />}
            title="Verified Job Postings"
            description="Apply with confidence knowing that job postings are vetted for legitimacy and quality."
          />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/features"
            className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-md px-6 py-3 font-semibold"
          >
            Explore All Features
          </Link>
        </div>
      </div>
    </div>
  );
}

function BentoItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-background text-card-foreground rounded-lg border-none p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-center">
        {icon}
        <CardHeader className="ml-3 text-xl font-semibold">{title}</CardHeader>
      </div>
      <CardDescription className="text-muted-foreground text-center">
        {description}
      </CardDescription>
    </Card>
  );
}
