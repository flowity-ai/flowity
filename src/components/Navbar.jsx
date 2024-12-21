import React from "react";
import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full py-6 navbar flex">
			<div className="foundation flex flex-1 items-center content-center">
				<img src={logo} alt="flowity-logo" className="w-[50px] h-[45px]" />
				<span className="text-white hidden sm:flex">FLOWITY AI</span>
			</div>

			<div className="list-none md:flex hidden justify-center items-center flex-1">
				<ul className="flex">
					{navLinks.map((nav, index) => (
						<li
							key={nav.id}
							className={`font-poppins font-normal cursor-pointer text-[16px] ${
								active === nav.title ? "text-white" : "text-dimWhite"
							} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
							onClick={() => setActive(nav.title)}
						>
							<a href={`#${nav.id}`}>{nav.title}</a>
						</li>
					))}
				</ul>
			</div>

			<div className="list-none md:flex hidden flex flex-1 justify-end">
				<button
					type="button"
					className={`py-3 px-4 mr-3 font-poppins font-medium text-[16px] text-dimWhite bg-purple-gradient rounded-[10px] outline-none ${styles}`}
				>
					Book a Call
				</button>
				<button class="bg-gradient-to-r from-logoPurple to-logoCyan rounded-[10px] p-[.1rem] w-[95px]">
					<span class="flex justify-center w-full bg-gray-900 py-3 font-poppins font-medium text-[16px] rounded-[9px]">
						<span className="text-gradient font-semibold">Log In</span>
					</span>
				</button>
			</div>

			<div className="md:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle(!toggle)}
				/>

				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6 bg-black-gradient absolute top-20 right-0 my-2 min-w-full rounded-xl sidebar`}
				>
					<div className="list-none flex justify-center flex-1 flex-col">
						<ul className="mb-3">
							{navLinks.map((nav, index) => (
								<li
									key={nav.id}
									className={`font-poppins font-medium cursor-pointer text-[16px] ml-[5px] ${
										active === nav.title ? "text-white" : "text-dimWhite"
									} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
									onClick={() => setActive(nav.title)}
								>
									<a href={`#${nav.id}`}>{nav.title}</a>
								</li>
							))}
						</ul>
						<div className="flex flex-1 flex-col justify-center w-full mr-[10px]">
							<button
								type="button"
								className={`my-[10px] py-3 px-4 mb-3 font-poppins font-medium text-[16px] text-dimWhite bg-purple-gradient rounded-[15px] outline-none ${styles}`}
							>
								Book a Call
							</button>
							<button class="bg-gradient-to-r from-logoPurple to-logoCyan rounded-[10px] p-[.1em]">
								<span class="flex justify-center w-full bg-gray-900 py-2 font-poppins font-medium text-[16px] rounded-[10px]">
									<span className="text-gradient font-semibold">Log In</span>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
