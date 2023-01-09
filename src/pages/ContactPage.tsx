import { leadership, managers } from '../data/Contacts';

import Article from '../components/articles/Article';
import Cards from '../components/contactCards/Cards';
import Section from '../components/articles/section/Section';

const ContactPage = () => {
    document.title = 'Kontakty - Studentská unie UTB';
    return (
        <>
            <Article margin>
                <Section
                    title="Vedení"
                    titleSize="3"
                />
                <Cards cards={leadership} />
                <Section
                    title="Manažeři projektů"
                    titleSize="2"
                    paragraph="Pokud se chcete na cokoliv zeptat nebo s námi spolupracovat, můžete nás zkontaktovat."
                />
                <Cards cards={managers} />
            </Article>
        </>
    );
}

export default ContactPage;
