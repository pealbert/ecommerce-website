import { BiErrorCircle } from "react-icons/bi";
import { Button } from "./Button";

export const ErrorSection = () => {
	return (
		<div className="container flex h-[90vh] flex-col items-center justify-center gap-2">
			<BiErrorCircle className="text-5xl text-primary" />
			<h1 className="text-4xl text-gray-700 dark:text-white">Oops...</h1>
			<p className="text-gray-600 text-lg dark:text-gray-400">Page Not Found</p>
			<a className="mt-6" href="/">
				<Button
					bgColor="bg-primary"
					text="Return Home"
					textColor="text-white"
				/>
			</a>
		</div>
	);
};
