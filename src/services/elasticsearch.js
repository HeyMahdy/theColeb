// elasticsearch.js
import { Client } from ('@elastic/elasticsearch')

const client = new Client({
  node: process.env.ELASTICSEARCH_URL,
  auth: {
    apiKey: process.env.ELASTIC_API_KEY
  }
});

export default client;
