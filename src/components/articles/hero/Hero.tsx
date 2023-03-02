import { HeroImage, HeroText } from './Hero.styled';

import BaseLink from '../../shared/BaseLink';
import IHeroProps from '../../../lib/interfaces/IHeroProps';

const Hero = ({ imageLink }: IHeroProps) => {
    return (
        <HeroImage src={imageLink.imgSrc} dark={imageLink.text ? true : false}>
            <BaseLink hero href={imageLink.linkTo} target="_blank" rel="noreferrer">
                <HeroText>{imageLink.text}</HeroText>
            </BaseLink>
        </HeroImage>
    );
};
export default Hero;