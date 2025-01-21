"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define the schema for form validation
const formSchema = z.object({
  query: z
    .string()
    .min(2, { message: "Query must be at least 2 characters." })
    .max(50, { message: "Query must be at most 50 characters." }),
});

const QueryInputForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // Handle the submitted values
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 w-full md:w-6/12 mx-auto"
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="A question, a curiosity, anything you would like to know"
                  className="p-6 rounded-3xl text-2xl"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        {/*        <Button type="submit" className="w-full rounded-3xl">
          Submit
        </Button> */}
      </form>
    </Form>
  );
};

export default QueryInputForm;
