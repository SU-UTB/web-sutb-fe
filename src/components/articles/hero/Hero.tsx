import { HeroImage, HeroText } from './Hero.styled';

import IHeroProps from '../../../lib/interfaces/IHeroProps';
import LinkTo from '../../shared/LinkTo';

const Hero = ({ ImageLink }: IHeroProps) => {
    return (
        <HeroImage src={ImageLink.imgSrc}>
            <LinkTo hero href={ImageLink.linkTo} target="_blank" rel="noreferrer">
                <HeroText>{ImageLink.text}</HeroText>
            </LinkTo>
        </HeroImage>
    );
};

export default Hero;