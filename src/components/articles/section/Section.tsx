import ISectionProps from '../../../lib/interfaces/ISectionProps';
import { Title } from './Section.styled';

const Section = ({ title, titleSize, id, children }: ISectionProps) => {
    return (
        <section id={id}>
            <Title titleSize={titleSize}>{title}</Title>
            {children}
        </section>
    );
};

export default Section;
