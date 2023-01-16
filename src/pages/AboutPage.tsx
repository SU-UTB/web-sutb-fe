import BaseButton from '../components/shared/BaseButton';
import BaseList from '../components/shared/BaseList';
import { SECTIONS } from '../lib/constants/AboutUs';
import { useState } from 'react';

const AboutPage = () => {
    document.title = 'O nás - Studentská unie UTB';
    const [pos, setPos] = useState<number>(0);
    const handleName = (name: string) => {
        setPos(SECTIONS.findIndex((section) => section.name === name));
    };
    return (
        <>
            <BaseList row gap={1.5} marginInline={2} marginBlock={1} fontSize={1.1}>
                {SECTIONS.map((section, index) => (
                    <BaseButton key={index} onClick={() => { handleName(section.name) }} active={index === pos}>{section.name}</BaseButton>
                ))}
            </BaseList>
            {SECTIONS[pos].content}
        </>
    );
};
export default AboutPage;
