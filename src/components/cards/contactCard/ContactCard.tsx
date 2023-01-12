import { Body, Header, Img, Name, Wrapper } from './ContactCard.styled';

import CardTitle from './cardTitle/CardTitle';
import ContactPng from '/assets/images/contacts/contact.png'
import IContactProps from '../../../lib/interfaces/IContactProps';
import LinkTo from '../../shared/LinkTo';

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
                <LinkTo href={"mailto:" + contact.email} >
                    {contact.email}
                </LinkTo>
            </Body>
        </Wrapper>
    );
};

export default ContactCard;