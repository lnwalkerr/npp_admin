"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

export default function Home() {
  const dataa = [
    { name: "Jan", users: 400, amt: 2400 },
    { name: "Feb", users: 520, amt: 2210 },
    { name: "Mar", users: 680, amt: 2290 },
    { name: "Apr", users: 750, amt: 2000 },
    { name: "May", users: 890, amt: 2181 },
    { name: "Jun", users: 1050, amt: 2500 },
  ];
  const dataaa = [
    { name: "Jan", Donations: 2400, News: 24 },
    { name: "Feb", Donations: 2210, News: 32 },
    { name: "Mar", Donations: 2290, News: 28 },
    { name: "Apr", Donations: 2000, News: 35 },
    { name: "May", Donations: 2181, News: 42 },
    { name: "Jun", Donations: 2500, News: 38 },
  ];
  const data = [
    { title: "Total Users", value: 1250, change: "+12% from last month" },
    {
      title: "Total Donations",
      value: `$14,581`,
      change: "+8% from last month",
    },
    { title: "News Articles", value: 199, change: "+5% from last month" },
    { title: "Events", value: 24, change: "+2% from last month" },
  ];
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h1 className="font-bold text-3xl text-foreground">Dashboard</h1>
        <p className="mt-1">Welcome back to your admin panel</p>
      </div>
      <div className="flex gap-4 flex-wrap">
        {data.map((item) => (
          <div className="flex-1 flex flex-col justify-between border min-h-44 border-gray-300 rounded-xl p-6 bg-white shadow-2xl">
            <div className="pb-3">
              <div className="text-sm font-medium">{item.title}</div>
            </div>
            <div className="">
              <div>
                <div className="text-2xl font-bold text-foreground">
                  {item.value}
                </div>
                <p className="text-green-600 mt-1 text-[12px]">{item.change}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6 flex flex-row flex-wrap gap-6">
        <div className="py-6 flex-1 flex flex-col border border-gray-300 rounded-xl bg-white gap-6 shadow-2xl">
          <div className="px-6">User Growth</div>
          <div className="px-6 flex-1">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={dataa}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="users" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="py-6 flex flex-1 mb-6 flex-col border border-gray-300 rounded-xl bg-white gap-6 shadow-2xl">
          <div className="px-6">Activity Overview</div>
          <div className="px-6 flex-1">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={dataaa}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis ticks={[0, 650, 1300, 1950, 2600]} domain={[0, 2600]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Donations" fill="#28a745" /> {/* Green */}
                <Bar dataKey="News" fill="#f97316" /> {/* Orange */}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
