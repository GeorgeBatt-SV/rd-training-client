const Movies = require("./collections/movies");
const People = require("./collections/people");

const collections = [
	{
		name: "movies",
		class: Movies,
	},
	{
		name: "people",
		class: People,
	},
];

class PrefixTraining {
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

module.exports = PrefixTraining;
