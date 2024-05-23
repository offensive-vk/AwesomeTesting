import { describe, it, expect } from 'vitest';
import { multiply } from '../lib/multiply';

describe('multiply', () => {
    it('should multiply positive numbers correctly', () => {
        expect(multiply(10, 2)).toBe(20);
    });

    it('should multiply a positive and a negative number correctly', () => {
        expect(multiply(10, -2)).toBe(-20);
    });

    it('should multiply by zero correctly', () => {
        expect(multiply(10, 0)).toBe(0);
    });

    it('should multiply two negative numbers correctly', () => {
        expect(multiply(-10, -2)).toBe(20);
    });

    it('should handle multiplication resulting in a large number', () => {
        expect(multiply(1000, 2000)).toBe(2000000);
    });
});
