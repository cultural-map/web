import { GLOBALIZATION_PROPERTIES } from "@cultural-map/locations";
import { ChevronDownIcon, LanguageIcon } from "@heroicons/react/24/solid";
import { Button, Selection, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { ReactElement, useCallback, useMemo, useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

export const LanguageDropdown = (): ReactElement => {
	const {
		t,
		i18n: { changeLanguage, store, language = GLOBALIZATION_PROPERTIES.defaultLanguage },
	} = useTranslation();

	const [selectedKeys, setSelectedKeys] = useState(new Set([language]));

	const availableLanguageKeys = useMemo(
		() => Object.keys(store.data).map((language) => ({ key: Math.random(), language })),
		[store.data],
	);

	const onSelectLanguage = useCallback(
		(selectedOption: Selection) => {
			const selections = Array.from(selectedOption);
			const selectedLanguage = selections[0].toString();

			changeLanguage(selectedLanguage);

			setSelectedKeys(new Set([selectedLanguage]));

			toast(
				t("language.language_dropdown.toast.title", {
					language: selectedLanguage,
				}),
				{
					icon: <LanguageIcon className="size-6" />,
				},
			);
		},
		[t, changeLanguage, setSelectedKeys],
	);

	return (
		<Dropdown>
			<DropdownTrigger>
				<Button
					variant="faded"
					endContent={<ChevronDownIcon className="size-4" />}
					aria-label={t("language.language_dropdown.aria_label.dropdown_menu")}
				>
					{t("language.language_dropdown.label")}
				</Button>
			</DropdownTrigger>

			<DropdownMenu
				variant="flat"
				disallowEmptySelection
				selectionMode="single"
				selectedKeys={selectedKeys}
				items={availableLanguageKeys}
				onSelectionChange={onSelectLanguage}
				aria-label={t("language.language_dropdown.aria_label.dropdown_menu")}
			>
				{({ language }) => <DropdownItem key={language}>{language}</DropdownItem>}
			</DropdownMenu>
		</Dropdown>
	);
};
