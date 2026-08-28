import { useEffect, useState } from "react";
import DarkButton from "@/assets/website/dark-mode-button.png";
import LightButton from "@/assets/website/light-mode-button.png";
import { cn } from "@/lib/utils";

export const DarkMode = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") ? localStorage.getItem("theme") : "light",
	);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
	};

	const element = document.documentElement; // access to html element

	// set theme to localStorage and html element
	useEffect(() => {
		localStorage.setItem("theme", theme);
		if (theme === "dark") {
			element.classList.add("dark");
		} else {
			element.classList.remove("dark");
		}
	});

	return (
		<button
			type="button"
			className="relative"
			onClick={toggleTheme}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			<img
				src={LightButton}
				alt=""
				className={cn(
					"absolute right-0 z-10 w-12 cursor-pointer transition-all duration-300",
					theme === "dark" ? "opacity-0" : "opacity-100",
				)}
			/>
			<img
				src={DarkButton}
				alt=""
				className={cn(
					"w-12 cursor-pointer transition-all duration-300",
					theme === "dark" ? "opacity-100" : "opacity-0",
				)}
			/>
		</button>
	);
};
