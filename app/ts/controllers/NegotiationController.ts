import { NegotiationsView } from '../views/NegotiationsView';
import { Negotiations } from '../models/Negotiations';
import { Negotiation } from '../models/Negotiation';
import { MessagesView } from '../views/MessagesView';

export class NegotiationController {
    private _inputDate: JQuery;
    private _inputQuantity: JQuery;
    private _inputValue: JQuery;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');
    private _messagesView = new MessagesView('#mensagemView');

    constructor() {
        this._inputDate = $('#data');
        this._inputQuantity = $('#quantidade');
        this._inputValue = $('#valor');

        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event){
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );
        
        this._negotiations.add(negotiation);

        this._negotiations.toArray().forEach(negociation => {
            console.log(negotiation.date)
            console.log(negotiation.quantity)
            console.log(negotiation.value)
        })

        this._negotiationsView.update(this._negotiations);
        this._messagesView.update('Negociação adicionada com sucesso!');
    }
}