class NegotiationController {
    private _inputDate: HTMLInputElement;
    private _inputQuantity: HTMLInputElement;
    private _inputValue: HTMLInputElement;

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantity = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValue = <HTMLInputElement>document.querySelector('#valor');
    }

    add(event: Event){
        event.preventDefault();

        const negotiation = new Negotiation(
            this._inputDate.value,
            this._inputQuantity.value,
            this._inputValue.value
        );

        console.log(negotiation);
    }
}