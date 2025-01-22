"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { formSchema } from "./formSchema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

interface QuestionInputProps {
  onSubmit: (data: { question: string }) => Promise<void>;
  variant?: "default" | "alternate";
}

const QuestionInput = ({
  onSubmit,
  variant = "default",
}: QuestionInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)} // This will now pass the form data object to onSubmit
        className={cn(`
            ${variant === "default" && "md:w-6/12 mx-auto rounded-3xl"} 
            ${variant === "alternate" && " rounded-lg"}
            space-y-6 w-full overflow-hidden p-1`)}
      >
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder={`${variant === "default" ? "A question, a curiosity, anything you would like to know" : " "} `}
                  className={`
                    ${variant === "default" && "rounded-3xl"} 
                    ${variant === "alternate" && "rounded-lg"} 
                    p-6  text-sm sm:text-lg lg:text-[1rem] bg-white`}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default QuestionInput;
