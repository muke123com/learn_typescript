"use strict";
(function () {
    function createSquare(config) {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    let mySquare = createSquare({ color: "black" });
    console.log(mySquare);
    let p1 = { x: 10, y: 20 };
    let a = [1, 2, 3, 4];
    let ro = a;
    console.log(ro);
    let mySearch;
    mySearch = function (src, sub) {
        let result = src.search(sub);
        return result > -1;
    };
    mySearch('abc', '/a/g');
    let myArray;
    myArray = ["Bob", "Fred"];
    let myStr = myArray[0];
})();
