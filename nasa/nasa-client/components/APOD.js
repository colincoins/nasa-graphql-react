import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const StyledImage = styled.img`
  object-fit: cover;
  width: 300px;
  height: 300px;
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

          console.log(data);

          const { date, explanation, title, hdurl } = data.getApod;

          return (
            <div>
              <p> {date} </p>
              <p> {explanation} </p>
              <p> {title} </p>
              <StyledImage alt={title} src={hdurl} />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default APOD;
