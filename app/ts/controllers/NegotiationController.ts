class NegotiationController {
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');

        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event){
        event.preventDefault();

        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputQuantity.value),
            parseFloat(this._inputValue.value)
        );
        
        this._negotiations.add(negotiation);

        this._negotiations.toArray().forEach(negociation => {
            console.log(negotiation.date)
            console.log(negotiation.quantity)
            console.log(negotiation.value)
        })

        this._negotiationsView.update(this._negotiations);
    }
}