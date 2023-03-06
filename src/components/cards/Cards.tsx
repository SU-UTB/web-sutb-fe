import ContactCard from './contactCard/ContactCard';
import ICardsProps from '../../lib/interfaces/ICardsProps';
import { Wrapper } from './Cards.styled';

const Cards = ({ cards }: ICardsProps) => {
    return (
        <Wrapper>
            {cards.map((card, index) => (
                <ContactCard key={index} contact={card} />
            ))}
        </Wrapper>
    );
};

export default Cards;