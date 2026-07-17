var checkInclusion = function (s1, s2) {

    function isFreqSame(map1, map2) {
        for (let i = 0; i < 26; i++) {
            if (map1[i] !== map2[i]) {
                return false;
            }
        }
        return true;
    }

    if (s1.length > s2.length) return false;

    const map = new Array(26).fill(0);
    const map2 = new Array(26).fill(0);

    // Frequency of s1
    for (let ch of s1) {
        let index = ch.charCodeAt(0) - 97;
        map[index]++;
    }

    let left = 0;

    for (let right = 0; right < s2.length; right++) {

        let index = s2.charCodeAt(right) - 97;
        map2[index]++;

        // Window size > s1.length
        if (right - left + 1 > s1.length) {
            let leftIndex = s2.charCodeAt(left) - 97;
            map2[leftIndex]--;
            left++;
        }

        // Window size == s1.length
        if (right - left + 1 === s1.length) {
            if (isFreqSame(map, map2)) {
                return true;
            }
        }
    }

    return false;
};

checkInclusion("ab", "eidbaooo");
