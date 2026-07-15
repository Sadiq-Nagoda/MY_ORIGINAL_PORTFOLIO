import type { Project } from "@/lib/types";

export const natoPhoneticAlphabet: Project = {
  slug: "nato-phonetic-alphabet",
  title: "NATO Phonetic Alphabet",
  category: "python-journey",
  status: "Learning Project",
  summary:
    "A command-line application that converts any valid word into its NATO phonetic alphabet equivalent using dictionary comprehensions and CSV data processing.",
  problem:
    "Build a program that reads the NATO phonetic alphabet dataset, creates an efficient lookup structure, accepts user input, and translates each letter of a word into its corresponding NATO code word.",
  architecture:
    "Uses Pandas to load the NATO alphabet CSV into a DataFrame, then employs a dictionary comprehension to map letters to code words. User input is processed with a list comprehension to generate the phonetic representation.",
  lessons:
    "Learned how dictionary and list comprehensions simplify data transformations, how to convert CSV data into efficient lookup dictionaries with Pandas, and how to write concise, readable Python code.",
  stack: ["Python", "Pandas", "CSV"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
// nato-phonetic-alphabet.ts
  screenshots: {
    state: "available",
    images: ["/images/projects/nato-phonetic-alphabet/1.png"],
},
};