const Heading = ({ title, subtitle }) => {
	return (
		<div className="mx-auto my-10 max-w-150 space-y-2 text-center">
			<h2 className="font-bold text-3xl lg:text-4xl">{title}</h2>
			<p className="text-gray-400 text-xs">{subtitle}</p>
		</div>
	);
};

export default Heading;
