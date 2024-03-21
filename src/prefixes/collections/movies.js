const { query } = require("@simpleview/sv-graphql-client");

class Movies {
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter, headers }) {
		const variables = { filter };

		const response = await query({
			query: `#graphql
                query GetMovies($filter: training_movies_find_input) {
                    training {
                        movies_find(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
			variables,
			url: this._graphUrl,
			headers,
			key: "training.movies_find",
			clean: true,
		});

		return response;
	}
	async insert({ fields, context, input, headers }) {
		const variables = { input };

		const response = await query({
			query: `#graphql
                mutation InsertMovies($input: [training_movies_insert_input!]!) {
                    training {
                        movies_insert(input: $input) {
                            ${fields}
                        }
                    }
                }
            `,
			variables,
			url: this._graphUrl,
			headers,
			key: "training.movies_insert",
			clean: true,
		});

		return response;
	}
	async remove({ fields, context, filter, headers }) {
		const variables = { filter };

		const response = await query({
			query: `#graphql
                mutation RemoveMovies($filter: training_movies_remove_input) {
                    training {
                        movies_remove(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
			variables,
			url: this._graphUrl,
			headers,
			key: "training.movies_remove",
			clean: true,
		});

		return response;
	}
}

module.exports = Movies;
