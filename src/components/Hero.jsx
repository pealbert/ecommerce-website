import ReactSlick from "react-slick";
import Image3 from "@/assets/category/macbook.png";
import Image2 from "@/assets/category/vr.png";
import Image1 from "@/assets/hero/headphone.png";
import { Button } from "./Button";

const HeroSlide = [
	{
		id: 1,
		img: Image1,
		subtitle: "Beats Solo",
		title: "Wireless",
		title2: "Headphone",
	},
	{
		id: 2,
		img: Image2,
		subtitle: "Beats Solo",
		title: "Wireless",
		title2: "Virtual",
	},
	{
		id: 3,
		img: Image3,
		subtitle: "Beats Solo",
		title: "Branded",
		title2: "Laptops",
	},
];

export const Hero = () => {
	const Slider = ReactSlick.default ?? ReactSlick;

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "ease-in-out",
		pauseOnHover: false,
		pauseOnFocus: true,
	};

	return (
		<div className="container pt-5">
			<div className="hero-bg-color flex min-h-137.5 items-center justify-center overflow-hidden rounded-3xl sm:min-h-162.5">
				<div className="container pb-8 sm:pb-0">
					{/* Hero section */}
					<Slider {...settings}>
						{HeroSlide.map((slide) => (
							<div key={slide.id}>
								<div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2">
									{/* Text content section */}
									<div className="relative z-10 order-2 flex flex-col justify-center gap-4 pt-12 text-center sm:order-1 sm:pt-0 sm:pl-3 sm:text-left">
										<h3 className="font-bold text-2xl">{slide.subtitle}</h3>
										<h2 className="font-bold text-5xl sm:text-6xl lg:text-7xl">
											{slide.title}
										</h2>
										<h1 className="font-bold text-5xl text-white uppercase sm:text-[80px] md:text-[100px] xl:text-[150px] dark:text-white/15">
											{slide.title2}
										</h1>
										<div>
											<Button
												bgColor="bg-primary"
												text="Shop By Category"
												textColor="text-white"
											/>
										</div>
									</div>

									{/* Img section */}
									<div className="order-1 sm:order-2">
										<div>
											<img
												alt=""
												className="relative z-40 mx-auto size-75 object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] sm:size-112.5 sm:scale-105 lg:scale-110"
												src={slide.img}
											/>
										</div>
									</div>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
};
