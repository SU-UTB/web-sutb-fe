import Image from '../../atoms/hero/HeroImage';
import Text from '../../atoms/hero/HeroText';
import { Link } from './style';
import IHeroProps from '../../../lib/interfaces/IHeroProps';

const Hero = ({ href, src, text }: IHeroProps) => {
    return (
        <Image src={src}>
            <Link href={href} target="_blank" rel="noreferrer">
                <Text>{text}</Text>
            </Link>
        </Image>
    );
};

export default Hero;