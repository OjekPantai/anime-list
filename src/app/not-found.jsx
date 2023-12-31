"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} color="white" />
        <h3 className="text-color-tWhite text-4xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="text-color-tWhiteSoft hover:text-color-tWhite underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Page;
