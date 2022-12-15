import Section from '../molecules/section/Section';
import Hero from '../molecules/hero/Hero';

interface HomeTemplateProps {
    comingSoon: string;
    partners: string[][];
}

const HomeTemplate = ({ comingSoon, partners }: HomeTemplateProps) => {

    return (
        <>
            <Section
                title={"Ahoj!"}
                titleSize={"4"}
                paragraph={"Jsme Studentská unie UTB. Děláme ty největší a nejlepší mejdany ve Zlíně, informujeme studenty o všem důležitém a dlouhodobě spolupracujeme s univerzitou."}
            />

            <Hero
                href={comingSoon}
                src={"https://sunovy.utb.cz/assets/event-section-img.jpg"}
                text={"Průvodce studenta UTB"}
            />

            <Section
                title={"Naši partneři"}
                titleSize={"2.5"}
                list={partners}
            />
        </>
    );
}

export default HomeTemplate;