const { query } = require("@simpleview/sv-graphql-client");

class TrainingMovies {
    constructor({ graphUrl, graphServer }) {
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    find({ fields, context, filter, headers }) {
        return query({
            query: `#graphql
                query GetMovies($filter: training_movies_find_input) {
                    training {
                        movies_find(filter: $filter) {
                            ${fields}
                        }
                    }
                }
            `,
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.movies_find",
            clean: true,
        });
    }
    insert({ fields, context, input, headers }) {
        return query({
            query: `#graphql
                mutation InsertMovies($input: [training_movies_insert_input]!) {
                    training {
                        movies_insert(input: $input) {
                            success
                            message
                        }
                    }
                }
            `,
            variables: { input },
            url: this._graphUrl,
            headers,
            key: "training.movies_insert",
            clean: true,
        });
    }
    remove({ fields, context, filter, headers }) {
        return query({
            query: `#graphql
                mutation RemoveMovies($filter: training_movies_remove_input) {
                    training {
                        movies_remove(filter: $filter) {
                            success
                            message
                        }
                    }
                }
            `,
            variables: { filter },
            url: this._graphUrl,
            headers,
            key: "training.movies_remove",
            clean: true,
        });
    }
}

module.exports = TrainingMovies;
