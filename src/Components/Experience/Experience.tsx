import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Flex,
    Image,
    Text,
    Heading,
    HStack,
} from "@chakra-ui/react";
import { ExperiencesTexts, iconSize } from "../../Data/constants";
import { experiences } from "../../Data/ExperienceConstants";
import { SkillCard } from "../Skills/SkillsCard";

export default function Experience() {
    return (
        <Box className="text-purple-950 dark:text-white  py-0 px-0 m-0" w={{ base: "90%", sm: "400px", md: "600px", lg: "700px" }}
            mx="auto">
            <Heading
                as="h3"
                size="lg"
                textAlign="center"
                className="text-purple-950 dark:text-white py-4"
            >
                {ExperiencesTexts.header}
            </Heading>
            <Accordion allowToggle defaultIndex={[0]} >
                {experiences.map((exp, index) => (
                    <AccordionItem key={index} border="none">
                        <h2>
                            <AccordionButton className="hover:bg-purple-100 dark:hover:bg-purple-800
          aria-expanded:bg-purple-200 dark:aria-expanded:bg-purple-700
          aria-expanded:text-purple-950 dark:aria-expanded:text-white">
                                <Flex align="center" flex="1" textAlign="left" gap={4}>
                                    <Box w="40px" h="40px" flexShrink={0}>
                                        <Image src={exp.logo} alt={exp.company} objectFit="contain" />
                                    </Box>

                                    <Box>
                                        <Text fontWeight="bold">{exp.role}</Text>
                                        <Text fontSize="sm" className="text-gray-500 dark:text-gray-300">
                                            {exp.company} • {exp.period}
                                        </Text>
                                    </Box>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            {exp.description}
                            {exp.projects.map((project, idx) => (
                                <Accordion allowToggle mt={4}>
                                    <AccordionItem border="none">
                                        <AccordionButton>
                                            <Box key={idx} mb={2}>
                                                < HStack spacing={3} wrap="wrap" justify="center" >
                                                    <strong>{project.projectName}</strong>:
                                                    {project.domainSkills.map((skill, idx) => {
                                                        const Icon = skill.icon;
                                                        return (
                                                            <Box
                                                                key={skill.name}
                                                                px={4}
                                                                py={2}
                                                                rounded="xl"
                                                                className="backdrop-blur-md text-purple-950 dark:text-white flex items-center gap-2 background-black"
                                                            >
                                                                <Flex>
                                                                    <Icon size={iconSize} className="opacity-90" />
                                                                    <Text fontWeight="medium" className="text-center text-purple-950 dark:text-white/80">{skill.name}</Text>
                                                                </Flex>
                                                            </Box>);
                                                    })}
                                                </HStack>
                                            </Box>

                                        </AccordionButton>
                                        <AccordionPanel>
                                            <>
                                                <Box key={idx} mb={2}>
                                                    <strong>Domain: {project.domain}</strong>
                                                </Box>
                                                <Box key={idx} mb={2}>
                                                    {project.projectDetails}
                                                </Box>
                                                <Box key={idx} mb={2}>
                                                    {project.contribution}
                                                </Box>
                                            </>

                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </Box >
    );
}
