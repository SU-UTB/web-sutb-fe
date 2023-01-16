import { SU_ADDRESS, SU_CONTACTS } from '../lib/constants/ContactsSocials';

import Article from '../components/articles/Article';
import BaseList from '../components/shared/BaseList';
import Leaders from '../sections/contacts/Leaders';
import LinkTo from '../components/shared/LinkTo';
import Managers from '../sections/contacts/Managers';
import Section from '../components/articles/section/Section';

const ContactPage = () => {
    document.title = 'Kontakty - Studentská unie UTB';
    return (
        <>
            <Article margin>
                <Section title="Kontakty" titleSize={2}>
                    <BaseList row gap={2} fontSize={.9}>
                        {SU_CONTACTS.map((item, index) => (
                            <li key={index}>
                                <LinkTo underline href={item.linkTo} target="_blank" rel="noreferrer">
                                    {item.text}
                                </LinkTo>
                            </li>
                        ))}
                    </BaseList>
                </Section>
                <Section title="Adresa" titleSize={2}>
                    <BaseList fontSize={1.2}>
                        <li>{SU_ADDRESS.fullName}</li>
                        <li>{SU_ADDRESS.street}</li>
                        <li>{SU_ADDRESS.zip} {SU_ADDRESS.city}</li>
                        <li>IČO: {SU_ADDRESS.ico}</li>
                    </BaseList>
                </Section>
            </Article>
            <Leaders />
            <Managers />
        </>
    );
};
export default ContactPage;
