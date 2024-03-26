const { query } = require("@simpleview/sv-graphql-client");

const Movies = require("./collections/movies");
const People = require("./collections/people");

class TrainingPrefix {
	constructor({ graphUrl, graphServer }) {
		this.name = "training";

		this._graphUrl = graphUrl;
		this._graphServer = graphServer;

		this.movies = new Movies({ graphUrl, graphServer });
		this.people = new People({ graphUrl, graphServer });
	}
	async clear_test_data({ fields, context, headers }) {
		const response = await query({
			query: `#graphql
                mutation clear_test_data {
                    training {
                        test_clear {
                            ${fields}
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
	async reset_test_data({ fields, context, headers }) {
		const response = await query({
			query: `#graphql
                mutation reset_test_data {
					training {
						test_reset {
							${fields}
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

module.exports = TrainingPrefix;
