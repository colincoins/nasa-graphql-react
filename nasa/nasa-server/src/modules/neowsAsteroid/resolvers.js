const queries = {
  Query: {
    getNeoWsAsteroid: async (_, { START_DATE, END_DATE }, { dataSources: { nasaAPI } }, ___) => {
      const response = await nasaAPI.getNeoWsAsteroids({ START_DATE, END_DATE });
      console.log(response);
      // console.log({ START_DATE });
      const startDateArray = response.near_earth_objects[START_DATE];
      const endDateArray = response.near_earth_objects[END_DATE];
      console.log({ startDateArray });
      // can JSON.stringify and return that as the rest data structure is weird

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
