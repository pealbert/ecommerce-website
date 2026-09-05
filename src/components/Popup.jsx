import { IoCloseOutline } from "react-icons/io5";
import { Button } from "./Button";

export const Popup = ({ orderPopup, handleOrderPopup }) => {
	return (
		<>
			{orderPopup && (
				<div>
					<div className="fixed top-0 left-0 z-50 size-full bg-black/50 backdrop-blur-sm">
						<div className="fixed top-1/2 left-1/2 w-75 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4 shadow-md duration-200 dark:bg-gray-900 dark:text-white">
							{/* Header section */}
							<div className="flex items-center justify-between">
								<h2>Order Now</h2>
								<div>
									<IoCloseOutline
										className="cursor-pointer text-2xl"
										onClick={handleOrderPopup}
									/>
								</div>
							</div>

							{/* Form section */}
							<div className="mt-4">
								<input className="form-input" placeholder="Name" type="text" />
								<input
									className="form-input"
									placeholder="Email"
									type="email"
								/>
								<input
									className="form-input"
									placeholder="Address"
									type="text"
								/>
								<div className="mt-4 flex justify-center">
									<Button
										bgColor="bg-primary"
										text="Order Now"
										textColor="text-white"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
