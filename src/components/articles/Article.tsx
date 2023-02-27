import IArticleProps from '../../lib/interfaces/IArticleProps';
import { Wrapper } from './Article.styled';
import { isMobile } from 'react-device-detect';

const Article = ({ children, margin }: IArticleProps) => {
    return (
        <Wrapper primary={margin} isMobile={isMobile}>
            {children}
        </Wrapper>
    );
};
export default Article;
