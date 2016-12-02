enum AxisOrientation {
    X,
    Y
}

export default class Solution {
    public solve(directions: string) {
        let x = 0;
        let y = 0;

        let orientation = AxisOrientation.X;
        let direction = 1;

        directions.split(", ").forEach(instruction => {

            // left
            if (instruction[0] === "L") {
                if (orientation === AxisOrientation.Y) {
                    direction *= -1;
                }
            }
            // right
            else {
                if (orientation === AxisOrientation.X) {
                    direction *= -1;
                }
            }

            if (orientation === AxisOrientation.X) {
                orientation = AxisOrientation.Y;
                y += (parseInt(instruction.substr(1)) * direction);
            }
            else {
                orientation = AxisOrientation.X;
                x += (parseInt(instruction.substr(1)) * direction);
            }
        });

        return Math.abs(x) + Math.abs(y);
    }
}