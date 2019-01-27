import { gql } from 'apollo-server';

export default gql`
  type Query {
    getNeoWsAsteroidsFeed(START_DATE: String!, END_DATE: String!): NeoWsAsteroid!
  }
  
  type NeoWsAsteroid {
    near_earth_objects: NearEarthObject
  }

  type NearEarthObject {
    start_date: String!
    end_date: String!
    start_date_near_earth: [StartDateNearEarth!]!
    end_date_near_earth: [EndDateNearEarth!]!
  }

  type EndDateNearEarth {
    id: String!
    neo_reference_id: String!
    name: String!
    nasa_jpl_url: String!
    absolute_magnitude_h: Float!
    estimated_diameter: EstimatedDiameters!
    is_potentially_hazardous_asteroid: Boolean!
    close_approach_data: [CloseApproachData!]!
    is_sentry_object: Boolean!
  }

  type StartDateNearEarth {
    id: String!
    neo_reference_id: String!
    name: String!
    nasa_jpl_url: String!
    absolute_magnitude_h: Float!
    estimated_diameter: EstimatedDiameters!
    is_potentially_hazardous_asteroid: Boolean!
    close_approach_data: [CloseApproachData!]!
    is_sentry_object: Boolean!
  }

  type EstimatedDiameters {
    kilometers: EstimatedDiameter
    meters: EstimatedDiameter
    miles: EstimatedDiameter
    feet: EstimatedDiameter
  }

  type EstimatedDiameter {
    estimated_diameter_min: Float!
    estimated_diameter_max: Float!
  }

  type CloseApproachData {
    close_approach_date: String!
    epoch_date_close_approach: Float!
    relative_velocity: RelativeVelocity!
    miss_distance: MissDistance!
    orbiting_body: String!
  }

  type RelativeVelocity {
    kilometers_per_second: String!,
    kilometers_per_hour: String!,
    miles_per_hour: String!
  }

  type MissDistance {
    astronomical: String!
    lunar: String!
    kilometers: String!
    miles: String!
  }
`;
