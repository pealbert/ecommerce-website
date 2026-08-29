import { Category } from "@/components/Category";
import { Category2 } from "@/components/Category2";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Category />
			<Category2 />
		</>
	);
};
