class TrainingPeople {
    constructor({ graphUrl, graphServer }) {
        this._graphUrl = graphUrl;
        this._graphServer = graphServer;
    }

    find({ fields, context, filter }) {}
    insert({ fields, context, input }) {}
    remove({ fields, context, filter }) {}
}

module.exports = TrainingPeople;
