import { FaCaretDown } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { DarkMode } from "./DarkMode";

const MenuLinks = [
	{
		id: 1,
		name: "Home",
		href: "#",
	},
	{
		id: 2,
		name: "Shop",
		href: "#shop",
	},
	{
		id: 3,
		name: "About",
		href: "#about",
	},
	{
		id: 4,
		name: "Blogs",
		href: "#blog",
	},
];

const DropdownLinks = [
	{
		id: 1,
		name: "Trending Products",
		href: "#",
	},
	{
		id: 2,
		name: "Best Selling",
		href: "#",
	},
	{
		id: 3,
		name: "Top Rated",
		href: "#",
	},
];

export const Navbar = () => {
	return (
		<div className="relative z-40 bg-white duration-200 dark:bg-gray-900 dark:text-white">
			<div className="py-4">
				<div className="container flex items-center justify-between">
					{/* Logo and Links section */}
					<div className="flex items-center gap-4">
						<a
							className="font-semibold text-2xl text-primary uppercase tracking-widest sm:text-3xl"
							href="/"
						>
							Eshop
						</a>

						{/* Menu Items */}
						<div className="hidden lg:block">
							<ul className="flex items-center gap-4">
								{MenuLinks.map((link) => (
									<li key={link.id}>
										<a
											className="inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white"
											href={link.href}
										>
											{link.name}
										</a>
									</li>
								))}

								{/* Dropdown */}
								<li className="group relative cursor-pointer">
									<button
										className="flex items-center gap-0.5 py-2 font-semibold text-gray-500 dark:hover:text-white"
										type="button"
									>
										Quick Links
										<span>
											<FaCaretDown className="duration-300 group-hover:rotate-180" />
										</span>
									</button>

									{/* Dropdown Links */}
									<div className="absolute z-50 hidden w-50 rounded-md bg-white p-2 shadow-md group-hover:block dark:bg-gray-900 dark:text-white">
										<ul className="space-y-2">
											{DropdownLinks.map((link) => (
												<li key={link.id}>
													<a
														className="inline-block w-full rounded-md p-2 font-semibold text-gray-500 duration-200 hover:bg-primary/20 dark:hover:text-white"
														href={link.href}
													>
														{link.name}
													</a>
												</li>
											))}
										</ul>
									</div>
								</li>
							</ul>
						</div>
					</div>

					{/* Navbar Right section */}
					<div className="flex items-center justify-between gap-4">
						{/* Search Bar section */}
						<div className="group relative hidden sm:block">
							<input className="search-bar" placeholder="Search" type="text" />
							<IoMdSearch className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 text-xl duration-200 group-hover:text-primary dark:text-gray-400" />
						</div>

						{/* Order-button section */}
						<button className="relative p-3" type="button">
							<FaCartShopping className="text-gray-600 text-xl dark:text-gray-400" />
							<div className="absolute top-0 right-0 flex size-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
								4
							</div>
						</button>

						{/* Dark Mode section */}
						<div>
							<DarkMode />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
