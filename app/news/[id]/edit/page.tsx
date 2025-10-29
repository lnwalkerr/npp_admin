"use client";

import { useState, FormEvent } from "react";
import { ArrowLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Input, Button, Textarea, Select, SelectItem, DatePicker } from "@heroui/react";
import { Form } from "@heroui/form";

interface FormDataType {
  title: string;
  description: string;
  section: string;
}

export default function EditNewsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [action, setAction] = useState<string | null>(null);

  const handleBack = (): void => {
    router.push("/news");
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data: FormDataType = {
      title: (formData.get("title") as string) || "",
      description: (formData.get("description") as string) || "",
      section: (formData.get("section") as string) || "",
    };

    console.log("✅ Form submitted:", data);
    setAction(`submit ${JSON.stringify(data)}`);
  };

  const handleReset = (): void => {
    setAction("reset");
  };

  const sections = ["Events", "Leadership", "Donations", "Updates"];

  return (
    <div className="p-6">
      {/* Header Section */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleBack}
          className="flex items-center justify-center p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-blue-600 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          title="Go back"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        <div>
          <h1 className="text-3xl font-bold text-foreground">Edit Article</h1>
          <p className="mt-1 text-gray-500">Fill in the details below</p>
        </div>
      </div>

      {/* Content Section */}
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Article Details</h3>
        </CardHeader>

        <CardBody>
          <div className="px-4 sm:px-6">
            <Form className="flex flex-col gap-6" onSubmit={handleSubmit} onReset={handleReset}>
              
              {/* Title */}
              <Input
                isRequired
                errorMessage="Please enter a title"
                label="Title"
                labelPlacement="outside"
                name="title"
                placeholder="Article Title"
                type="text"
              />

              {/* Description */}
              <Textarea
                isRequired
                errorMessage="Please enter a valid description"
                label="Description"
                labelPlacement="outside"
                name="description"
                placeholder="Enter your article description"
                minRows={4}
                variant="flat"
              />

              {/* Section + Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/* Section */}
                <Select
                  label="Section"
                  labelPlacement="outside"
                  placeholder="Select section"
                  isRequired
                  errorMessage="Please select a section"
                  name="section"
                  className="w-full"
                >
                  {sections.map((section) => (
                    <SelectItem key={section}>{section}</SelectItem>
                  ))}
                </Select>

                {/* Publish Date */}
                <DatePicker
                  label="Publish Date"
                  labelPlacement="outside"
                  className="w-full"
                  isRequired
                  errorMessage="Please select a date"
                  name="publishDate"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button color="primary" type="submit">
                  Submit
                </Button>
                <Button type="reset" variant="flat">
                  Reset
                </Button>
              </div>
            </Form>
          </div>
        </CardBody>

        <CardFooter />
      </Card>
    </div>
  );
}
