import { VisitorCount } from "../VisitorCount/VisitorCount";
import SLogo from "../../Data/SLogo.png"
import { MenuComponent } from "./MenuComponent";

type CommandBarProps = {};

export const CommandBar: React.FC<CommandBarProps> = () => {
    return (
        <div className="sticky top-0 z-50 w-full flex justify-between items-center p-4 bg-transparent">
            <img
                src={SLogo}
                alt={"Logo"}
                className="w-16 h-16 filter invert-0 dark:invert"
            />
            <div className="flex items-center p-4 bg-transparent">
                <VisitorCount />
                <MenuComponent />
            </div>
        </div >
    );
};
