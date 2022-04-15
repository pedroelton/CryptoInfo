import React from "react";
import logo2 from "../asset/logo2.webp";

function Header({ onChange }) {
	return (
		<div className="bg-slate-800 h-auto flex lg:justify-between justify-center lg:flex-row flex-col items-center lg:p-10 p-4">
			<div className=" flex flex-col gap-3 lg:items-start items-center w-full">
				<a href="https://thecryptoinfo.vercel.app/">
					<img
						src={logo2}
						alt="logo"
						className="h-20 hover:scale-105 transition-all duration-300"
					/>
					{/* <img
						src={require("../asset/Vector.png")}
						alt="logo"
						className="lg:w-[400px] w-80"
					/> */}
				</a>
				<p className="text-lg text-white lg:pl-8 w-full text-center lg:text-left">
					Accurate cryptocurrency information
				</p>
			</div>
			<div className="flex items-center lg:justify-end justify-center w-full">
				<input
					type="text"
					className="flex p-4 rounded-xl bg-slate-200 text-slate-800 text-xl md:w-[400px] w-full my-4"
					placeholder="ex. Bitcoin..."
					onChange={onChange}
				/>
			</div>
		</div>
	);
}

export default Header;
