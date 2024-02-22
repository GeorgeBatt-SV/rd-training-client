const { query } = require("@simpleview/sv-graphql-client");

class Test {
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async seed({ fields, context, filter, headers } = {}) {
		const response = await query({
			query: `#graphql
                mutation TestSeed {
					training {
						test_seed{
							success
							message
						}
					}
				}
            `,
			url: this._graphUrl,
			headers,
			key: "training.test_seed",
		});

        return response;
    }
	async clear({ fields, context, filter, headers } = {}) {
		const response = await query({
			query: `#graphql
                mutation TestClear {
                    training {
                        test_clear{
                            success
                            message
                        }
                    }
                }
            `,
			url: this._graphUrl,
			headers,
			key: "training.test_clear",
		});

        return response;
    }
	async reset({ fields, context, filter, headers } = {}) {
		const response = await query({
			query: `#graphql
                mutation TestReset {
                    training {
                        test_reset{
                            success
                            message
                        }
                    }
                }
            `,
			url: this._graphUrl,
			headers,
			key: "training.test_reset",
		});

        return response;
    }
}

module.exports = Test;