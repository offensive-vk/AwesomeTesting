export default function subtract(...numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return numbers.reduce((acc, val) => acc - val);
}