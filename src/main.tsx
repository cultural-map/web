import { ApolloProvider } from "@apollo/client";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { z } from "zod";
import { makeZodI18nMap } from "zod-i18n-map";

import { BackToTopFloatingActionButton } from "_components/BackToTopFloatingActionButton";
import { ThemeFloatingActionButton } from "_components/ThemeFloatingActionButton";
import { apolloClient } from "_configurations/apollo/client";
import { axeCoreAccessibilityReport } from "_configurations/axe-core/axeCoreAccessibilityReport";
import { i18next } from "_configurations/i18n";

import { router } from "./router";

import "_styles/global/index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<I18nextProvider i18n={i18next}>
			<ApolloProvider client={apolloClient}>
				<NextUIProvider className="size-full" locale={i18next.language}>
					<ThemeProvider attribute="class">
						<RouterProvider router={router} />

						<ThemeFloatingActionButton />
						<BackToTopFloatingActionButton />

						<Toaster
							position="top-right"
							reverseOrder={false}
							toastOptions={{
								className: "bg-gray-800 text-white dark:bg-white dark:text-gray-800",
							}}
						/>
					</ThemeProvider>
				</NextUIProvider>
			</ApolloProvider>
		</I18nextProvider>
	</StrictMode>,
);

axeCoreAccessibilityReport();
z.setErrorMap(makeZodI18nMap());
