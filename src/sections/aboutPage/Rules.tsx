import Article from "../../components/articles/Article";
import BaseList from "../../components/shared/BaseList";
import BaseParagraph from "../../components/shared/BaseParagraph";
import LinkTo from "../../components/shared/LinkTo";
import Section from "../../components/articles/section/Section";

const Rules = () => {
    const rules: string[] = [
        "Snažit se o neustálý rozvoj prostředí, života a vzdělání studentů Univerzity Tomáše Bati ve Zlíně(dále jen „UTB”).",
        "Zastupovat zájmy studentů UTB při jednání s vedením univerzity, fakult a dalšími organizacemi.",
        "Spolupracovat s dalšími organizacemi zastupujícími studenty UTB.",
        "Reprezentovat studenty UTB při jednání na veřejnosti.",
        "Chránit zájmy členů, čestných členů SU UTB a studentů UTB.",
        "Vzdělávat členy SU UTB.",
        "Organizovat kulturní, společenské, vzdělávací a sportovní akce, a to primárně pro studenty UTB, zaměstnance UTB a veřejnost města Zlína.",
        "Informovat studenty o dění na UTB a jejich fakultách.",
        "Podporovat zapojení zahraničních studentů do dění na UTB."
    ];
    return (
        <>
            <Article margin>
                <Section title="Naše základní hodnoty jsou:" titleSize={1.5} id="rules">
                    <BaseList gap={1} decoration="auto" marginInline={.5} marginBlock={1}>
                        {rules.map((rule, index) => (
                            <li key={index}>{rule}</li>
                        ))}
                    </BaseList>
                </Section>
            </Article>
            <Article margin>
                <Section id="rules-download">
                    <BaseParagraph>
                        Více o našich hodnotách si můžete přečíst v našich stanovách:
                    </BaseParagraph>
                    <LinkTo underline href="/assets/stanovy-SU-UTB.pdf">Stanovy SU UTB (PDF)</LinkTo>
                </Section>
            </Article>
        </>
    )
};
export default Rules;