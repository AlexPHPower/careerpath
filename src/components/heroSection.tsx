"use client";

import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import React, { useState } from "react";

import { Turtle, Cat, Dog, Rabbit, Fish } from "lucide-react";

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
    <>
      <div className="flex w-full items-center space-x-4">
        <div className="relative w-full space-y-1">
          <h2 className="text-6xl font-bold text-card-foreground">
            Craft your profile...
          </h2>
          <h2 className="text-2xl font-bold text-foreground">
            Choose your stack...
            <br />
            <span className="text-xl text-foreground">Get hired.</span>
          </h2>
        </div>
        <div className="relative w-full">
          <Card className="border-none bg-transparent p-6 shadow-none">
            <CardHeader className="pl-0 pt-0 text-3xl font-semibold">
              Get Started
            </CardHeader>
            <CardDescription>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="stack"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tech Stack</FormLabel>
                        <FormControl>
                          <MultiSelect
                            options={frameworksList}
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            placeholder="Select frameworks"
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
                  <Button type="submit" className="mt-2">
                    Submit
                  </Button>
                </form>
              </Form>
            </CardDescription>
          </Card>
        </div>
      </div>
    </>
  );
}
