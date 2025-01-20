import React from "react";
import { Form } from "react-hook-form";
import { z } from "zod";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  query: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(50, {
      message: "Username must be at most 50 characters.",
    }),
});

const QueryInputForm = () => {
  return (
    <div className="w-full">
      <Input
        className=" w-full md:w-6/12 mx-auto p-6 rounded-3xl text-2xl"
        type="email"
        placeholder="A question, a curiosity, anything you would like to know"
      />
    </div>
  );
};

export default QueryInputForm;
