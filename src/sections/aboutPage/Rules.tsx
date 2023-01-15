import Article from '../../components/articles/Article';
import BaseList from '../../components/shared/BaseList';
import BaseParagraph from '../../components/shared/BaseParagraph';
import LinkTo from '../../components/shared/LinkTo';
import Section from '../../components/articles/section/Section';
import { rules } from '../../data/rules/Rules';

const Rules = () => {
    return (
        <>
            <Article margin>
                <Section title="Naše základní hodnoty jsou:" titleSize={1.5} id="rules">
                    <BaseList gap={1} decoration="auto" marginInline={.5} marginBlock={1} fontSize={1.2}>
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