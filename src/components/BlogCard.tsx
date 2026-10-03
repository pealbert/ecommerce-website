import type { BlogCardProps } from "@/types";

export const BlogCard = ({ blog }: BlogCardProps) => {
	return (
		<div
			className="bg-white dark:bg-gray-900"
			data-aos="fade-up"
			data-aos-delay={blog.aosDelay}
		>
			{/* Image section */}
			<div className="mb-2 overflow-hidden rounded-2xl">
				<img
					alt=""
					className="h-55 w-full rounded-2xl object-cover duration-500 hover:scale-105"
					src={blog.image}
				/>
			</div>

			{/* Content section */}
			<div className="space-y-2">
				<p className="text-gray-500 text-xs">{blog.published}</p>
				<p className="line-clamp-1 font-bold">{blog.title}</p>
				<p className="line-clamp-2 text-gray-600 text-sm dark:text-gray-400">
					{blog.subtitle}
				</p>
			</div>
		</div>
	);
};
