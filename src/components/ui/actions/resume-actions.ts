"use server";
import { promises as fs } from "fs";

export default async function NamePage() {
  const file = await fs.readFile(
    process.cwd() + "/resumes/cv-harvard-en.pdf",
    "utf-8"
  );
  return file;
}
