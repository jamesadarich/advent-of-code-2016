export default class Solution {
    public solve(triangleStringSpecs: string) {
        const triangleRows = triangleStringSpecs.split("\n")
                                    .map(triangleRow => 
                                            triangleRow.trim().split(/\s+/)
                                            .map(triangleLength => parseInt(triangleLength)));
        
        const triangleColumns: Array<Array<number>> = [

        ];

        triangleRows.forEach(triangleRow => {
            for (let i = 0; i < triangleRow.length; i++) {
                if (triangleColumns[i] === undefined) {
                    triangleColumns.push([]);
                }

                triangleColumns[i].push(triangleRow[i]);
            }
        });

        const triangleSpecs: Array<Array<number>> = [ [] ];

        triangleColumns.forEach(triangleColumn => {
            triangleColumn.forEach(triangleSideLength => {
                if (triangleSpecs[triangleSpecs.length - 1].length === 3) {
                    triangleSpecs.push([]);
                }

                triangleSpecs[triangleSpecs.length - 1].push(triangleSideLength);
            });
        });

        const possibleTriangles = triangleSpecs.filter(triangleSpec => this._isPossible(triangleSpec));

        return possibleTriangles.length;
    }

    private _isPossible(triangleSpec: Array<number>) {
        triangleSpec = triangleSpec.sort((a, b) => a - b);

        return triangleSpec[0] + triangleSpec[1] > triangleSpec[2];
    }
}