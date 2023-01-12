import Article from "../../components/articles/Article";
import BaseList from "../../components/shared/BaseList";
import { DOWNLOADS } from "../../lib/constants/AboutUs";
import LinkTo from "../../components/shared/LinkTo";
import Section from "../../components/articles/section/Section";

const Downloads = () => {
    return (
        <>
            <Article margin>
                <BaseList gap={2} fontSize={.9} >
                    {DOWNLOADS.map((item, index) => (
                        <Section title={item.title} titleSize={1.5} key={index}>
                            <LinkTo underline download href={item.linkTo}>
                                {item.name}
                            </LinkTo>
                        </Section>
                    ))}
                </BaseList>
            </Article>
        </>
    )
};
export default Downloads;