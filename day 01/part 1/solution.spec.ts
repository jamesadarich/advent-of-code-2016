import { Test, Expect } from "alsatian";
import Solution from "./solution";

export default class DayOnePartOneTests {

    @Test()
    public scenarioOne() {
        const answer = new Solution().solve("R2, L3");

        Expect(answer).toBe(5);
    }

    @Test()
    public scenarioTwo() {
        const answer = new Solution().solve("R2, R2, R2");

        Expect(answer).toBe(2);
    }

    @Test()
    public scenarioThree() {
        const answer = new Solution().solve("R5, L5, R5, R3");

        Expect(answer).toBe(12);
    }

    @Test()
    public realScenario() {
        const answer = new Solution().solve("L1, R3, R1, L5, L2, L5, R4, L2, R2, R2, L2, R1, L5, R3, L4, L1, L2, R3, R5, L2, R5, L1, R2, L5, R4, R2, R2, L1, L1, R1, L3, L1, R1, L3, R5, R3, R3, L4, R4, L2, L4, R1, R1, L193, R2, L1, R54, R1, L1, R71, L4, R3, R191, R3, R2, L4, R3, R2, L2, L4, L5, R4, R1, L2, L2, L3, L2, L1, R4, R1, R5, R3, L5, R3, R4, L2, R3, L1, L3, L3, L5, L1, L3, L3, L1, R3, L3, L2, R1, L3, L1, R5, R4, R3, R2, R3, L1, L2, R4, L3, R1, L1, L1, R5, R2, R4, R5, L1, L1, R1, L2, L4, R3, L1, L3, R5, R4, R3, R3, L2, R2, L1, R4, R2, L3, L4, L2, R2, R2, L4, R3, R5, L2, R2, R4, R5, L2, L3, L2, R5, L4, L2, R3, L5, R2, L1, R1, R3, R3, L5, L2, L2, R5");

        Expect(answer).toBe(42);
    }
}