const TrainingMovies = require("./collections/movies");
const TrainingPeople = require("./collections/people");

const collections = [
    {
        name: "movies",
        class: TrainingMovies,
    },
    {
        name: "people",
        class: TrainingPeople,
    },
];

class Training {
    constructor({ graphUrl, graphServer }) {
        this.name = "training";

        this._graphUrl = graphUrl;
        this._graphServer = graphServer;

        for (const { name, class: CollectionClass } of collections) {
            const instance = new CollectionClass({
                graphUrl: this._graphUrl,
                graphServer: this._graphServer,
            });

            this[name] = instance;
        }
    }
}

module.exports = Training;
