import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";

function BentoItemIcon({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="bg-homepagebackground text-homepagecardforeground rounded-lg border-none p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="mb-4 flex flex-col items-start justify-start">
        {icon}
        <CardHeader className="pl-0 text-xl font-semibold">{title}</CardHeader>
      </div>
      <CardDescription className="text-homepagecardforeground">
        {description}
      </CardDescription>
    </Card>
  );
}

export default BentoItemIcon;
