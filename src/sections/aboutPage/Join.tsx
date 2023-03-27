import Article from '../../components/articles/Article';
import BaseParagraph from '../../components/shared/BaseParagraph';
import Hero from '../../components/articles/hero/Hero';
import HeroJoinUsImg from '../../assets/images/hero/join-img.webp';
import Section from '../../components/articles/section/Section';
import { joinPageParagraphs as paragraphs } from '../../data/paragraphs/Join';

const Join = () => {
    return (
        <>
            <Article margin>
                <Section title="Přidej se" titleSize={2} id="join-us">
                    <BaseParagraph fontSize={1.2}>
                        {paragraphs[0]}
                    </BaseParagraph>
                </Section>
            </Article>
            <Article>
                <Hero imageLink={{ imgSrc: HeroJoinUsImg }} />
            </Article>
            <Article margin>
                {paragraphs.slice(1).map((paragraph, index) => (
                    <Section key={index} id={`join-${index}`}>
                        <BaseParagraph fontSize={1.2}>
                            {paragraph}
                        </BaseParagraph>
                    </Section>
                ))}
            </Article>
        </>
    )
};
export default Join;