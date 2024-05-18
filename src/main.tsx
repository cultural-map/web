import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router";

import { axeCoreAccessibilityReport } from "_configs/axe-core/axeCoreAccessibilityReport";
import { i18next } from "_configs/i18n";

import "_styles/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<NextUIProvider>
			<ThemeProvider attribute="class">
				<I18nextProvider i18n={i18next}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</I18nextProvider>
			</ThemeProvider>
		</NextUIProvider>
	</StrictMode>,
);

axeCoreAccessibilityReport();
