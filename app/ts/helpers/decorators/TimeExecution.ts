export function timeExecution(inSeconds: boolean = false) {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value;

        descriptor.value = function(...args: any[]) {
            let unit = 'ms';
            let divisor = 1;

            if(inSeconds) {
                unit = 's';
                divisor = 1000;
            }

            console.log('------------------------');
            console.log(`Parameters passing to method ${propertyKey}: ${JSON.stringify(args)}`);

            const t1 = performance.now();
            const theReturn = originalMethod.apply(this, args);
            const t2 = performance.now();

            console.log(`Return method ${propertyKey} é ${JSON.stringify(theReturn)}`);
            console.log(`O método ${propertyKey} demorou ${(t2 - t1)/divisor}${unit}`);

            return theReturn;
        }

        return descriptor;
    }
}