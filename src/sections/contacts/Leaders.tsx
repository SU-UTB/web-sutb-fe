import Article from "../../components/articles/Article";
import Cards from "../../components/cards/Cards";
import Section from "../../components/articles/section/Section";
import { leadership } from "../../data/Contacts";

const Leaders = () => {
    return (
        <Article margin>
            <Section title="Vedení" titleSize={2.5} id="leaders">
                <Cards cards={leadership} />
            </Section>
        </Article>
    )
};
export default Leaders