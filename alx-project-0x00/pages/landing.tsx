import Button from "@/components/Button";
import React from "react";
import Card from "@/components/Card"
const Landing: React.FC = () => {
  return (
    <main className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-3xl font-bold">Welcome to ALX Project</h1>
      <Button title="Small Button" size="small" shape="rounded-sm" styles="bg-red-500" />
      <Button title="Medium Button" size="medium" shape="rounded-lg" styles="bg-green-500" />
      <Button title="Large Button" size="large" shape="rounded-full" styles="bg-blue-500" />
    </main>
  );
};

export default Landing;
