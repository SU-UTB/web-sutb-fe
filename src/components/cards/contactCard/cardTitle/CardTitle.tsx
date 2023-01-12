import Title from "./CardTitle.styled";
interface Props {
    title?: string;
    bold?: boolean;
    big?: boolean;
    textAlign?: string;
}
const CardTitle = ({ title, bold, big, textAlign }: Props) => {
    if (title)
        return (
            <Title bold={bold} big={big} textAlign={textAlign}>
                {title}
            </Title >
        )
    return null;
};

export default CardTitle;