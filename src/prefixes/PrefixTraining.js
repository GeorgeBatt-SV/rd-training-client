const { query } = require("@simpleview/sv-graphql-client");

const Movies = require("./collections/movies");
const People = require("./collections/people");

function instantiate(Class, prefix) {
	return new Class({
		graphUrl: prefix._graphUrl,
		graphServer: prefix._graphServer,
	});
}

class PrefixTraining {
	constructor({ graphUrl, graphServer }) {
		this.name = "training";

		this._graphUrl = graphUrl;
		this._graphServer = graphServer;

		this.movies = instantiate(Movies, this);
		this.people = instantiate(People, this);
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
}

module.exports = PrefixTraining;
