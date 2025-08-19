import { useDisclosure } from "@chakra-ui/react";
import { Contact2 } from "lucide-react";
import { ContactMe } from "../CommandBar/ContactMe";
import { socialLinks } from "../../Data/constants";
import SocialIcon from "./SocialIcon";

export const Footer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <footer>
                <div className="flex justify-center space-x-6 mb-3">
                    {
                        socialLinks.map(({ href, Icon }) => (
                            <SocialIcon href={href} Icon={Icon} />
                        ))
                    }
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
