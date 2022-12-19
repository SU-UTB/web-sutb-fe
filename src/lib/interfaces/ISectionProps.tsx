export default interface ISectionProps {
    title: string;
    titleSize: string;
    paragraph?: string;
    listOfImageLinks?: {
        src: string;
        alt: string;
        href: string;
    }[];
}