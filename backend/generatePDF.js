const puppeteer = require("puppeteer");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.get("/download-pdf", async (req, res) => {
	try {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();

		// Load your React component page
		await page.goto("http://localhost:5173/pulse-report", {
			waitUntil: "networkidle0",
		});

		const pdfBuffer = await page.pdf({
			format: "A4",
			printBackground: true,
			margin: { top: "10mm", right: "10mm", bottom: "10mm", left: "10mm" },
		});

		await browser.close();

		res.setHeader("Content-Type", "application/pdf");
		res.setHeader(
			"Content-Disposition",
			"attachment; filename=Executive_Report.pdf"
		);
		res.setHeader("Content-Length", pdfBuffer.length);

		res.send(pdfBuffer);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error generating PDF");
	}
});

const PORT = 5000; // Different from React
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
