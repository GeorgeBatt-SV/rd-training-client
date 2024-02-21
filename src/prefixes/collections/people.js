const { query } = require("@simpleview/sv-graphql-client");

class People {
	constructor({ graphUrl, graphServer }) {
		this._graphUrl = graphUrl;
		this._graphServer = graphServer;
	}

	async find({ fields, context, filter, headers }) {
		const variables = { filter };

		const response = await query({
			query: `#graphql
                query GetPeople($filter: training_people_find_input) {
                    training {
                        people_find(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
			variables,
			url: this._graphUrl,
			headers,
			key: "training.people_find",
			clean: true,
		});

		return response;
	}
	async insert({ fields, context, input, headers }) {
		const variables = { input };

		const response = await query({
			query: `#graphql
                mutation InsertPeople($input: [training_people_insert_input]!) {
                    training {
                        people_insert(input: $input) {
                            ${fields}
                        }
                    }
                }
            `,
			variables,
			url: this._graphUrl,
			headers,
			key: "training.people_insert",
			clean: true,
		});

		return response;
	}
	async remove({ fields, context, filter, headers }) {
		const variables = { filter };

		const response = await query({
			query: `#graphql
                mutation RemovePeople($filter: training_people_remove_input) {
                    training {
                        people_remove(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
			variables,
			url: this._graphUrl,
			headers,
			key: "training.people_remove",
			clean: true,
		});

		return response;
	}
}

module.exports = People;
