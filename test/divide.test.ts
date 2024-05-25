// division.test.ts
import { describe, it, expect } from 'vitest';
import { divide } from '../lib/divide';

describe('divide', () => {
    it('should divide positive numbers correctly', () => {
        expect(divide(10, 2)).toBe(5);
    });

    it('should divide negative numbers correctly', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    it('should handle division resulting in a decimal', () => {
        expect(divide(10, 4)).toBeCloseTo(2.5);
    });

    it('should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });

    it('should divide two negative numbers correctly', () => {
        expect(divide(-10, -2)).toBe(5);
    });
});