import { VisitorCount } from "../VisitorCount/VisitorCount";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    MenuDivider,
    Flex,
    Text,
} from '@chakra-ui/react';
import { MoreVertical, Moon, Sun } from 'lucide-react';
import { commandBar } from "../../constants/constants";
import { useTheme } from "./useTheme";

export const CommandBar = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="sticky top-0 z-50 w-full flex justify-end p-4 bg-transparent">
            <VisitorCount />

            <Menu >
                <MenuButton
                    as={IconButton}
                    aria-label={commandBar.doMore}
                    icon={<MoreVertical size={16} className="text-purple-950 dark:text-white" />}
                    className="!bg-transparent !border-none hover:opacity-80 transition"
                />

                <MenuList className="!bg-transparent !border-none shadow-xl rounded-xl overflow-hidden  hover:opacity-80 !w-fit !p=0 ">
                    <MenuItem
                        onClick={toggleTheme}
                        className="!bg-transparent hover:opacity-80 !m-0 !p-2"
                    >
                        <Flex align="center" gap="2" className="text-purple-950 dark:text-white">
                            {isDark ? <Sun size={16} /> : <Moon size={16} />}
                            <Text>{isDark ? "Light Mode" : "Dark Mode"}</Text>
                        </Flex>
                    </MenuItem>
                    {/* <MenuDivider /> */}
                    {/* 
                    <MenuItem onClick={() => window.open("/path-to-resume.pdf", "_blank")}>
                        <Flex align="center" gap="2">
                            <Download size={18} />
                            <Text>Download Resume</Text>
                        </Flex>
                    </MenuItem> */}
                </MenuList>
            </Menu >
        </div >
    );
};
