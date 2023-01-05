import { HeroImage, HeroText } from './Hero.styled';

import BaseLink from '../../shared/BaseLink';
import IHeroProps from '../../../lib/interfaces/IHeroProps';

const Hero = ({ href, src, text }: IHeroProps) => {
    return (
        <HeroImage src={src}>
            <BaseLink href={href} target="_blank" rel="noreferrer">
                <HeroText>{text}</HeroText>
            </BaseLink>
        </HeroImage>
    );
};

export default Hero;