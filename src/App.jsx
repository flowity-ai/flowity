import React from "react";
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
	Testimonials,
	Hero,
	Features,
	Newsletter,
	AISection,
} from "./components";

const App = () => (
	<div className="bg-primary w-full overflow-hidden">
		<div className={`${styles.paddingX} ${styles.flexCenter}`}>
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
				<Business />
				<CardDeal />
				<Features />
				<AISection />
				<Newsletter />
				<Ninescode />
				<Testimonials />
				<Clients />
				<CTA />
				<Footer />
			</div>
		</div>
	</div>
);

export default App;
