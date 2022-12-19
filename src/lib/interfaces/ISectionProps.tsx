import TImageLink from "../types/TImageLinkTypes";

export default interface ISectionProps {
    title: string;
    titleSize: string;
    paragraph?: string;
    listOfImageLinks?: TImageLink[];
}