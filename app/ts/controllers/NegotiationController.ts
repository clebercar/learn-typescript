import { NegotiationsView, MessagesView } from '../views/index';
import { Negotiations, Negotiation } from '../models/index';
import { domInject } from '../helpers/decorators/index';

export class NegotiationController {

    @domInject('#data')
    private _inputDate: JQuery;

    @domInject('#quantidade')
    private _inputQuantity: JQuery;

    @domInject('#valor')
    private _inputValue: JQuery;

    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');
    private _messagesView = new MessagesView('#mensagemView');

    constructor() {
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event){
        event.preventDefault();

        let date = new Date(this._inputDate.val().replace(/-/g, ','));

        if(!this._isUtilDay(date)) {
            this._messagesView.update('Somente negociações em dias úteis.')
        }

        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );
        
        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
        this._messagesView.update('Negociação adicionada com sucesso!');
    }

    private _isUtilDay(date: Date) {
        return date.getDay() != Weekday.Sunday && date.getDay() != Weekday.Saturday
    }
}

enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}