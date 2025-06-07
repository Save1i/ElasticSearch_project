const client = require("../ElastcClient");

class ElasticController {
  async postSearch(req, res) {
    const text = req.query.value;

    try {
      const q2 = {
        index: 'med_index',
        body: {
          query: {
            bool: {
              should: [
                {
                  match_phrase_prefix: {
                    title: {
                      query: text,
                      boost: 3.0
                    }
                  }
                },
                {
                  prefix: {
                    title: {
                      value: text.toLowerCase(),
                      boost: 2.0
                    }
                  }
                },
                {
                  wildcard: {
                    "title.keyword": {
                      value: `*${text.toLowerCase()}*`,
                      boost: 1.0
                    }
                  }
                }
              ],
              minimum_should_match: 1
            }
          }
        }
      };

      const { body } = await client.search(q2);
      res.status(200).json(body.hits.hits);
    } catch (error) {
      console.error('Elastic search error:', error?.meta?.body || error);
      res.status(500).json({ message: "Search failed", error: error?.meta?.body || error });
    }
  }
}

module.exports = new ElasticController();
