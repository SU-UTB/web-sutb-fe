import Title from '../../atoms/section/Title';
import Paragraph from '../../atoms/section/Paragraph';
import List from '../../atoms/List';
import { Wrapper } from './style';
import ISectionProps from '../../../lib/interfaces/ISectionProps';

const Section = ({ title, titleSize, paragraph, list }: ISectionProps) => {
    return (
        <Wrapper>
            <Title titleSize={titleSize}>{title}</Title>
            {paragraph ? <Paragraph>{paragraph}</Paragraph> : null}
            {list ?
                <List>
                    {list?.map((item, index) => (
                        <li key={index}>
                            <a href={item[2]} target="_blank" rel="noreferrer">
                                <img src={item[0]} alt={item[1]} width="auto" height="70" />
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
