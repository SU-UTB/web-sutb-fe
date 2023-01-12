import Article from '../components/articles/Article';
import BaseList from '../components/shared/BaseList';
import BaseParagraph from '../components/shared/BaseParagraph';
import Hero from '../components/articles/hero/Hero';
import LinkTo from '../components/shared/LinkTo';
import Section from '../components/articles/section/Section';
import TImageLink from '../lib/types/TImageLinkTypes';
import { partners } from '../data/Partners';

const HomePage = () => {
    document.title = 'Domů - Studentská unie UTB';
    const comingSoon: string = "https://pruvodcestudenta.utb.cz/";
    const hero: TImageLink = {
        text: "Průvodce studenta UTB",
        imgSrc: "/assets/images/hero/rektorat-img.jpg",
        linkTo: comingSoon
    };
    return (
        <>
            <Article margin>
                <Section title="Ahoj!" titleSize={4}>
                    <BaseParagraph>Jsme Studentská unie UTB. Děláme ty největší a nejlepší mejdany ve Zlíně, informujeme studenty o všem důležitém a dlouhodobě spolupracujeme s univerzitou.</BaseParagraph>
                </Section>
            </Article>
            <Article>
                <Hero imageLink={hero} />
            </Article>
            <Article margin>
                <Section title="Naši partneři" titleSize={2.5}>
                    <BaseList row gap={2} marginInline={2}>
                        {partners?.map((item, index) => (
                            <li key={index}>
                                <LinkTo href={item.linkTo} target="_blank" rel="noreferrer">
                                    <img src={item.imgSrc} alt={item.imgAlt} width="100%" height="70" />
                                </LinkTo>
                            </li>
                        ))}
                    </BaseList>
                </Section>
            </Article>
        </>
    );
};
export default HomePage;
