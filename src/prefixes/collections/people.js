const { query } = require("@simpleview/sv-graphql-client");

class TrainingPeople {
    constructor({ graphUrl, graphServer }) {
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    find({ fields, context, filter, headers }) {
        return query({
            query: `#graphql
                query GetPeople($filter: training_people_find_input) {
                    training {
                        people_find(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.people_find",
            clean: true,
        });
    }
    insert({ fields, context, input, headers }) {
        return query({
            query: `#graphql
                mutation InsertPeople($input: [training_people_insert_input]!) {
                    training {
                        people_insert(input: $input) {
                            success
                            message
                        }
                    }
                }
            `,
            variables: { input },
            url: this._graphUrl,
            headers,
            key: "training.people_insert",
            clean: true,
        });
    }
    remove({ fields, context, filter, headers }) {
        return query({
            query: `#graphql
                mutation RemovePeople($filter: training_people_remove_input) {
                    training {
                        people_remove(filter: $filter) {
                            success
                            message
                        }
                    }
                }
            `,
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.people_remove",
            clean: true,
        });
    }
}

module.exports = TrainingPeople;
