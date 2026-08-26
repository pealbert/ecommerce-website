import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

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
]

const Navbar = () => {
	return (
		<div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
			<div className="py-4">
				<div className="container flex justify-between items-center">
					{/* Logo and Links section */}
					<div className="flex items-center gap-4">
						<a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">Eshop</a>

						{/* Menu Items */}
						<div className="hidden lg:block">
							<ul className="flex items-center gap-4">
								{MenuLinks.map((link) => (
									<li key={link.id}>
										<a href={link.href} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Navbar Right section */}
					<div className="flex justify-between items-center gap-4">
						{/* Search Bar section */}
						<div className="relative group hidden sm:block">
							<input type="text" placeholder="Search" className="search-bar" />
							<IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
						</div>

						{/* Order-button section */}
						<button type="button" className="relative p-3">
							<FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
							<div className="size-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">4</div>
						</button>

						{/* Dark Mode section */}

					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;