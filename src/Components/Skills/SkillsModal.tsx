// SkillsModal.tsx
import * as React from "react";
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
    HStack, Box, Text, IconButton
} from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";
import { skills } from "../../Data/Skills";
import { iconSize } from "../../Data/constants";

type SkillsModalProps = {
    isOpen: boolean;
    onClose: () => void;
    initialIndex: number;
}

export const SkillsModal = ({ isOpen, onClose, initialIndex }: SkillsModalProps) => {
    const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

    // keep index in sync with the clicked card each time modal opens
    React.useEffect(() => {
        if (isOpen) setCurrentIndex(initialIndex);
    }, [initialIndex, isOpen]);

    const goPrev = () =>
        setCurrentIndex((i) => (i - 1 + skills.length) % skills.length);
    const goNext = () =>
        setCurrentIndex((i) => (i + 1) % skills.length);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: goNext,
        onSwipedRight: goPrev,
        trackMouse: true,
    });

    const current = skills[currentIndex];
    const Icon = current.icon;

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "xs", md: "lg", lg: "xl" }}>
            <ModalOverlay />
            <ModalContent
                className="dark:!bg-purple-100/70 !bg-zinc-600/30 hover:opacity-80 !m-0 !p-2 backdrop-blur-md"
            >
                <Icon className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md " size={28} />
                <ModalHeader className="text-center dark:text-purple-950 text-white/80">{current.category}</ModalHeader>
                <ModalCloseButton className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md " />
                <ModalBody p={6} {...swipeHandlers} position="relative" className="group">
                    {/* Subtle overlay chevrons like Instagram (fade in on hover) */}
                    <IconButton
                        aria-label="Previous"
                        icon={<FiChevronLeft />}
                        onClick={goPrev}
                        variant="ghost"
                        position="absolute"
                        top="50%"
                        left="8px"
                        transform="translateY(-50%)"
                        opacity={0.25}
                        _hover={{ opacity: 0.8 }}
                        className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md "
                    />
                    <IconButton
                        aria-label="Next"
                        icon={<FiChevronRight />}
                        onClick={goNext}
                        variant="ghost"
                        position="absolute"
                        top="50%"
                        right="8px"
                        transform="translateY(-50%)"
                        opacity={0.25}
                        _hover={{ opacity: 0.8 }}
                        className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md "
                    />

                    {/* Skill chips */}
                    <HStack spacing={3} wrap="wrap" justify="center">
                        {current.skills.map((skill) => {
                            const Icon = skill.icon;
                            return (
                                <Box
                                    key={skill.name}
                                    px={4}
                                    py={2}
                                    rounded="xl"
                                    className="backdrop-blur-md dark:text-purple-950 text-white flex items-center gap-2 background-black"
                                >
                                    <Icon size={iconSize} className="opacity-90" />
                                    <Text fontWeight="medium" className="text-center dark:text-purple-950 text-white/80">{skill.name}</Text>
                                </Box>
                            );
                        })}
                    </HStack>

                    {/* Instagram-style dots */}
                    <HStack justify="center" mt={6} spacing={2}>
                        {skills.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 w-2 rounded-full transition-all ${i === currentIndex
                                    ? "bg-white/90 dark:bg-white/90 w-4"
                                    : "bg-white/50 dark:bg-white/40"
                                    }`}
                                aria-label={`Go to ${skills[i].category}`}
                            />
                        ))}
                    </HStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
