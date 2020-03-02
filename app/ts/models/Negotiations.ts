import { Negotiation } from './Negotiation'

export class Negotiations {
    private _negotiations: Negotiation[] = [];

    add(negotiation: Negotiation) {
        this._negotiations.push(negotiation);
    }

    toArray(): Negotiation[]  {
        return ([] as Negotiation[]).concat(this._negotiations);
    }
}