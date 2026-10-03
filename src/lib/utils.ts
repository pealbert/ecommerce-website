import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ClassNameValue } from "@/types";

export const cn = (...inputs: ClassNameValue[]): string => {
	return twMerge(clsx(inputs));
};
