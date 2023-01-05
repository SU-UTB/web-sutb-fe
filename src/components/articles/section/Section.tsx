import { Paragraph, Title } from './Section.styled';

import BaseList from '../../shared/BaseList';
import ISectionProps from '../../../lib/interfaces/ISectionProps';

const Section = ({ title, titleSize, paragraph, listOfImageLinks }: ISectionProps) => {
    return (
        <>
            <Title titleSize={titleSize}>{title}</Title>
            {paragraph ? <Paragraph>{paragraph}</Paragraph> : null}
            {listOfImageLinks ?
                <BaseList>
                    {listOfImageLinks?.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} target="_blank" rel="noreferrer">
                                <img src={item.src} alt={item.alt} width="auto" height="70" />
                            </a>
                        </li>
                    ))}
                </BaseList>
                : null
            }
        </>
    );
};

export default Section;
