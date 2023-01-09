import { Body, ImgTop, Name, Wrapper } from './ContactCard.styled';

import CardTitle from './cardTitle/CardTitle';
import IContactProps from '../../../lib/interfaces/IContactProps';
import LinkTo from '../../shared/LinkTo';

const ContactCard = ({ contact }: IContactProps) => {
    return (
        <Wrapper>
            <CardTitle title={contact.position} titleSize={1.8} />
            <ImgTop src={contact.image} alt={contact.name} />
            <Body>
                <Name>
                    {contact.degree ?
                        contact.degree + " " + contact.name :
                        contact.name
                    }
                </Name>
                <CardTitle title={contact.project} titleSize={1.2} />
                <LinkTo href={"mailto:" + contact.email}>
                    {contact.email}
                </LinkTo>
            </Body>
        </Wrapper>
    );
};

export default ContactCard;