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
/**
 * QuestionInput Component
 *
 * @description
 * - A form component that allows the user to input a question
 * - Validates the input using `zod` and `react-hook-form` with a schema defined in `wineQuestionSchema`
 * - Displays a search icon when in the "default" variant and provides responsive design
 * - Accepts an `onSubmit` function to handle the submitted question
 * - The `variant` prop allows switching between "default" and "alternate" styles
 *
 * @param onSubmit A function to handle the form submission with the input data
 * @param variant An optional prop to control the styling of the form ("default" or "alternate")
 *
 * @returns JSX for the question input form
 *
 * @example
 * <QuestionInput onSubmit={handleSubmit} />
 */
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
                    items-center rounded-full justify-between focus:outline-none focus:ring-2 focus:ring-black 
                      transition-transform duration-200 ease-in-out
                      hover:scale-105 hover:border-black
                      hover:bg-gray-100/90"
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
                      py-8 px-6 text-md bg-white
                      border-[1px] border-gray-300 hover:bg-gray-50/90
                      
                    `}
                    {...field}
                  />

                  <Image
                    className={`absolute right-6 top-1/2 transform bg-white 
                        -translate-y-1/2 text-gray-500 z-10
                        ${variant === "alternate" && "hidden"} 
                      `}
                    src={searchIcon}
                    alt="searchIcon"
                    placeholder="blur"
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
