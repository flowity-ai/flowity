import React from "react";
import "./App.css";
import "./fonts/foundation.ttf";
import styles from "./style";
import {
	Ninescode,
	Business,
	CardDeal,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	FAQ,
	Hero,
	Features,
	Newsletter,
	AISection,
	Switcher,
} from "./components";

const App = () => (
	<div className="bg-primary w-full overflow-clip">
		<div
			className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-[99999] nav-bg`}
		>
			<div className={`${styles.boxWidth}`}>
				<Navbar />
			</div>
		</div>

		<div className={`bg-primary ${styles.flexStart}`}>
			<div className={`${styles.boxWidth}`}>
				<Hero />
			</div>
		</div>

		<div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
			<div className={`${styles.boxWidth}`}>
				<Clients />
				<Business />
				<CardDeal />
				<Features />
				<AISection />
				<Switcher />
				<Newsletter />
				<Ninescode />
				<FAQ />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
