import { useDisclosure } from "@chakra-ui/react";
import { Github, Linkedin, Instagram, Contact2 } from "lucide-react";
import { ContactMe } from "../CommandBar/ContactMe";

export const Footer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <footer>
                <div className="flex justify-center space-x-6 mb-3">
                    <a
                        href="https://github.com/SanjanaaVenugopal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <Github size={28} className="text-purple-950 dark:text-white/80" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/sanjanaa-gv/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <Linkedin size={28} className="text-purple-950 dark:text-white/80" />
                    </a>
                    <a
                        href="https://www.instagram.com/sanjanaa_venugopal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80 transition"
                    >
                        <Instagram size={28} className="text-purple-950 dark:text-white/80" />
                    </a>
                    <button
                        onClick={onOpen}
                        className="hover:opacity-80 transition"
                    >
                        <Contact2 size={28} className="text-purple-950 dark:text-white/80" />
                    </button>
                </div>

                <p className="text-center text-xs text-purple-950 dark:text-white/80">
                    © {new Date().getFullYear()} Sanjanaa Venugopal. All rights reserved.
                </p>
            </footer>
            <ContactMe isOpen={isOpen} onClose={onClose} />
        </>
    );
}
