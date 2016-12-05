import { Test, Expect } from "alsatian";
import Solution from "./solution";

export default class DayFivePartTwoTests {

    @Test()
    public scenarioOne() {
        const answer = new Solution().solve("abc");

        Expect(answer).toBe("05ace8e3");
    }

    @Test()
    public realScenario() {
        const answer = new Solution().solve("ugkcyxxp");

        Expect(answer).toBe("f2c730e5");
    }
}