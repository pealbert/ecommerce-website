import { useState } from "react";
import { ErrorSection } from "@/components/ErrorSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Popup } from "@/components/Popup";
import { ProgressBar } from "@/components/ProgressBar";

export const NotFound = () => {
	const [orderPopup, setOrderPopup] = useState(false);

	const handleOrderPopup = () => {
		setOrderPopup(!orderPopup);
	};

	return (
		<div className="bg-white duration-200 dark:bg-gray-900 dark:text-white">
			<ProgressBar />
			<Navbar handler={handleOrderPopup} />
			<ErrorSection />
			<Footer />

			<Popup handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} />
		</div>
	);
};
