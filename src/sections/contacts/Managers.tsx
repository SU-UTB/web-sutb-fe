import Article from "../../components/articles/Article";
import Cards from "../../components/cards/Cards";
import Section from "../../components/articles/section/Section";
import { managers } from "../../data/Contacts";

const Managers = () => {
    return (
        <Article margin>
            <Section title="Manažeři projektů" titleSize={2} id="managers">
                <Cards cards={managers} />
            </Section>
        </Article>
    )
};
export default Managers