"use client";

import { TransitionPanel } from "@/components/core/transition-panels";
import { useState } from "react";
import Books from "./shelpComponents/books";
import Resources from "./shelpComponents/resources";
import Journal from "./shelpComponents/journal";
import MyGear from "./shelpComponents/myGear";

const ITEMS = [
  { icon: "📚", label: "Books", component: <Books /> },
  { icon: "🖇️", label: "Resources", component: <Resources /> },
  { icon: "✍🏻", label: "Journals", component: <Journal /> },
  { icon: "🎒", label: "My Gear", component: <MyGear /> },
];

export default function Shelf() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full">
      <h1 className="font-bold text-2xl mb-4">My Shelf</h1>
      <p className="leading-5 mb-4">
        This is my little corner of the internet where I keep all my
        stuff—journals, books, resources, and gear. It&apos;s like a snapshot of
        my life, all in one place. Feel free to
        take a look around. You might find something interesting.
      </p>
      <div className=" flex flex-wrap gap-2">
        {ITEMS.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${ 
              activeIndex === index
                ? "bg-neutral-200 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
                : "bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400"
            }`}
          >
            <span className="text-xl lg:text-base">{item.icon}</span>{" "}
            <span className="hidden lg:inline-block">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="overflow-hidden">
        <TransitionPanel
          activeIndex={activeIndex}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          variants={{
            enter: { opacity: 0, y: -50, filter: "blur(4px)" },
            center: { opacity: 1, y: 0, filter: "blur(0px)" },
            exit: { opacity: 0, y: 50, filter: "blur(4px)" },
          }}
        >
          {ITEMS.map((item, index) => (
            <div key={index} className="py-2">
              <h1 className="mb-2 font-semibold text-2xl text-neutral-800 dark:text-neutral-100">
                {item.label}
              </h1>
              {item.component}
            </div>
          ))}
        </TransitionPanel>
      </div>
    </div>
  );
}
