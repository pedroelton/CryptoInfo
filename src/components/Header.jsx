import React from "react";

function Header() {
	return (
		<div className="bg-slate-800 h-auto flex lg:justify-between justify-center lg:flex-row flex-col items-center p-4 lg:p-10">
			<div className=" flex flex-col gap-3 items-start">
				<a href="https://thecryptoinfo.vercel.app/">
					<img
						src={require("../asset/Vector.png")}
						alt="logo"
						className="lg:w-[400px] w-80"
					/>
				</a>
				<p className="text-lg text-white">
					Accurate cryptocurrency information
				</p>
			</div>
			<div className="text-center">
				<h3 className="text-xl text-slate-300">More projects at</h3>
				<p className="text-lg text-slate-400 underline hover:text-slate-300">
					{" "}
					<a href="https://pedroelton.vercel.app">pedroelton.vercel.app</a>{" "}
				</p>
			</div>
		</div>
	);
}

export default Header;
