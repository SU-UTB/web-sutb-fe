import ContactCard from './contactCard/ContactCard';
import { Wrapper } from './Cards.styled';

interface CardsProps {
    cards: any[];
};
const Cards = ({ cards }: CardsProps) => {
    return (
        <Wrapper>
            {cards.map((card, index) => (
                <ContactCard key={index} contact={card} />
            ))}
        </Wrapper>
    );
};

export default Cards;