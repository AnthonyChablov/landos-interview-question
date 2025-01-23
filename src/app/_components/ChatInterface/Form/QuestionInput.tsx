"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import searchIcon from "@/assets/search.png";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { wineQuestionSchema } from "@/schemas/wineQuestionSchema";
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
  const form = useForm<z.infer<typeof wineQuestionSchema>>({
    resolver: zodResolver(wineQuestionSchema),
    defaultValues: {
      question: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)} // This will now pass the form data object to onSubmit
        className={cn(`
            ${variant === "default" && "md:w-6/12 mx-auto rounded-full"} 
            ${variant === "alternate" && " rounded-lg"}
            space-y-6 w-full  p-1`)}
      >
        <FormField
          control={form.control}
          name="question"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className="relative h-fit w-full flex 
                    items-center rounded-full justify-between"
                >
                  <Input
                    placeholder={`${
                      variant === "default"
                        ? "A question, a curiosity, anything you would like to know"
                        : " "
                    } `}
                    className={`
                    ${variant === "default" && "rounded-full"} 
                    ${variant === "alternate" && "rounded-lg"} 
                      py-8 px-6  text-sm sm:text-lg lg:text-[1rem] bg-white
                    `}
                    {...field}
                  />
                  <Image
                    className={`absolute right-6 top-1/2 transform 
                        -translate-y-1/2 text-gray-500 z-10
                        ${variant === "alternate" && "hidden"} 
                      `}
                    src={searchIcon}
                    alt="searchIcon"
                  />
                </div>
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
