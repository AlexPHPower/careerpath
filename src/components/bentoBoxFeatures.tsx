import { FileText, MessageSquare, CloudUpload } from "lucide-react";
import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

export default function BentoBoxFeatures() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <BentoItem
            icon={<CloudUpload className="h-10 w-10" />}
            title="Subdomain CV Hosting"
            description="Transform your CV into a professional web link, making it easier to share and stand out."
          />
          <BentoItem
            icon={<FileText className="h-10 w-10" />}
            title="AI CV Writing Assistance"
            description="Get intelligent suggestions and improvements for your CV with our AI-powered tools."
          />
          <BentoItem
            icon={<MessageSquare className="h-10 w-10" />}
            title="Interactive Application Process"
            description="Engage in a feedback-based application process to refine your application and increase your chances."
          />
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
    <Card className="rounded-lg border-none bg-background p-6 text-card-foreground shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex flex-col items-start justify-start">
        {icon}
        <CardHeader className="pl-0 text-xl font-semibold">{title}</CardHeader>
      </div>
      <CardDescription className="text-muted-foreground">
        {description}
      </CardDescription>
    </Card>
  );
}
