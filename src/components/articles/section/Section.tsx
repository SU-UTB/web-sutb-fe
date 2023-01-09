import { Paragraph, Title } from './Section.styled';

import BaseLink from '../../shared/LinkTo';
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
                            <BaseLink href={item.linkTo} target="_blank" rel="noreferrer">
                                <img src={item.imgSrc} alt={item.imgAlt} width="auto" height="70" />
                            </BaseLink>
                        </li>
                    ))}
                </BaseList>
                : null
            }
        </>
    );
};

export default Section;
