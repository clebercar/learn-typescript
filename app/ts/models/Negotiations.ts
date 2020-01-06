class Negotiations {
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation) {
        this._negotiations.push(negotiation);
    }

    toArray() {
        return this._negotiations;
    }
}