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
    Tooltip,
} from "@chakra-ui/react";
import { ExperiencesTexts, iconSize } from "../../Data/constants";
import { experiences } from "../../Data/ExperienceConstants";

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
            <Accordion allowToggle>
                {experiences.map((exp, index) => (
                    <AccordionItem key={index} border="none">
                        <h2>
                            <AccordionButton className="hover:bg-purple-100 dark:hover:bg-purple-800
          aria-expanded:bg-purple-300 dark:aria-expanded:bg-purple-700
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
                        <AccordionPanel>
                            {exp.description}
                            {exp.domains.map((domain, idx) => (
                                <Accordion allowToggle>
                                    <AccordionItem key={idx} border="none">
                                        <AccordionButton className="hover:bg-purple-50 dark:hover:bg-purple-900
          aria-expanded:bg-purple-300 dark:aria-expanded:bg-purple-800
          aria-expanded:text-purple-950 dark:aria-expanded:text-white">
                                            <Flex align="center" flex="1" textAlign="left" gap={4}>
                                                <Box>
                                                    <strong>{domain.domainName}</strong>
                                                </Box>
                                            </Flex>
                                            <AccordionIcon />
                                        </AccordionButton>
                                        <AccordionPanel>
                                            <>
                                                <Box>
                                                    {domain.domainDescription}
                                                </Box>
                                                <Box>
                                                    {domain.highlights}
                                                </Box>
                                                <Box
                                                    className="backdrop-blur-md text-purple-950 dark:text-white flex items-center gap-2 background-black"
                                                >
                                                    <Text fontWeight="medium" className="text-center text-purple-950 dark:text-white/80">Tech: </Text>
                                                    {domain.domainSkills.map((skill, idx) => {
                                                        const Icon = skill.icon;
                                                        return (
                                                            <Tooltip
                                                                key={idx}
                                                                label={skill.name}
                                                                aria-label={skill.name}
                                                                placement="top"
                                                                openDelay={200}
                                                                className="!bg-zinc-600/30 !backdrop-blur-md !text-white"
                                                            >
                                                                <Flex cursor="pointer"
                                                                    _hover={{ transform: "scale(1.1)", transition: "0.2s ease" }}>
                                                                    <Icon size={iconSize} className="opacity-90" />
                                                                    {/* <Text fontWeight="medium" className="text-center text-purple-950 dark:text-white/80">{skill.name}</Text> */}
                                                                </Flex>
                                                            </Tooltip>
                                                        );
                                                    })}
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
