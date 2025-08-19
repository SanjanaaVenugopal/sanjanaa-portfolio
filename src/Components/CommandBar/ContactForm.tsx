import React from "react";
import emailjs from "emailjs-com";
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormErrorMessage,
    CloseButton,
} from "@chakra-ui/react";
import { ContactFormTexts } from "../../Data/constants";
import { emailJS } from "../../EmailJS.config";

type ContactFormProps = { onResult: (ok: boolean) => void, onClose: () => void };

export const ContactForm: React.FC<ContactFormProps> = ({ onResult, onClose }) => {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });
    const [touched, setTouched] = React.useState(false);
    const [sending, setSending] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const isValidEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isMin3 = (v: string) => v.trim().length >= 3;

    const isFormValid =
        isMin3(form.name) && isValidEmail(form.email) && isMin3(form.message);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        setTouched(true);

        // Only send when all constraints are met
        if (!isFormValid || sending) return;

        try {
            setSending(true);
            await emailjs.send(
                emailJS.serviceId,
                emailJS.templateId,
                form,
                emailJS.publicKey
            );
            onResult(true); // parent will show success for 3s then close
        } catch (err) {
            console.error(err);
            onResult(false); // parent shows error for 3s (keeps modal open)
        } finally {
            setSending(false);
        }
    };

    return (
        <form onSubmit={sendEmail}>
            <ModalHeader className="dark:!text-purple-950 !text-white/80 flex">
                {ContactFormTexts.headline}
                <CloseButton
                    onClick={onClose}
                    position="absolute"
                    right="12px"
                    top="12px"
                    className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md "
                />
            </ModalHeader>
            <ModalBody className="dark:!text-purple-950 !text-white/80">
                <FormControl isInvalid={touched && !isMin3(form.name)} mb={3}>
                    <FormLabel>{ContactFormTexts.name}</FormLabel>
                    <Input name="name" value={form.name} onChange={handleChange} />
                    <FormErrorMessage>{ContactFormTexts.nameError}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={touched && !isValidEmail(form.email)} mb={3}>
                    <FormLabel>{ContactFormTexts.email}</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={() => setTouched(true)}
                    />
                    <FormErrorMessage>{ContactFormTexts.emailError}</FormErrorMessage>
                </FormControl>

                <FormControl mb={3}>
                    <FormLabel>{ContactFormTexts.title}</FormLabel>
                    <Input name="title" value={form.title} onChange={handleChange} />
                </FormControl>

                <FormControl isInvalid={touched && !isMin3(form.message)} mb={1}>
                    <FormLabel>{ContactFormTexts.message}</FormLabel>
                    <Input name="message" value={form.message} onChange={handleChange} />
                    <FormErrorMessage>{ContactFormTexts.messageError}</FormErrorMessage>
                </FormControl>
            </ModalBody>

            <ModalFooter>
                <Button
                    type="submit"
                    isLoading={sending}
                    className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md ">
                    {ContactFormTexts.send}
                </Button>
            </ModalFooter>
        </form>
    );
};
