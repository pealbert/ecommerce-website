import smartwatch from "@/assets/category/smartwatch.png";
import headphone from "@/assets/hero/headphone.png";
import { Banner } from "@/components/Banner";
import { Blog } from "@/components/Blog";
import { Category } from "@/components/Category";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Partners } from "@/components/Partners";
import { Products } from "@/components/Products";
import { ProgressBar } from "@/components/ProgressBar";
import { Services } from "@/components/Services";

const Banners = [
	{
		discount: "30% OFF",
		title: "Fine Smile",
		date: "10 Jan to 28 Jan",
		image: headphone,
		product: "Air Solo Bass",
		subtitle: "Winter Sale",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quod.",
		bgColor: "bg-primary",
		buttonTextColor: "text-primary",
	},
	{
		discount: "30% OFF",
		title: "Happy Hours",
		date: "14 Jan to 28 Jan",
		image: smartwatch,
		product: "Smart Solo",
		subtitle: "Winter Sale",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, quod.",
		bgColor: "bg-brand-green",
		buttonTextColor: "text-brand-green",
	},
];

export const Home = () => {
	return (
		<div className="overflow-hidden bg-white duration-200 dark:bg-gray-900 dark:text-white">
			<ProgressBar />
			<Navbar />
			<Hero />
			<Category />
			<Services />
			<Banner banner={{ ...Banners[0] }} />
			<Products />
			<Banner banner={{ ...Banners[1] }} />
			<Blog />
			<Partners />
			<Footer />
		</div>
	);
};
