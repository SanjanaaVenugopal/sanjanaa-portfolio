import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { SkillCard } from "./SkillsCard";
import { SkillsModal } from "./SkillsModal";
import { skills } from "../../Data/SkillsConstants";
import { SkillsHeader } from "../../Data/constants";

export const Skills = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const openModal = (index: number) => {
        setSelectedIndex(index);
        setIsOpen(true);
    };

    return (
        <Box className="text-purple-950 dark:text-white">
            <Heading
                as="h3"
                size="lg"
                textAlign="center"
                className="text-purple-950 dark:text-white"
            >
                {SkillsHeader.header}
            </Heading>

            <SimpleGrid
                columns={[1, 2, 3, 4]}
                spacing={2}
                maxW="900px"
                mx="auto"
            >
                {skills.map((category, index) => (
                    <SkillCard
                        key={category.category}
                        title={category.category}
                        icon={category.icon}
                        onClick={() => openModal(index)}
                    />
                ))}
            </SimpleGrid>

            <SkillsModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                initialIndex={selectedIndex}
            />
        </Box>
    );
}
