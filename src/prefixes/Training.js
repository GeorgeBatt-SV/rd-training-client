const TrainingMovies = require("./collections/movies");
const TrainingPeople = require("./collections/people");

const collections = {
    movies: TrainingMovies,
    people: TrainingPeople,
};

class Training {
    constructor({ graphUrl, graphServer }) {
        this.name = "training";

        this._graphUrl = graphUrl;
        this._graphServer = graphServer;

        const keys = Object.keys(collections);

        for (const key of keys) {
            const CollectionClass = collections[key];

            const instance = new CollectionClass({
                graphUrl: this._graphUrl,
                graphServer: this._graphServer,
            });

            this[`${key}_find`] = instance.find.bind(instance);
            this[`${key}_insert`] = instance.insert.bind(instance);
            this[`${key}_remove`] = instance.remove.bind(instance);
        }
    }
}

module.exports = Training;
