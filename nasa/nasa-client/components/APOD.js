import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const StyledImage = styled.img`
  object-fit: cover;
  max-width: ${props => props.theme.maxWidth};

  @media only screen and (min-width: 768px) {
    max-width: 940px;
  }
`;

const StyledText = styled.p` 
  margin: 0;
  padding: 0;
  /* @media only screen and (min-width: 768px) {
    font-size: 10px;
  } */
`;

const RETRIEVE_APOD = gql`
  query RETRIEVE_APOD {
    getApod {
      date
      title
      explanation
      hdurl
    }
  }
`;

class APOD extends React.Component {
  render() {
    return (
      <Query query={RETRIEVE_APOD}>
        {({ loading, data }) => {
          if (loading) return null;

          const { date, explanation, title, hdurl } = data.getApod;

          return (
            <div>
              <div className="text">
                <StyledText>  {title} </StyledText>
                <StyledText> {date} </StyledText>
              </div>
              <div className="image">
                <StyledImage alt={title} src={hdurl} />
                <StyledText> {explanation} </StyledText>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default APOD;
