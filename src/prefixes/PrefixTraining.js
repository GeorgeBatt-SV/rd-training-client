const Test = require("./test");
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

		this.test = instantiate(Test, this);

		this.movies = instantiate(Movies, this);
		this.people = instantiate(People, this);
	}
}

module.exports = PrefixTraining;
