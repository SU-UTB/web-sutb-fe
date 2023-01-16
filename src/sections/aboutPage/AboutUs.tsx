import Article from '../../components/articles/Article';
import BaseList from '../../components/shared/BaseList';
import BaseParagraph from '../../components/shared/BaseParagraph';
import Hero from '../../components/articles/hero/Hero';
import HeroUnieImg from '../../assets/images/hero/unie-img.jpg';
import Section from '../../components/articles/section/Section';

const AboutUs = () => {
    return (
        <>
            <Article margin>
                <Section title="O organizaci" titleSize={2} id="about-us">
                    <BaseParagraph fontSize={1.2}>
                        Studentská unie UTB je nestátní nezisková organizace. Fungujeme od roku 2005, jsme zcela nezávislí na univerzitě a všichni jsme dobrovolníci. Jak se můžete dočíst v našich stanovách, našim posláním je dělat život ve Zlíně o něco příjemnější – pro studenty, zaměstnance UTB i pro veřejnost. V praxi to znamená, že vytváříme velké množství nejrůznějších aktivit. Ty dělíme do tří kategorií:
                    </BaseParagraph>
                    <BaseList fontSize={1.2}>
                        <li>- Akce, mejdany a pařby</li>
                        <li>- Kulturní a společenské události</li>
                        <li>- Dlouhodobé projekty</li>
                    </BaseList>
                </Section>
                <Section>
                    <BaseParagraph fontSize={1.2}>
                        Tímto širokým záběrem se odlišujeme od všech ostatních studentských organizací v České republice. Jsme skupina asi čtyřiceti studentů, dobrovolníků, jejichž posláním je dělat život ve Zlíně studentům, zaměstnancům UTB, ale i široké veřejnosti o něco příjemnější. Společně připravujeme jedny z největších studentských akcí ve Zlíně – ať už je to monstrózní Vítání prváků nebo Majáles, ale také elegantní univerzitní Reprezentační ples konající se v krásném prostoru Kongresového centra. Paradoxně připravujeme i ples pro pravé punkery – Antiples, který je znám především díky své legendární tradici převleků. Organizujeme oslavy Mezinárodního dne studentstva, rozsvěcujeme univerzitní vánoční stromeček a také odměňujeme nejlepší studenty na Galavečeru. Pivní spirála je další z akcí, které unie pořádá – tato legendární akce je jak stvořená pro nadšence pivního moku a poprvé ji pořádali studenti už před dvaceti lety. Přivádíme do Zlína zajímavé osobnosti – mohl sis například poslechnout přednášku moderátora Václava Moravce, legendárního Ladislava Špačka nebo Erika Taberyho – šéfredaktora časopisu Respekt. Současně úzce spolupracujeme s Knihovnou, Kolejemi a menzou, Job centrem a vlastně celou UTB.
                    </BaseParagraph>
                </Section>
            </Article>
            <Article>
                <Hero imageLink={{ imgSrc: HeroUnieImg }} />
            </Article>
            <Article margin>
                <Section>
                    <BaseParagraph fontSize={1.2}>
                        Práce na tolika reálných projektech je pro nás především obrovským zdrojem zkušeností. Kde jinde má člověk ještě během studia možnost zkusit vést tým lidí a nést plnou zodpovědnost za úspěch či neúspěch akce? Většina našich aktivit je čistě nezisková. Pokud však na některých získáme finance, investujeme je okamžitě dál – a to jak do vzdělání a rozvoje našich členů, tak do vás, všech ostatních studentů, zaměstnanců a veřejnosti Zlína.
                    </BaseParagraph>
                </Section>
            </Article>
        </>
    )
};
export default AboutUs;