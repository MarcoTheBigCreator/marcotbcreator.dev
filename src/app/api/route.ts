import { promises as fs } from "fs";
import path from "path";

const file = fs
  .readFile(path.resolve("/public/resumes/cv-harvard-en.pdf"))
  .toString();
