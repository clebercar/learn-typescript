export function domInject(selector: string) {
    return function(target: any, key: string) {
        let element : JQuery;

        const getter = function() {
            if(!element) {
                console.log(`Buscando ${selector} para injetar em ${key}`);

                element = $(selector);
            }

            return element;
        }

        Object.defineProperty(target, key, {
            get: getter
        })
    }
}