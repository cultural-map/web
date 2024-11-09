import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { useGenerateKeys } from "_hooks/useGenerateKeys";

import { QuestionAndAnswer } from "./types/QuestionAndAnswer";

export const QuestionAndAnswersLayer = (): ReactElement => {
	const { t } = useTranslation();
	const { generateKey } = useGenerateKeys();

	const questionsAndAnswersTopics = t("home.questions_and_answers.questions", {
		returnObjects: true,
	}) as QuestionAndAnswer[];

	return (
		<div className="p-11 sm:px-16 md:px-24 lg:px-32 xl:px-44 2xl:px-60 mt-10 text-default-foreground dark:text-white">
			<div className="flex flex-col items-center">
				<p className="font-bold text-6xl mb-10">{t("home.questions_and_answers.title")}</p>

				<Button className="mb-20" radius="full" color="danger">
					{t("home.questions_and_answers.actions.subscribe")}
				</Button>
			</div>

			<Accordion
				motionProps={{
					variants: {
						enter: {
							y: 0,
							opacity: 1,
							height: "auto",
							transition: {
								height: {
									type: "spring",
									stiffness: 500,
									damping: 30,
									duration: 1,
								},
								opacity: {
									easings: "ease",
									duration: 1,
								},
							},
						},
						exit: {
							y: -10,
							opacity: 0,
							height: 0,
							transition: {
								height: {
									easings: "ease",
									duration: 0.25,
								},
								opacity: {
									easings: "ease",
									duration: 0.3,
								},
							},
						},
					},
				}}
			>
				{questionsAndAnswersTopics.map(({ question, answer }, index) => (
					<AccordionItem
						key={generateKey(index)}
						aria-label={question}
						title={<span className="font-bold text-3xl">{question}</span>}
					>
						{answer}
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};
