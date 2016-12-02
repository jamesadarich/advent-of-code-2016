enum AxisOrientation {
    X,
    Y
}

export default class Solution {
    public solve(directions: string) {
        let x = 0;
        let y = 0;

        const previousLocations: Array<any> = [];

        let orientation = AxisOrientation.X;
        let direction = 1;

        const instructions = directions.split(", ");

        for (let i = 0; i < instructions.length; i++) {

            let instruction = instructions[i];

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

                const distance = parseInt(instruction.substr(1));

                for (var j = 0; j < distance; j++) {                    
                    y += 1 * direction;

                    if (previousLocations.filter(location => location.x === x && location.y === y).length === 1) {
                        return Math.abs(x) + Math.abs(y); 
                    }    

                    previousLocations.push({ x: x, y: y });           
                }
            }
            else {
                orientation = AxisOrientation.X;

                const distance = parseInt(instruction.substr(1));

                for (var j = 0; j < distance; j++) {                    
                    x += 1 * direction;

                    if (previousLocations.filter(location => location.x === x && location.y === y).length === 1) {
                        return Math.abs(x) + Math.abs(y); 
                    }   

                    previousLocations.push({ x: x, y: y });    
                }
            }
        }

        throw new Error("could not find answer");
    }
}