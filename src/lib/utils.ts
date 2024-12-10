import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { HTTPS, HTTP } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const urlcheck = async function checkIfDomainExists(url: string) {
  // Attempt to make a HEAD request
  if (
    /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/.test(url)
  ) {
    return true;
  }
  return false;
};
export const generateID=()=>{
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    const randomDigits = Math.floor(100000 + Math.random() * 900000).toString(); // Generates 6-digit number
    return `${randomLetter}${randomDigits}`;
}