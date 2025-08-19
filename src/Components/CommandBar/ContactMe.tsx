import React from "react";
import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react";
import { ContactForm } from "./ContactForm";
import { ContactMeClown, ContactMeEmail, ContactMeSlider } from "../../Constants/constants";

type ContactMeProps = { isOpen: boolean; onClose: () => void };

export const ContactMe: React.FC<ContactMeProps> = ({ isOpen, onClose }) => {
    const [phase, setPhase] = React.useState<
        "slider" | "clown" | "form" | "success" | "error" | null
    >("slider");
    const [sliderValue, setSliderValue] = React.useState(5231478906);

    React.useEffect(() => {
        let t1: NodeJS.Timeout | undefined;
        let t2: NodeJS.Timeout | undefined;

        if (isOpen) {
            setPhase("slider");
            t1 = setTimeout(() => setPhase("clown"), 10000); // after 10s
            t2 = setTimeout(() => setPhase("form"), 10000 + 3000); // clown 3s
        } else {
            setPhase("slider");
        }

        return () => {
            if (t1) clearTimeout(t1);
            if (t2) clearTimeout(t2);
        };
    }, [isOpen]);

    // handle result from form
    const handleResult = (ok: boolean) => {
        setPhase(ok ? "success" : "error");
        // keep modal open to show status for 3s, THEN close
        setTimeout(() => {
            onClose();
            setPhase(null);
        }, 3000);
    };

    const onFormClose = () => {
        onClose();
        setPhase(null);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "xs", md: "lg", lg: "xl" }} >
            <ModalOverlay />
            <ModalContent className="dark:!bg-purple-100/70 !bg-zinc-600/30 hover:opacity-80 !m-0 !p-2 backdrop-blur-md">
                {phase === "slider" && (
                    <>
                        <ModalHeader className="dark:text-purple-950 text-white/80">{ContactMeSlider.sliderHeader}</ModalHeader>
                        <ModalBody>
                            <Slider
                                defaultValue={5231478906}
                                min={1000000000}
                                max={9999999999}
                                onChange={(val) => setSliderValue(val)}
                                className="dark:text-purple-950 text-white/30"
                            >
                                <SliderTrack>
                                    <SliderFilledTrack className="!bg-pink-300 dark:!bg-purple-950" />
                                </SliderTrack>
                                <SliderThumb className="!bg-pink-450 dark:!bg-purple-700" />

                            </Slider>
                            <p className="mt-2 text-sm dark:text-purple-950 text-white/80">{ContactMeSlider.sliderValue} {sliderValue}</p>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                onClick={onClose}
                                className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md hover:brightness-125 hover:scale-105">
                                {ContactMeSlider.sliderClose}
                            </Button>
                        </ModalFooter>
                    </>
                )}

                {phase === "clown" && (
                    <div className="p-6 text-center">
                        <h2 className="text-2xl font-bold dark:text-purple-950 text-white/80">{ContactMeClown.header}</h2>
                        <p className="mt-2 text-gray-600 dark:text-purple-950 text-white/80">{ContactMeClown.tagline}</p>
                    </div>
                )}

                {phase === "form" && (
                    <ContactForm onResult={handleResult} onClose={onFormClose} />
                )}

                {phase === "success" && (
                    <>
                        <ModalHeader className="dark:text-purple-950 text-white/80">{ContactMeEmail.successHeader}</ModalHeader>
                        <ModalBody className="dark:text-purple-950 text-white/80">{ContactMeEmail.successTagline}</ModalBody>
                    </>
                )}

                {phase === "error" && (
                    <>
                        <ModalHeader className="dark:text-purple-950 text-white/80">{ContactMeEmail.failureHeader}</ModalHeader>
                        <ModalBody className="dark:text-purple-950 text-white/80">{ContactMeEmail.failureTagline}</ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};
