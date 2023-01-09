import Article from "../components/articles/Article";
import Section from "../components/articles/section/Section";

const AboutPage = () => {
    document.title = 'O nás - Studentská unie UTB';

    return (
        <>
            <Article margin>
                <Section
                    title="O nás"
                    titleSize="3"
                    paragraph="Studentská unie UTB je nezávislá organizace, která se snaží zlepšovat život studentů na Univerzitě Tomáše Bati ve Zlíně. Jsme zastoupeni v každém oboru a v každém ročníku. Naše činnost se rozprostírá od organizace akcí, přes podporu studentů v jejich studiu, až po zastupování studentů v různých orgánech univerzity."
                />
            </Article>
        </>
    );
}

export default AboutPage;
