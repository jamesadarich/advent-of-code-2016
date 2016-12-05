const keypad = [
    [    ,    , "1",    ,     ],
    [    , "2", "3", "4",     ],
    [ "5", "6", "7", "8", "9" ],
    [    , "A", "B", "C",     ],
    [    ,    , "D",    ,     ]
];

export default class Solution {
    public solve(stringstructions: string) {
        const instructions = stringstructions.split("\n");

        let code = "";
        let currentValue = 5;
        let currentPosition = {
            x: 0, y: 2
        };

        instructions.forEach(instruction => {

            for (let i = 0; i < instruction.length; i++) {
                if (instruction[i] === "U") {
                    if (keypad[currentPosition.y - 1] && keypad[currentPosition.y - 1][currentPosition.x]) {
                        currentPosition.y--;
                    }
                }
                else if (instruction[i] === "D") {
                    if (keypad[currentPosition.y + 1] && keypad[currentPosition.y + 1][currentPosition.x]) {
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

            try {
            code += keypad[currentPosition.y][currentPosition.x].toString();}
            catch(error) {
                throw new Error(JSON.stringify(currentPosition));
            }
        });

        return code;
    }
}