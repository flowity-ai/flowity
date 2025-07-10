import React from "react";
import "./App.css";
import "./fonts/foundation.ttf";
import styles from "./style";
import {
	Ninescode,
	Solutions,
	Clients,
	CTA,
	Footer,
	Navbar,
	Stats,
	Testimonials,
	FAQ,
	Hero,
	Features,
	Newsletter,
	AISection,
	Services,
	HowWeWork,
	TableValue,
	Store,
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
				<Solutions />
				<TableValue />
				<HowWeWork />
				<Features />
				<AISection />
				<Services />
				<Newsletter />
				<FAQ />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
