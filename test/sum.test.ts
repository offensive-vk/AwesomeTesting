import sum from '../lib/sum';
import { it, describe, expect, beforeEach, afterEach } from "vitest";

describe('sum function testing', () => {
    it('should return 0 when no numbers are passed', () => {
        expect(sum()).toBe(0);
    });

    it('should return the number itself when only one number is passed', () => {
        expect(sum(5)).toBe(5);
        expect(sum(10)).toBe(10);
        expect(sum(-3)).toBe(-3);
    });

    it('should return the sum of two numbers', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(-5, 10)).toBe(5);
        expect(sum(0, 0)).toBe(0);
    });

    it('should return the sum of multiple numbers', () => {
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
        expect(sum(10, 20, 30)).toBe(60);
        expect(sum(-1, -2, -3, -4, -5)).toBe(-15);
    });

    it('should handle decimal numbers correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
        expect(sum(1.5, 2.5, 3.5)).toBeCloseTo(7.5);
        expect(sum(-1.1, -2.2, -3.3)).toBeCloseTo(-6.6);
    });
});
