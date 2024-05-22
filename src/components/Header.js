import React from "react";

const Header = () => {
	return (
		<div
			className={`p-5 h-[80px] flex items-center justify-around transition delay-150 duration-300 bg-secondary text-light hover:opacity-100 ${
				sticky ? "opacity-100" : ""
			}`}
		>
			<a href="#Hero">
				<img className="w-12" src="./logo.png" alt="" />
			</a>
			<div className="flex justify-center gap-x-10">
				
			</div>
		</div>
	);
};

export default Header;
