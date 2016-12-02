export default class Solution {
    public solve(stringstructions: string) {
        const instructions = stringstructions.split("\n");

        let code = "";
        let currentValue = 5;

        instructions.forEach(instruction => {

            for (let i = 0; i < instruction.length; i++) {
                if (instruction[i] === "U") {
                    if (currentValue > 3) {
                        currentValue -= 3;
                    }
                }
                else if (instruction[i] === "D") {
                    if (currentValue < 7) {
                        currentValue += 3;
                    }
                }
                else if (instruction[i] === "R") {
                    if (currentValue % 3 !== 0) {
                        currentValue++;
                    }
                }
                else if (instruction[i] === "L") {
                    if (currentValue % 3 !== 1) {
                        currentValue--;
                    }
                }

            }

            code += currentValue.toString();
        });

        return code;
    }
}