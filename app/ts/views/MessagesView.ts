class MessagesView extends View<string> {
    update(model: string): void {
        this._element.html(this.template(model));
    }

    template(model: string): string {
        return `<p class="alert alert-info">${model}</p>`
    }
}