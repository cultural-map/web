import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactElement } from "react";

import { useScrollPosition } from "_hooks/useScrollPosition";

export const BackToTopFloatingActionButton = (): ReactElement => {
	const scrollPosition = useScrollPosition();

	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="fixed bottom-16 right-4">
			<AnimatePresence>
				{scrollPosition >= 500 && (
					<motion.div
						exit={{ opacity: 0 }}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						whileHover={{ scale: 1.2 }}
						transition={{
							type: "spring",
							damping: 20,
							duration: 0.5,
							stiffness: 260,
						}}
					>
						<Button radius="full" variant="faded" onClick={handleClick} isIconOnly>
							<ArrowUpIcon className="size-4" />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
