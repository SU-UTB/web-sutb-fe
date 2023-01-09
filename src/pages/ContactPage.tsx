import { leadership, managers } from '../data/Contacts';

import Article from '../components/articles/Article';
import ContactCard from '../components/contactCard/ContactCard';
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
                <div>
                    {leadership.map((leader, index) => (
                        <ContactCard contact={leader} key={index} />
                    ))}
                </div>
                <Section
                    title="Manažeři projektů"
                    titleSize="2"
                    paragraph="Pokud se chcete na cokoliv zeptat nebo s námi spolupracovat, můžete nás zkontaktovat."
                />
                <div>
                    {managers.map((manager, index) => (
                        <ContactCard contact={manager} key={index} />
                    ))}
                </div>
            </Article>
        </>
    );
}

export default ContactPage;
