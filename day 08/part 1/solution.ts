export class Solution {
    public solve(rows: number, columns: number, instructions: string) {

        const grid = new Grid(rows, columns);

        const instructionList = instructions.split("\n").map(instruction => instruction.trim());

        instructionList.forEach(instruction => {
            const instructionParts = instruction.split(" ");

            if (instructionParts[0] === "rect") {
                const rectValues = instructionParts[1].split("x");
                grid.turnOnSquare(parseInt(rectValues[1]), parseInt(rectValues[0]));
            }
            else if (instructionParts[0] === "rotate") {
                const rotateValues = instructionParts[1].split("x");
                const rotateBy = parseInt(instructionParts[4]);
                const rotateIndex = parseInt(instructionParts[2].split("=")[1]);

                if (rotateValues[0] === "column") {
                    grid.columns[rotateIndex].rotateBy(rotateBy)
                }
                else if (rotateValues[0] === "row") {
                    grid.rows[rotateIndex].rotateBy(rotateBy)
                }

            }
        });

        return grid;
    }
}

export class Grid {

    public rows: Array<Row> = [];
    public columns: Array<Column> = [];

    public constructor(rowLength: number, columnLength: number) {
        for (let i = 0; i < columnLength; i++) {
            this.columns.push(new Column(this, i));
        }

        for (let i = 0; i < rowLength; i++) {
            this.rows.push(new Row(this, i));
        }
    }

    public toString() {
        return this.rows.map(row => row.cells.map(cell => cell ? "#" : ".").join("")).join("\n");
    }

    public turnOnSquare(rows: number, columns: number) {
        for (let i = 0; i < rows; i++) {
            this.rows[i].turnOnFirst(columns);
        }
    }

    public get pixelsOn() {
        return this.rows.map(rows => rows.cells.filter(cell => cell).length).reduce((cumulative, next) => cumulative + next, 0);
    }
}

export class Column {

    public get length() {
        return this._grid.rows.length;
    }

    public constructor (private _grid: Grid, private _index: number) {}

    public rotateBy(numberToRotateBy: number) {
        const currentState = this._grid.rows.map(row => row.cells[this._index]);

        numberToRotateBy = numberToRotateBy % this.length;

        const newState = currentState.slice(this.length - (numberToRotateBy)).concat(currentState.slice(0, this.length - (numberToRotateBy)));

        newState.forEach((state, index) => {
            this._grid.rows[index].cells[this._index] = state;
        });
    }
}

export class Row {

    public get length() {
        return this._grid.columns.length;
    }

    public cells: Array<boolean> = [];

    public constructor (private _grid: Grid, private _index: number) {
        for (let i = 0; i < this._grid.columns.length; i++) {
            this.cells.push(false);
        }
    }

    public turnOnFirst(numberToTurnOn: number) {
        
        for (let i = 0; i < numberToTurnOn; i++) {
            this.cells[i] = true;
        }
    }

    public rotateBy(numberToRotateBy: number) {
        const currentState = this.cells;

        numberToRotateBy = numberToRotateBy % this.length;

        const newState = currentState.slice(this.length - (numberToRotateBy)).concat(currentState.slice(0, this.length - (numberToRotateBy)));

        newState.forEach((state, index) => {
            this.cells[index] = state;
        });
    }
}