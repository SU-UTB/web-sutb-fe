import Article from '../components/articles/Article';
import Hero from '../components/articles/hero/Hero';
import Section from '../components/articles/section/Section';
import TImageLink from '../lib/types/TImageLinkTypes';
import { partners } from '../data/Partners';

const HomePage = () => {
    document.title = 'Domů - Studentská unie UTB';
    const comingSoon: string = "https://pruvodcestudenta.utb.cz/";
    const hero: TImageLink = {
        text: "Průvodce studenta UTB",
        imgSrc: "https://sunovy.utb.cz/assets/event-section-img.jpg",
        linkTo: comingSoon
    };
    return (
        <>
            <Article margin>
                <Section
                    title="Ahoj!"
                    titleSize="4"
                    paragraph="Jsme Studentská unie UTB. Děláme ty největší a nejlepší mejdany ve Zlíně, informujeme studenty o všem důležitém a dlouhodobě spolupracujeme s univerzitou."
                />
            </Article>
            <Article>
                <Hero
                    ImageLink={hero}
                />
            </Article>
            <Article margin>
                <Section
                    title="Naši partneři"
                    titleSize="2.5"
                    listOfImageLinks={partners}
                />
            </Article>
        </>
    );
}

export default HomePage;
