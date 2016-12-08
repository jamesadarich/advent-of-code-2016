export default class Solution {
    public solve(roomInfoString: string) {
        return roomInfoString.split("\n")
                                    .map(roomInfo => new Room(roomInfo))
                                    .filter(room => room.isReal)
                                    .filter(room => room.name === "northpole object storage")
                                    [0].sectorId;
    }
}

class Room {

    private _encryptedName: string;

    public get name() {

        let decryptedString = "";
        for(var encryptedCharacter of this._encryptedName) {
            if (encryptedCharacter === "-") {
                decryptedString += " ";
            }
            else {
                decryptedString += String.fromCharCode((encryptedCharacter.charCodeAt(0) + this._sectorId - 97) % 26 + 97);
            }
        }

        return decryptedString.trim();
    }

    private _checksum: string;

    private _sectorId: number;
    public get sectorId() {
        return this._sectorId;
    }

    public get isReal() {
        const sanitizedName = this._encryptedName.replace(/-/g, "");

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
        this._encryptedName = roomInfo.match(/^[a-z]+(-[a-z]+)+/)[0];
        this._sectorId = parseInt(roomInfo.match(/[1-9][0-9]*/)[0]);
        this._checksum = roomInfo.match(/\[[a-z]{5}\]$/)[0].substring(1, 6);
    }
}