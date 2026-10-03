import {
	FaCarSide,
	FaCheckCircle,
	FaHeadphonesAlt,
	FaWallet,
} from "react-icons/fa";
import type { ServiceInfo } from "@/types";

const ServicesInfo: ServiceInfo[] = [
	{
		id: 1,
		icon: <FaCarSide className="text-4xl text-primary md:text-5xl" />,
		title: "Free Shopping",
		description: "Free Shipping On All Order",
		aosDelay: 0,
	},
	{
		id: 2,
		icon: <FaCheckCircle className="text-4xl text-primary md:text-5xl" />,
		title: "Safe Money",
		description: "30 Days Money Back",
		aosDelay: 100,
	},
	{
		id: 3,
		icon: <FaWallet className="text-4xl text-primary md:text-5xl" />,
		title: "Secure Payment",
		description: "All Payment Secure",
		aosDelay: 200,
	},
	{
		id: 4,
		icon: <FaHeadphonesAlt className="text-4xl text-primary md:text-5xl" />,
		title: "Online Support",
		description: "Technical Support 24/7",
		aosDelay: 300,
	},
];

export const Services = () => {
	return (
		<div>
			<div className="container my-8" id="services">
				<div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
					{ServicesInfo.map((service) => (
						<div
							className="flex flex-col items-center gap-4 sm:flex-row"
							data-aos="fade-up"
							data-aos-delay={service.aosDelay}
							key={service.id}
						>
							{service.icon}
							<div>
								<h2 className="text-center font-bold sm:text-left lg:text-xl">
									{service.title}
								</h2>
								<h2 className="text-gray-400 text-sm">{service.description}</h2>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
