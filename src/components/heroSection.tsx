"use client";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MultiSelect } from "@/components/ui/multiSelect";
import { Button } from "@/components/ui/button";
import { techStacksAndServices } from "@/data/techStacks";

const formSchema = z.object({
  stack: z.array(z.string()),
});

const frameworksList = techStacksAndServices;

export default function HeroSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stack: ["react", "angular"],
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log("Form submitted");
    console.log("Submitted Data:", data);
  }

  return (
    <div className="flex w-full flex-col-reverse items-center space-y-6 p-4 md:flex-row md:space-x-4 md:space-y-0 md:p-10">
      {/* Left Section */}
      <div className="w-full space-y-4 text-center md:w-1/2 md:text-left">
        <h2 className="text-4xl font-bold text-card-foreground sm:text-5xl md:text-6xl">
          Craft your profile...
        </h2>
        <h2 className="text-xl font-bold text-foreground sm:text-2xl">
          Choose your stack...
          <br />
          <span className="text-lg text-foreground sm:text-xl">Get hired.</span>
        </h2>
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-1/2">
        <Card className="border-none bg-transparent p-4 shadow-none sm:p-6">
          <CardHeader className="pl-0 pt-0 text-center text-2xl font-semibold sm:text-3xl md:text-left">
            Get Started
          </CardHeader>
          <CardDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="stack"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg sm:text-xl">
                        Tech Stack
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
                <Button type="submit" className="mt-2 w-full md:w-auto">
                  Submit
                </Button>
              </form>
            </Form>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}
