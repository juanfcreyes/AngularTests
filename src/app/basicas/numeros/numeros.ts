export function incrementar(numero: number) {

    if (numero === null || numero === undefined) {
        return 0;
    }

    if (numero > 100) {
        return 100;
    } else {
        return ++numero;
    }
}