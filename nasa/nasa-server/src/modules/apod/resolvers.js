const queries = {
  Query: {
    getApod: async (_, __, { dataSources: { nasaAPI } }, ___) => {
      const response = await nasaAPI.getAPOD();
      console.log(response);
      return response;
    },
  },
};

export default queries;
