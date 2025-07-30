import { MoreVertical } from "lucide-react";
import { VisitorCount } from "../VisitorCount/VisitorCount";

export const CommandBar = () => {
    return (
        <div className="sticky top-0 z-50 w-full flex justify-end p-4 bg-transparent">
            <VisitorCount />
            <button
                className="text-2xl px-2 hover:opacity-70 transition"
                aria-label="Command Menu"
            >
                <MoreVertical size={20} />
            </button>
        </div>
    );
};
