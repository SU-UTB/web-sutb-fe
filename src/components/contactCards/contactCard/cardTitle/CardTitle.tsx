import Title from "./CardTitle.styled";
interface Props {
    title?: string;
    titleSize?: number;
}
const CardTitle = ({ title, titleSize }: Props) => {
    if (title)
        return (
            <Title titleSize={titleSize}>
                {title}
            </Title >
        )
    return null;
};

export default CardTitle;