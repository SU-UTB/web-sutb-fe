import { Body, Header, Img, Name, Wrapper } from './ContactCard.styled';

import BaseLink from '../../shared/BaseLink';
import CardTitle from './cardTitle/CardTitle';
import ContactPng from '../../../assets/images/contacts/contact.png'
import IContactProps from '../../../lib/interfaces/IContactProps';

const ContactCard = ({ contact }: IContactProps) => {
    return (
        <Wrapper>
            <Header>
                <CardTitle title={contact.position} bold big textAlign="center" />
                <Img src={contact.image ? contact.image : ContactPng} alt={contact.name} />
            </Header>
            <Body>
                <Name>
                    {contact.degree ?
                        contact.degree + " " + contact.name :
                        contact.name
                    }
                </Name>
                <CardTitle title={contact.project} />
                <BaseLink href={"mailto:" + contact.email} >
                    {contact.email}
                </BaseLink>
            </Body>
        </Wrapper>
    );
};

export default ContactCard;