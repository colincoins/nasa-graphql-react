import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.div`
  .bar {
    max-width: ${props => props.theme.maxWidth};
    background: ${props => props.theme.middleRedPurple};
    border-bottom: 1px solid ${props => props.theme.offWhite};
    text-align: center;
    margin: 0 auto;
    a {
      color: ${props => props.theme.offWhite};
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Link href="https://github.com/colincoins/nasa-graphql-react">
        <a>NASA - A Picture of The Day using GraphQL Source Code</a>
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
