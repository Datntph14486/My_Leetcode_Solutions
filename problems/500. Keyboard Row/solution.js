/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    const result = [];

    const store = {
        z: 1,
        x: 1,
        c: 1,
        v: 1,
        b: 1,
        n: 1,
        m: 1,
        a: 2,
        s: 2,
        d: 2,
        f: 2,
        g: 2,
        h: 2,
        j: 2,
        k: 2,
        l: 2,
        q: 3,
        w: 3,
        e: 3,
        r: 3,
        t: 3,
        y: 3,
        u: 3,
        i: 3,
        o: 3,
        p: 3,
    };

    for (let i = 0; i < words.length; i++) {
        let character = words[i];
        let level = null;

        for (let i = 0; i < character.length; i++) {
            if (level == null) {
                level = store[character[i].toLowerCase()];
                continue;
            }

            if (level != store[character[i].toLowerCase()]) {
                level = null;
                break;
            }
        }

        if (level != null) {
            result.push(character);
        }
    }

    return result;
};
