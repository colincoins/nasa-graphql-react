const queries = {
  Query: {
    getNeoWsAsteroidsFeed: async (_, { START_DATE, END_DATE }, { dataSources: { nasaAPI } }, ___) => {
      const response = await nasaAPI.getNeoWsAsteroidsFeed({ START_DATE, END_DATE });
      const startDateArray = response.near_earth_objects[START_DATE];
      // const endDateArray = response.near_earth_objects[END_DATE];

      return {
        near_earth_objects: {
          start_date: START_DATE,
          end_date: END_DATE,
          start_date_near_earth: startDateArray,
          // endDateArray,
        },
      };
    },
  },
};

export default queries;
