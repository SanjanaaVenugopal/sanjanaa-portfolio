import { useState, useEffect } from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, Button, Image, IconButton, useDisclosure } from "@chakra-ui/react";
import { Bug } from "lucide-react";
import AngryCat from "../../Data/AngryCat.png"
import { ReportBugButtonTexts, ReportBugTitle } from "../../Data/constants";
import { CloseButtonIcon } from "../CommandBar/CloseButtonIcon";
import { ContactForm } from "../CommandBar/ContactForm";

export type BugProps = {
    size?: number;
}

export const ReportBug = ({ size = 28 }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [yesCount, setYesCount] = useState(0);

    const openModal = () => {
        onOpen();
        setYesCount(0);
    };

    const handleYesClick = () => {
        if (yesCount < 8) {
            setYesCount((prev) => prev + 1);
        }
    };

    useEffect(() => {
        if (yesCount === 7) {
            const timer = setTimeout(() => {
                setYesCount(8); // switch to form
            }, 3000);

            return () => clearTimeout(timer); // cleanup if modal closes early
        }
    }, [yesCount]);

    const modalTitle = ReportBugTitle[yesCount];

    return (
        <>
            <button
                onClick={openModal}
                className="hover:opacity-80 transition"
            >
                <Bug size={size} className="text-purple-950 dark:text-white/80" />
            </button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "xs", md: "lg", lg: "xl" }}>
                <ModalOverlay />
                <ModalContent className="dark:!bg-purple-100/70 !bg-zinc-600/30 hover:opacity-80 !m-0 !p-2 backdrop-blur-md">
                    {yesCount < 8 && (
                        <>
                            <ModalHeader className="dark:text-purple-950 text-white/80">{modalTitle}
                                <CloseButtonIcon
                                    onClick={onClose}
                                />
                            </ModalHeader>

                            <ModalBody>
                                <Image
                                    src={AngryCat}
                                    alt="Angry Cat"
                                    mx="auto"
                                />
                            </ModalBody>
                            {yesCount < 7 && (
                                <ModalFooter display="flex" justifyContent="center" gap="6">
                                    <Button
                                        onClick={handleYesClick}
                                        colorScheme="red"
                                        size={"md"}
                                        style={{
                                            transform: `scale(${1 - yesCount * 0.15})`,
                                            transition: "transform 0.2s ease",
                                        }}
                                    >
                                        {ReportBugButtonTexts.yes}
                                    </Button>
                                    <Button
                                        onClick={onClose}
                                        colorScheme="green"
                                        size={"md"}
                                        style={{
                                            transform: `scale(${1 + yesCount * 0.1})`,
                                            transition: "transform 0.2s ease",
                                        }}
                                    >
                                        {ReportBugButtonTexts.no}
                                    </Button>
                                </ModalFooter>
                            )}
                        </>
                    )}
                    {yesCount == 8 && (
                        <ContactForm onResult={onClose} onClose={onClose} />
                    )}

                </ModalContent>
            </Modal>
        </>
    );
}
