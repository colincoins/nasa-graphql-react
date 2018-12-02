import React from 'react';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: ${props => props.theme.red};
`;

class Testing extends React.Component {
  render() {
    return (
      <StyledParagraph>
        I am testing
      </StyledParagraph>
    );
  }
}

export default Testing;
