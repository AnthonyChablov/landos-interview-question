"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

// Define the schema for form validation
const formSchema = z.object({
  query: z
    .string()
    .min(2, { message: "Question must be at least 2 characters." })
    .max(50, { message: "Question must be at most 50 characters." }),
});

interface QueryInputFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

const QueryInputForm = ({ onSubmit }: QueryInputFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full md:w-6/12 mx-auto  overflow-hidden rounded-3xl p-1"
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="A question, a curiosity, anything you would like to know"
                  className="p-6 rounded-3xl text-sm sm:text-lg lg:text-[1rem] bg-white"
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

export default QueryInputForm;
