import md5 = require("md5");

export default class Solution {
    public solve(doorId: string) {

        let password = "";
        let searchIndex = 0;

        while (password.length < 8) {


            let hash = md5(doorId + searchIndex++);

            if (/^00000.+/.test(hash)) {
            console.log(doorId + (searchIndex - 1), hash);
                password += hash[5];
            }
        }

        return password;
    }
}