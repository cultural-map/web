import { Link } from "@nextui-org/react";
import { ReactElement } from "react";

import { useGenerateKeys } from "_hooks/useGenerateKeys";

type ShortcutTopic = {
	link: string;
	label: string;
};

export type ShortcutsProps = {
	title: string;
	topics?: ShortcutTopic[];
};

export const Shortcuts = ({ title, topics }: ShortcutsProps): ReactElement<ShortcutsProps> => {
	const { generateKey } = useGenerateKeys();

	return (
		<div className="flex flex-col gap-8">
			<p className="text-xl font-semibold text-black">{title}</p>

			<div className="flex flex-col gap-2">
				{topics?.map(({ link, label }, index) => (
					<Link key={generateKey(index)} className="text-lg font-medium text-black" href={link}>
						{label}
					</Link>
				))}
			</div>
		</div>
	);
};
