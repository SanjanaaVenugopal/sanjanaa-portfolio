import { AboutMe } from "../../Constants/constants";

export const AboutMeCard = () => {
    return (
        <div className="max-w-auto">
            <br />
            <p className="text-purple-950 dark:text-white mb-4">
                {AboutMe.line1}
            </p>
            <p className="text-purple-950 dark:text-white mb-4">
                {AboutMe.line2}
            </p>
            <br />
        </div>
    );
};

