export default class Solution {
    public solve(roomInfoString: string) {
        return roomInfoString.split("\n")
                                    .map(roomInfo => new Room(roomInfo))
                                    .filter(room => room.isReal)
                                    .reduce((runningTotal, roomB) => runningTotal + roomB.sectorId, 0);
    }
}

class Room {

    private _name: string;
    private _checksum: string;

    private _sectorId: number;
    public get sectorId() {
        return this._sectorId;
    }

    public get isReal() {
        const sanitizedName = this._name.replace(/-/g, "");

        const characterCounts: any = {};

        for(let character of sanitizedName) {
            characterCounts[character] = ++characterCounts[character] || 1;
        }

        const characters = Object.keys(characterCounts);

        const expectedChecksum = characters.sort().sort((characterA, characterB) => {
            if (characterCounts[characterA] !== characterCounts[characterB]) {
                return characterCounts[characterA] - characterCounts[characterB]
            }

            if (characterA > characterB) {
                return -1;
            }

            return 1;
        }).reverse().slice(0, 5).join("");

        return this._sortString(expectedChecksum) === this._sortString(this._checksum);
    }

    private _sortString(string: string) {
        return Object.keys(string).map(key => string[parseInt(key)]).sort().join("")
    }

    public constructor(roomInfo: string) {
        this._name = roomInfo.match(/^[a-z]+(-[a-z]+)+/)[0];
        this._sectorId = parseInt(roomInfo.match(/[1-9][0-9]*/)[0]);
        this._checksum = roomInfo.match(/\[[a-z]{5}\]$/)[0].substring(1, 6);
    }
}