const keypad = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];

export default class Solution {
    public solve(stringstructions: string) {
        const instructions = stringstructions.split("\n");

        let code = "";
        let currentValue = 5;
        let currentPosition = {
            x: 1, y: 1
        };

        instructions.forEach(instruction => {

            for (let i = 0; i < instruction.length; i++) {
                if (instruction[i] === "U") {
                    if (keypad[currentPosition.y - 1]) {
                        currentPosition.y--;
                    }
                }
                else if (instruction[i] === "D") {
                    if (keypad[currentPosition.y + 1]) {
                        currentPosition.y++;
                    }
                }
                else if (instruction[i] === "R") {
                    if (keypad[currentPosition.y][currentPosition.x + 1]) {
                        currentPosition.x++;
                    }
                }
                else if (instruction[i] === "L") {
                    if (keypad[currentPosition.y][currentPosition.x - 1]) {
                        currentPosition.x--;
                    }
                }

            }

            code += keypad[currentPosition.y][currentPosition.x].toString();
        });

        return code;
    }
}