import { Box, Flex } from "@chakra-ui/react";
import * as React from "react";

type SkillCardProps = {
    title: string;
    icon: React.ElementType;
    onClick: () => void;
    size?: number;
}

export const SkillCard = ({ title, icon: Icon, onClick, size = 28 }: SkillCardProps) => {
    return (
        <Box
            as="button"
            onClick={onClick}
            className="backdrop-blur-md text-purple-950 dark:text-white transition-all hover:opacity-95 hover:-translate-y-0.5"
            w={{ base: "120px", md: "150px" }}
            h={{ base: "120px", md: "150px" }}
            borderRadius="sm"
        >
            <Flex direction="column" align="center" gap={3}>
                <Icon size={size} className="opacity-90" />
                <span className="font-semibold text-center">{title}</span>
            </Flex>
        </Box>
    );
}
