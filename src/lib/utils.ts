import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher<T>(
  url: string,
  options: RequestInit
): Promise<T> {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetcher error:", error);
    throw error;
  }
}

export function capitalizeFirstLetter(str: string): string {
  if (!str) {
    return str; // Handle empty or null strings
  }

  return str[0].toUpperCase() + str.slice(1);
}
