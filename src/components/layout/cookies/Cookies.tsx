import BaseButton from '../../shared/BaseButton';
import BaseList from '../../shared/BaseList';
import BaseParagraph from '../../shared/BaseParagraph';
import ICookiesProps from '../../../lib/interfaces/ICookiesProps';
import LinkTo from '../../shared/LinkTo';
import Section from '../../articles/section/Section';
import { Wrapper } from './wrapper/Wrapper.styled'

const Cookies = ({ handleAccept }: ICookiesProps) => {
    return (
        <Wrapper>
            <Section>
                <BaseParagraph fontSize={1}>
                    Tyto webové stránky používají k poskytování svých služeb soubory Cookies. Používáním těchto webových stránek souhlasíte s použitím souborů Cookies.                </BaseParagraph>
                <LinkTo underline href="https://www.cookie-lista.cz/co-je-cookies.html" >
                    Více o cookies
                </LinkTo>
                <BaseList row gap={2} marginBlock={.5}>
                    <li>
                        <BaseButton style>Odmítnout</BaseButton>
                    </li>
                    <li>
                        <BaseButton style onClick={() => { handleAccept() }}>Přijmout cookies</BaseButton>
                    </li>
                </BaseList>
            </Section>
        </Wrapper>
    )
};
export default Cookies;
