"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Input, Divider } from "@heroui/react";
import { Edit, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  const handleEdit = (id: number | string) => {
    router.push(`/news/${id}/edit`);
  };

  const handleDelete = (id: number | string) => {
    const confirmed = confirm("Are you sure you want to delete this article?");
    if (confirmed) {
      console.log("Deleted article with ID:", id);
    }
  };

  const newsData = [
    {
      id: 1,
      title: "Community Outreach Program Launched",
      section: "Events",
      date: "2025-01-15",
      author: "John Doe",
      views: 1250,
    },
    {
      id: 2,
      title: "New Leadership Team Announced",
      section: "Leadership",
      date: "2025-01-10",
      author: "Jane Smith",
      views: 890,
    },
    {
      id: 3,
      title: "Quarterly Fundraising Results",
      section: "Donations",
      date: "2025-01-05",
      author: "Mike Johnson",
      views: 2100,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            News Management
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage news articles and updates
          </p>
        </div>
        <a href="#">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
          >
            New Article
          </button>
        </a>
      </div>

      {/* Table */}
      <Card className="py-6">
        <CardHeader>
          <h3 className="text-lg font-semibold">Articles</h3>
        </CardHeader>

        <CardBody>
          {/* Search bar */}
          <div className="flex w-full flex-wrap md:flex-nowrap max-w-[60%] gap-4 mb-4">
            <Input label="Search articles..." type="text" />
          </div>

          {/* Table wrapper with horizontal scroll */}
          <div className="w-full overflow-x-auto border rounded-lg shadow-2xl">
            <div className="min-w-max">
              <table className="w-full text-left border-separate border-spacing-y-1">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Section
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-4 py-2 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {newsData.map((article, index) => (
                    <React.Fragment key={article.id}>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {article.title}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {article.section}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {article.date}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {article.author}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          {article.views}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-900">
                          <div className="flex gap-3">
                            <Edit
                              className="w-5 h-5 text-blue-500 cursor-pointer hover:text-blue-700"
                              onClick={() => handleEdit(article.id)}
                            />
                            <Trash2
                              className="w-5 h-5 text-red-500 cursor-pointer hover:text-red-700"
                              onClick={() => handleDelete(article.id)}
                            />
                          </div>
                        </td>
                      </tr>

                      {/* Divider between rows */}
                      {index !== newsData.length - 1 && (
                        <tr>
                          <td colSpan={6}>
                            <Divider className="my-2" />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Page;
