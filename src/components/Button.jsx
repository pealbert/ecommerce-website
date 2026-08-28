import { cn } from "@/lib/utils";

// handler = () => {}
export const Button = ({ text, bgColor, textColor }) => {
	return (
		<button
			type="button"
			className={cn(
				"relative z-10 cursor-pointer rounded-full px-8 py-2 duration-300 hover:scale-105",
				bgColor,
				textColor,
			)}
		>
			{text}
		</button>
	);
};
