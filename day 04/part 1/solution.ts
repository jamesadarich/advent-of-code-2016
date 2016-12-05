export default class Solution {
    public solve(triangleStringSpecs: string) {
        const triangleSpecs = triangleStringSpecs.split("\n")
                                    .map(triangleSpec => 
                                            triangleSpec.split(" ")
                                            .map(triangleLength => parseInt(triangleLength)));

        const possibleTriangles = triangleSpecs.filter(triangleSpec => this._isPossible(triangleSpec));
    }

    private _isPossible(triangleSpec: Array<number>) {
        triangleSpec = triangleSpec.sort((a, b) => a - b);

        return triangleSpec[0] + triangleSpec[1] >= triangleSpec[2];
    }
}