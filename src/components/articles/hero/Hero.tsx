import { HeroImage, HeroText } from './Hero.styled';

import IHeroProps from '../../../lib/interfaces/IHeroProps';
import LinkTo from '../../shared/LinkTo';

const Hero = ({ imageLink }: IHeroProps) => {
    return (
        <HeroImage src={imageLink.imgSrc} dark={imageLink.text ? true : false}>
            <LinkTo hero href={imageLink.linkTo} target="_blank" rel="noreferrer">
                <HeroText>{imageLink.text}</HeroText>
            </LinkTo>
        </HeroImage>
    );
};
export default Hero;