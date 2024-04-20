export default function sum(...numbers: number[]): number {
    return numbers.reduce((acc, val) => acc + val, 0);
}
