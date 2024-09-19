import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, SVGProps } from "react";

type IconTitleProps = {
	title?: string;
	titleId?: string;
};

export type HeroIcon = ForwardRefExoticComponent<
	IconTitleProps & PropsWithoutRef<SVGProps<SVGSVGElement>> & RefAttributes<SVGSVGElement>
>;
