export type MongoDBConfigType = {
  uri: string;
};

export const buildMongoDBConfig: () => { mongodb: MongoDBConfigType } = () => {
  const config: { mongodb: MongoDBConfigType } = {
    mongodb: {
      uri: process.env.MONGODB_URI,
    },
  };

  return config;
};
