import React from 'react';
import { Link } from "@nextui-org/react";

export default function Grades() {
  const grades = [9, 10, 11, 12];

  return (
    <div className="flex flex-wrap justify-center">
      {grades.map((grade) => (
        <div key={grade} className="m-4 bg-white shadow-md rounded-lg overflow-hidden max-w-xs dark:bg-gray-700">
          <div className="p-4 dark:text-gray-200">
          <h2 className="font-bold text-2xl mb-2">Grade {grade}</h2>
          <p className="text-gray-700 text-base dark:text-gray-300">
              Information about grade {grade}.
            </p>
          </div>
          <div className="px-4 py-2 bg-gray-300">
          <Link href={`/resources/ese/${grade}`}>
              <a className="text-sm text-gray-700 font-semibold uppercase dark:text-gray-500">Learn More</a>
            </Link>          </div>
        </div>
      ))}
    </div>
  );
}