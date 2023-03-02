import Article from '../../components/articles/Article';
import BaseLink from '../../components/shared/BaseLink';
import BaseList from '../../components/shared/BaseList';
import { DOWNLOADS } from '../../lib/constants/AboutUs';
import Section from '../../components/articles/section/Section';

const Downloads = () => {
    return (
        <>
            <Article margin>
                <BaseList gap={2} fontSize={.9} >
                    {DOWNLOADS.map((item, index) => (
                        <Section title={item.title} titleSize={1.5} key={index}>
                            <BaseLink underline download href={item.linkTo}>
                                {item.name}
                            </BaseLink>
                        </Section>
                    ))}
                </BaseList>
            </Article>
        </>
    )
};
export default Downloads;