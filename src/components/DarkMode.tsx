import { useEffect, useState } from "react";
import DarkButton from "@/assets/website/dark-mode-button.png";
import LightButton from "@/assets/website/light-mode-button.png";
import { cn } from "@/lib/utils";
import type { Theme } from "@/types";

export const DarkMode = () => {
	const [theme, setTheme] = useState<Theme>(() =>
		localStorage.getItem("theme") === "dark" ? "dark" : "light",
	);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	};

	// set theme to localStorage and html element
	useEffect(() => {
		localStorage.setItem("theme", theme);
		const element = document.documentElement;
		if (theme === "dark") {
			element.classList.add("dark");
		} else {
			element.classList.remove("dark");
		}
	}, [theme]);

	return (
		<button
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
			className="relative"
			onClick={toggleTheme}
			type="button"
		>
			<img
				alt=""
				className={cn(
					"absolute right-0 z-10 w-12 cursor-pointer transition-all duration-300",
					theme === "dark" ? "opacity-0" : "opacity-100",
				)}
				src={LightButton}
			/>
			<img
				alt=""
				className={cn(
					"w-12 cursor-pointer transition-all duration-300",
					theme === "dark" ? "opacity-100" : "opacity-0",
				)}
				src={DarkButton}
			/>
		</button>
	);
};
