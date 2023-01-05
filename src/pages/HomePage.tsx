import Article from '../components/articles/Article';
import Hero from '../components/articles/hero/Hero';
import Section from '../components/articles/section/Section';
import TImageLink from '../lib/types/TImageLinkTypes';

const HomePage = () => {
    document.title = 'Domů - Studentská unie UTB';
    const comingSoon: string = "https://pruvodcestudenta.utb.cz/";
    const partners: TImageLink[] = [
        {
            src: "./assets/images/utb.svg",
            alt: "Univerzita Tomáše Bati",
            href: "https://www.utb.cz/",
        },
        {
            src: "./assets/images/kmz-cs.svg",
            alt: "Koleje a Menza",
            href: "https://kmz.utb.cz/",
        },
    ];
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
                    href={comingSoon}
                    src="https://sunovy.utb.cz/assets/event-section-img.jpg"
                    text="Průvodce studenta UTB"
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
