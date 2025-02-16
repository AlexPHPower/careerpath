import { Send, CloudUpload, Bot } from "lucide-react";
import React from "react";
import BentoItemIcon from "@/components/ui/bentoItemIcon";

export default function BentoBoxFeatures() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <BentoItemIcon
            icon={<CloudUpload className="h-10 w-10" />}
            title="Subdomain CV Hosting"
            description="Transform your CV into a professional web link, making it easier to share and stand out."
          />
          <BentoItemIcon
            icon={<Bot className="h-10 w-10" />}
            title="AI CV Writing Assistance"
            description="Get intelligent suggestions and improvements for your CV with our AI-powered tools."
          />
          <BentoItemIcon
            icon={<Send className="h-10 w-10" />}
            title="Interactive Application Process"
            description="Engage in a feedback-based application process to refine your application and increase your chances."
          />
        </div>
      </div>
    </div>
  );
}
