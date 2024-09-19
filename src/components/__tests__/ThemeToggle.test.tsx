import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import * as NextThemes from "next-themes";
import * as ReactHotToast from "react-hot-toast";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { ThemeFloatingActionButton } from "_components/ThemeFloatingActionButton";
import { AvailableThemes } from "_styles/themes";

const setThemeMock = vi.fn();

vi.mock("next-themes");

const useThemeSpy = vi.spyOn(NextThemes, "useTheme");
useThemeSpy.mockReturnValue({
	setTheme: setThemeMock,
	themes: ["light", "dark", "system"],
});

vi.mock("react-hot-toast");
const toastSpy = vi.spyOn(ReactHotToast, "toast");

const setup = () => {
	render(<ThemeFloatingActionButton />);
};

describe("<ThemeFloatingActionButton />", () => {
	describe("given the toggle button", () => {
		it("should render the button", () => {
			setup();

			const button = screen.getByRole("button", {
				name: "theme.available_theme.aria_label",
			});
			expect(button).toBeVisible();
		});

		describe("when 'light' mode", () => {
			beforeEach(() => {
				useThemeSpy.mockReturnValue({
					theme: "light",
					setTheme: setThemeMock,
					themes: ["light", "dark", "system"],
				});
			});

			describe("and clicked", () => {
				beforeEach(() => {
					setup();

					const button = screen.getByRole("button", {
						name: "theme.available_theme.aria_label",
					});
					userEvent.click(button);
				});

				it("then dispatch the 'setTheme' with 'dark' theme", async () => {
					await waitFor(() => {
						expect(setThemeMock).toBeCalledWith(AvailableThemes.DARK);
					});
				});

				it("then dispatch the 'toast' with 'dark' theme", async () => {
					await waitFor(() => {
						expect(toastSpy).toBeCalledWith("theme.toggle_theme_button.toast.title", {
							icon: <MoonIcon className="size-6" />,
						});
					});
				});
			});
		});

		describe("when 'dark' mode", () => {
			beforeEach(() => {
				useThemeSpy.mockReturnValue({
					theme: "dark",
					setTheme: setThemeMock,
					themes: ["light", "dark", "system"],
				});
			});

			describe("and clicked", () => {
				beforeEach(() => {
					setup();

					const button = screen.getByRole("button", {
						name: "theme.available_theme.aria_label",
					});
					userEvent.click(button);
				});

				it("then dispatch the 'setTheme' with 'light' theme", async () => {
					await waitFor(() => {
						expect(setThemeMock).toBeCalledWith(AvailableThemes.LIGHT);
					});
				});

				it("then dispatch the 'toast' with 'light' theme", async () => {
					await waitFor(() => {
						expect(toastSpy).toBeCalledWith("theme.toggle_theme_button.toast.title", {
							icon: <SunIcon className="size-6" />,
						});
					});
				});
			});
		});

		describe("when 'system' mode", () => {
			beforeEach(() => {
				useThemeSpy.mockReturnValue({
					theme: "system",
					systemTheme: "light",
					setTheme: setThemeMock,
					themes: ["light", "dark", "system"],
				});
			});

			describe("and clicked", () => {
				it("then dispatch the 'setTheme' with 'light' theme", async () => {
					setup();

					const button = screen.getByRole("button", {
						name: "theme.available_theme.aria_label",
					});
					userEvent.click(button);

					await waitFor(() => {
						expect(setThemeMock).toBeCalledWith(AvailableThemes.LIGHT);
					});
				});
			});
		});
	});
});
