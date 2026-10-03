import {
	FaGithub,
	FaInstagram,
	FaLocationArrow,
	FaMobileAlt,
} from "react-icons/fa";
import type { FooterLink } from "@/types";

const FooterLinks: FooterLink[] = [
	{
		id: 1,
		title: "Home",
		href: "/",
	},
	{
		id: 2,
		title: "About",
		href: "/",
	},
	{
		id: 3,
		title: "Contact",
		href: "/",
	},
	{
		id: 4,
		title: "Blog",
		href: "/",
	},
];

export const Footer = () => {
	return (
		<div className="dark:bg-gray-950">
			<div className="container">
				<div className="grid pt-5 pb-20 md:grid-cols-3">
					{/* Company details */}
					<div className="px-4 py-8">
						<a
							className="font-semibold text-2xl text-primary uppercase tracking-widest sm:text-3xl"
							href="/"
						>
							Eshop
						</a>
						<p className="pt-3 text-gray-600 lg:pr-24 dark:text-white/70">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
							excepturi amet saepe obcaecati minus.
						</p>
					</div>

					{/* Footer links */}
					<div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
						<div className="px-4 py-8">
							<h2 className="mb-3 font-bold text-xl sm:text-left">
								Important Links
							</h2>
							<ul className="space-y-3">
								{FooterLinks.map((link) => (
									<li key={link.id}>
										<a
											className="text-gray-600 duration-300 hover:text-black hover:dark:text-white"
											href={link.href}
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Second col links */}
						<div className="px-4 py-8">
							<h2 className="mb-3 font-bold text-xl sm:text-left">
								Quick Links
							</h2>
							<ul className="space-y-3">
								{FooterLinks.map((link) => (
									<li key={link.id}>
										<a
											className="text-gray-600 duration-300 hover:text-black hover:dark:text-white"
											href={link.href}
										>
											{link.title}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Company Address */}
						<div className="col-span-2 px-4 py-8 sm:col-auto">
							<h2 className="mb-3 font-bold text-xl sm:text-left">Address</h2>
							<div>
								<div className="flex items-center gap-3">
									<FaLocationArrow className="text-xl" />
									<p>Noida, Uttar Pradesh</p>
								</div>
								<div className="mt-6 flex items-center gap-3">
									<FaMobileAlt className="text-3xl" />
									<a href="tel:+910123456789">+910123456789</a>
								</div>

								{/* social links */}
								<div className="mt-6 flex items-center gap-3">
									<a
										href="https://github.com/pealbert/ecommerce-website"
										rel="noopener noreferrer"
										target="_blank"
									>
										<FaGithub className="text-3xl duration-300 hover:text-primary" />
									</a>
									<a
										href="https://www.instagram.com/pealberte/"
										rel="noopener noreferrer"
										target="_blank"
									>
										<FaInstagram className="text-3xl duration-300 hover:text-primary" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
