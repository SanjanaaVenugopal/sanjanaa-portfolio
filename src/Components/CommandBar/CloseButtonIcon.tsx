import {
    CloseButton,
} from "@chakra-ui/react";

type CloseButtonProps = {
    onClick: () => void;
}

export const CloseButtonIcon: React.FC<CloseButtonProps> = ({ onClick }) => (

    < CloseButton
        onClick={onClick}
        position="absolute"
        right="12px"
        top="12px"
        className="!bg-transparent dark:!text-purple-950 !text-white/80 transition-all duration-200 hover:backdrop-blur-md "
    />

)