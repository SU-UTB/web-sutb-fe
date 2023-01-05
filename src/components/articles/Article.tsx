import IArticleProps from '../../lib/interfaces/IArticleProps';
import { Wrapper } from './Article.styled';

const Article = ({ children, primary }: IArticleProps) => {
    return (
        <Wrapper primary={primary}>
            {children}
        </Wrapper>
    );
};

export default Article;
