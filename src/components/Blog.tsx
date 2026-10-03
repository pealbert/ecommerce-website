import Img1 from "@/assets/blogs/blog-1.jpg";
import Img2 from "@/assets/blogs/blog-2.jpg";
import Img3 from "@/assets/blogs/blog-3.jpg";
import type { BlogPost } from "@/types";
import { BlogCard } from "./BlogCard";
import { Heading } from "./Heading";

const Blogs: BlogPost[] = [
	{
		id: 1,
		title: "How to choose perfect smartwatch",
		subtitle:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, ullam ipsa laudantium odio incidunt.",
		published: "Jan 20, 2024 by Dilshad",
		image: Img1,
		aosDelay: 0,
	},
	{
		id: 2,
		title: "How to choose perfect gadget",
		subtitle:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, ullam ipsa laudantium odio incidunt.",
		published: "Jan 20, 2024 by Satya",
		image: Img2,
		aosDelay: 100,
	},
	{
		id: 3,
		title: "How to choose perfect VR headset",
		subtitle:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum, ullam ipsa laudantium odio incidunt.",
		published: "Jan 20, 2024 by Sabir",
		image: Img3,
		aosDelay: 200,
	},
];

export const Blog = () => {
	return (
		<div className="my-12" id="blog">
			<div className="container">
				{/* Header section */}
				<Heading subtitle="Explore Our Blogs" title="Recent News" />

				{/* Body section */}
				<div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-7">
					{/* Blog card */}
					{Blogs.map((blog) => (
						<BlogCard blog={{ ...blog }} key={blog.id} />
					))}
				</div>
			</div>
		</div>
	);
};
