import Title from "./CardTitle.styled";
interface Props {
    title?: string;
}
const CardTitle = ({ title }: Props) => {
    if (title)
        return (
            <Title>
                {title}
            </Title>
        )
    return null;
};

export default CardTitle;