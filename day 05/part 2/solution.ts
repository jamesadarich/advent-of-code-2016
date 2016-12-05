import md5 = require("md5");

export default class Solution {
    public solve(doorId: string) {

        let passwordArray: Array<string> = [];
        let searchIndex = 0;

        while (passwordArray.join("").length < 8) {


            let hash = md5(doorId + searchIndex++);

            if (/^00000[0-7].+/.test(hash)) {
            console.log(doorId + (searchIndex - 1), hash);
                if (passwordArray[parseInt(hash[5])] === undefined) {
                    passwordArray[parseInt(hash[5])] = hash[6];
                } 
            }
        }

        return passwordArray.join("");
    }
}