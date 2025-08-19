import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MoreVertical, Moon, Sun, Download, Contact2 } from "lucide-react";
import { commandBar, iconSize } from "../../Data/constants";
import { useTheme } from "./useTheme";
import { ContactMe } from "./ContactMe";

type CommandBarProps = {};

export const MenuComponent: React.FC<CommandBarProps> = () => {
  const { isDark, toggleTheme } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label={commandBar.doMore}
          icon={
            <MoreVertical
              size={iconSize}
              className="text-purple-950 dark:text-white"
            />
          }
          className="!bg-transparent !border-none hover:opacity-80 transition"
        />

        <MenuList className="!bg-transparent !border-none shadow-xl rounded-xl overflow-hidden  hover:opacity-80 !w-fit !p=0 ">
          <MenuItem
            onClick={toggleTheme}
            className="dark:!bg-purple-100/70 !bg-zinc-600/30 hover:opacity-80 !m-0 !p-2 backdrop-blur-md"
          >
            <Flex align="center" gap="2">
              {isDark ? (
                <Sun
                  size={iconSize}
                  className="dark:text-purple-950 text-white/70"
                />
              ) : (
                <Moon
                  size={iconSize}
                  className="dark:text-purple-950 text-white/70"
                />
              )}
              <Text className="dark:text-purple-950 text-white/70">
                {isDark ? "Light Mode" : "Dark Mode"}
              </Text>
            </Flex>
          </MenuItem>
          <MenuItem
            as="a"
            href="\SanjanaaGV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="dark:!bg-purple-100/70 !bg-zinc-600/30 hover:opacity-80 !m-0 !p-2 backdrop-blur-md"
          >
            <Flex align="center" gap="2">
              <Download
                size={iconSize}
                className="dark:text-purple-950 text-white/70"
              />
              <Text className="dark:text-purple-950 text-white/70">
                {commandBar.resume}
              </Text>
            </Flex>
          </MenuItem>

          <MenuItem
            onClick={onOpen}
            className="dark:!bg-purple-100/70 !bg-zinc-600/30 hover:opacity-80 !m-0 !p-2 backdrop-blur-md"
          >
            <Flex align="center" gap="2">
              <Contact2
                size={iconSize}
                className="dark:text-purple-950 text-white/70"
              />
              <Text className="dark:text-purple-950 text-white/70">
                {commandBar.contactMe}
              </Text>
            </Flex>
          </MenuItem>
        </MenuList>
      </Menu>

      <ContactMe isOpen={isOpen} onClose={onClose} />
    </>
  );
};
