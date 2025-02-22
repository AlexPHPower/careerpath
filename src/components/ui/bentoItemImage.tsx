import React from "react";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import Image from "next/image";

function BentoItemImage({
  imageSrc,
  imageAlt,
  title,
  description,
}: {
  imageSrc?: string;
  imageAlt?: string;
  title: string;
  description: string;
}) {
  return (
    <Card className="overflow-hidden rounded-lg border-none bg-background text-card-foreground shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="relative h-80 w-full">
        <Image
          src={imageSrc ?? "/placeholder.svg"}
          alt={imageAlt ?? "placeholder"}
          fill
          sizes="(max-width: 768px) 100vw, 640px"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <CardHeader className="px-0 pt-0 text-xl font-semibold">
          {title}
        </CardHeader>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </div>
    </Card>
  );
}

export default BentoItemImage;
