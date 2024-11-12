/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import {
	Button,
	Image,
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import LogoDefault from "_assets/images/logo/default.png";
import LogoMinimal from "_assets/images/logo/minimal.png";
import { Breakpoints } from "_constants/breakpoints";
import { useGenerateKeys } from "_hooks/useGenerateKeys";
import { useWindowSize } from "_hooks/useWindowSize";
import { HomeRoutePaths } from "_pages/home/routes/paths";

import { ACTIONS } from "./constants/actions";
import { TABS } from "./constants/tabs";

export const Header = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const { width } = useWindowSize();
	const { generateKey } = useGenerateKeys();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			className="p-6"
			isBordered
			maxWidth="full"
			shouldHideOnScroll
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent>
				{width <= Breakpoints.SM && <NavbarMenuToggle />}

				<NavbarBrand className="items-start">
					<div className="cursor-pointer" onClick={() => navigate(HomeRoutePaths.DEFAULT)}>
						{width > Breakpoints.MD ? (
							<Image className="w-64 h-16" radius="none" src={LogoDefault} />
						) : (
							<Image className="size-12" radius="none" src={LogoMinimal} />
						)}
					</div>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="flex gap-4" justify="end">
				{width > Breakpoints.SM &&
					TABS.map(({ title, link }, index) => (
						<NavbarItem key={generateKey(index)}>
							<Button variant="light" radius="full" onClick={() => navigate(link)}>
								{t(title)}
							</Button>
						</NavbarItem>
					))}

				{ACTIONS.map(({ title, link }, index) => (
					<NavbarItem key={generateKey(index)}>
						<Button color="secondary" radius="full" onClick={() => navigate(link)}>
							{t(title)}
						</Button>
					</NavbarItem>
				))}
			</NavbarContent>

			{width <= Breakpoints.SM && (
				<NavbarMenu>
					{TABS.map(({ title, link }, index) => (
						<NavbarMenuItem key={generateKey(index)}>
							<Link className="w-full" size="lg" color="foreground" onClick={() => navigate(link)}>
								{t(title)}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			)}
		</Navbar>
	);
};
