import { Category } from "@/components/Category";
import { Category2 } from "@/components/Category2";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";

export const Home = () => {
	return (
		<div className="overflow-hidden bg-white duration-200 dark:bg-gray-900 dark:text-white">
			<Navbar />
			<Hero />
			<Category />
			<Category2 />
			<Services />
		</div>
	);
};
