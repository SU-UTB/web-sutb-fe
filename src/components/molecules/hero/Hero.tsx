
import Image from '../../atoms/hero/HeroImage';
import Text from '../../atoms/hero/HeroText';
import { Link } from './style';

interface HeroProps {
    href: string;
    src: string;
    text: string;
}

const Hero = ({ href, src, text }: HeroProps) => {

    return (
        <Image src={src}>
            <Link href={href} target="_blank" rel="noreferrer">
                <Text>{text}</Text>
            </Link>
        </Image>
    );
};

export default Hero;