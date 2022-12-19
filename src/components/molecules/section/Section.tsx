import Title from '../../atoms/section/Title';
import Paragraph from '../../atoms/section/Paragraph';
import List from '../../atoms/List';
import { Wrapper } from './style';
import ISectionProps from '../../../lib/interfaces/ISectionProps';

const Section = ({ title, titleSize, paragraph, listOfImageLinks }: ISectionProps) => {
    return (
        <Wrapper>
            <Title titleSize={titleSize}>{title}</Title>
            {paragraph ? <Paragraph>{paragraph}</Paragraph> : null}
            {listOfImageLinks ?
                <List>
                    {listOfImageLinks?.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} target="_blank" rel="noreferrer">
                                <img src={item.src} alt={item.alt} width="auto" height="70" />
                            </a>
                        </li>
                    ))}
                </List>
                : null
            }
        </Wrapper>
    );
};

export default Section;
