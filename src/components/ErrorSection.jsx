import { Button } from "./Button";
import { BiErrorCircle } from "react-icons/bi";

export const ErrorSection = () => {
	return (
		<div className="h-[90vh] container flex flex-col items-center justify-center gap-2">
			<BiErrorCircle className="text-5xl text-primary"/>
			<h1 className="text-4xl text-gray-700 dark:text-white">Oops...</h1>
			<p className="text-lg text-gray-600 dark:text-gray-400">Page Not Found</p>
			<a href="/" className="mt-6">
				<Button
					bgColor="bg-primary"
					text="Return Home"
					textColor="text-white"
				/>
			</a>
		</div>
	);
};
