import { cn } from "@/lib/utils";

export const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
	return (
		<button
			className={cn(
				"relative z-10 cursor-pointer text-nowrap rounded-full px-8 py-2 duration-300 hover:scale-105",
				bgColor,
				textColor,
			)}
			onClick={handler}
			type="button"
		>
			{text}
		</button>
	);
};
