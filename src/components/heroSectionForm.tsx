"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MultiSelect } from "@/components/ui/multiSelect";
import JobTitleInput from "@/components/jobTitleInput";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { techStacksAndServices } from "@/data/techStacks";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  stack: z.array(z.string()),
  jobTitle: z.string(),
});

const frameworksList = techStacksAndServices;

export default function HeroSectionForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stack: ["react", "typescript", "nextjs"],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted");
    console.log("Submitted Data:", data);

    sessionStorage.setItem("onboardingFormData", JSON.stringify(data));

    router.push("auth/login");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="stack"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg sm:text-xl">
                ...a tech stack...
              </FormLabel>
              <FormControl>
                <MultiSelect
                  options={frameworksList}
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  placeholder="Select tech stacks"
                  variant="cardForeground"
                  animation={2}
                  maxCount={3}
                  className="border-card-foreground focus-visible:ring-card-foreground"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg sm:text-xl">
                ...and a job title
              </FormLabel>
              <FormControl>
                <JobTitleInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="mt-2 w-full md:w-auto">
          Create Profile
        </Button>
      </form>
    </Form>
  );
}
