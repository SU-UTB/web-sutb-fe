import IArticleProps from '../../lib/interfaces/IArticleProps';
import { Wrapper } from './Article.styled';

const Article = ({ children, margin }: IArticleProps) => {
    return (
        <Wrapper primary={margin}>
            {children}
        </Wrapper>
    );
};
export default Article;
