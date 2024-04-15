import subtract from '../lib/subtract';
import { it, describe, expect } from "vitest";

describe('subtract function testing', () => {
    it('should return 0 when no numbers are passed', () => {
        expect(subtract()).toBe(0);
    });

    it('should return the number itself when only one number is passed', () => {
        expect(subtract(5)).toBe(5);
        expect(subtract(10)).toBe(10);
        expect(subtract(-3)).toBe(-3);
    });

    it('should return the result of subtracting two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
        expect(subtract(10, -5)).toBe(15);
        expect(subtract(0, 0)).toBe(0);
    });

    it('should return the result of subtracting multiple numbers', () => {
        expect(subtract(10, 2, 3, 4, 1)).toBe(0);
        expect(subtract(100, 20, 30)).toBe(50);
        expect(subtract(-1, -2, -3, -4, -5)).toBe(13);
    });

    it('should handle decimal numbers correctly', () => {
        expect(subtract(0.3, 0.2)).toBeCloseTo(0.1);
        expect(subtract(10.5, 2.5, 3.5)).toBeCloseTo(4.5);
        expect(subtract(-1.1, -2.2, -3.3)).toBeCloseTo(4.4);
    });
});
