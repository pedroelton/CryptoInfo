import React from "react";
import logo2 from "../asset/logo2.webp";

function Header() {
	return (
		<div className="bg-slate-800 h-auto flex lg:justify-between justify-center lg:flex-row flex-col items-center lg:p-10 p-4">
			<div className=" flex flex-col gap-3 items-start">
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
			<div className="text-center">
				<a href="https://pedroelton.vercel.app">
					<h3 className="text-lg text-slate-400">More projects</h3>
				</a>
			</div>
		</div>
	);
}

export default Header;
