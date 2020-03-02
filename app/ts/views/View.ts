export abstract class View<T> {
    protected _element: JQuery;
    private _escape: boolean;

    constructor(selector: string, escape = false) {
        this._element = $(selector);
        this._escape = escape;
    }

    update(model: T) {
        let template = this.template(model);

        if(this._escape) 
            template = template.replace(/<script>[\s\S]*?<\/script>/g, '');
        
        this._element.html(template);
    }

    abstract template(model: T): string;
}