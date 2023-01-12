import Article from "../../components/articles/Article";
import BaseParagraph from "../../components/shared/BaseParagraph";
import Hero from "../../components/articles/hero/Hero";
import Section from "../../components/articles/section/Section";
import TImageLink from "../../lib/types/TImageLinkTypes";

const Join = () => {
    const hero: TImageLink = {
        imgSrc: "/assets/images/hero/join-img.jpg",
    };
    const paragraphs: string[] = [
        "Proč se přidat ke Studentské unii? To je jednoduché. SU byla založena v roce 2005, takže už máme něco za sebou. U nás si můžeš vymyslet svůj vlastní projekt nebo třeba jednoho dne vést akci pro tisíce lidí – jako je Majáles, Reprezentační ples nebo Vítání prváků. Je známým faktem, že firmy nechtějí zaměstnat “nepoužitelné” absolventy bez praxe, protože studium by ti kromě vzdělání mělo přinést získání kontaktů a praktických zkušeností. 95 % našich absolventů najde práci ještě před řádným ukončením školy a naši bývalí členové pracují na cool manažerských postech. 😉",
        "Ve Studentské unii ti nabízíme možnost získání zkušeností, praxe, kontaktů a hlavně spousty kámošů. Můžeš se podílet na reálných projektech s rozpočtem až čtvrt milionu, můžeš vést 40ti členný tým a být zodpovědný za hladký průběh celé akce. Můžeš se tedy například rozvíjet v oblastech komunikace, managementu, marketingu, finančního řízení, účetnictví, ale i v uměleckých oborech jako je audiovize, grafika, produkce aj. Nevíš co z toho by si mohl dělat? To vůbec nevadí, my jsme taky nevěděli, důležité je rozhodnutí, že NĚCO dělat chceš.",
        "ALE to je moc pěkný povídání, o tom žádné, jenže řada z nás šla do SU potkat partu fajn lidí, s kterýma se bude pravidelně bavit, podnikat spoustu aktivit od polštářové bitvy, přes vánoční večírek naruby až po víceméně pravidelnou hospodskou schůzi 😉 Nemluvě o teambuildingových aktivitách, víkendech na chatě atd. Navíc k tomu získáš kopu skvělých zkušeností a díky kámošům kolem tebe ti Zlín nikdy nebude cizí.",
        "Stačí prostě jenom napsat na su@sutb.cz nebo na Facebook, tak jednoduché to je. 😉 V SU se nic nepodepisuje, ani se neplatí žádný členský příspěvek.",
        "Takže se potkáme?"
    ];
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
                <Hero imageLink={hero} />
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