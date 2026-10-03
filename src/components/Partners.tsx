import brand1 from "@/assets/brand/br-1.png";
import brand2 from "@/assets/brand/br-2.png";
import brand3 from "@/assets/brand/br-3.png";
import brand4 from "@/assets/brand/br-4.png";
import brand5 from "@/assets/brand/br-5.png";
import { cn } from "@/lib/utils";
import type { PartnersProps } from "@/types";

export const Partners = ({ animation }: PartnersProps) => {
	return (
		<div className="-mb-px hidden overflow-hidden bg-gray-200 py-8 md:block dark:bg-white/10">
			<div className={cn("flex w-max", animation)}>
				<div className="flex min-w-screen shrink-0 items-center justify-around">
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand1} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand2} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand3} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand4} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand5} />
				</div>
				<div className="flex min-w-screen shrink-0 items-center justify-around">
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand1} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand2} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand3} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand4} />
					<img alt="brand" className="w-20 shrink-0 dark:invert" src={brand5} />
				</div>
			</div>
		</div>
	);
};
