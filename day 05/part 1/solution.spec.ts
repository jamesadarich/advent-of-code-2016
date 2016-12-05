import { Test, Expect } from "alsatian";
import Solution from "./solution";

export default class DayFivePartOneTests {

    @Test()
    public scenarioOne() {
        const answer = new Solution().solve("abc");

        Expect(answer).toBe("18f47a30");
    }

    @Test()
    public realScenario() {
        const answer = new Solution().solve("ugkcyxxp");

        Expect(answer).toBe("d4cd2ee1");
    }
}