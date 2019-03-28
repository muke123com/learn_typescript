"use strict";
(function () {
    // 常量
    const kitty = {
        name: "Aurora"
    };
    kitty.name = "Rory"; //const变量的内部状态是可修改
    // 变量
    let isDone = false;
    let id = 1;
    let name1 = "Geralt of Rivia";
    let sentence = `${name} is a witcher`;
    let any = 123;
    let u = undefined;
    let n = null;
    // 数组
    let list = [1, 2, 3];
    let list2 = [1, 2, 3];
    let list_any = [1, 'abc', 2];
    // 元组
    let x = ['abc', 10];
    x.push(1); //越界元素会使用联合类型(string|number)
    x.push('abc');
    // 枚举
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Red;
    // 方法
    function warnUser() {
        console.log("MESSAGE");
    }
    // 类型断言(类型转换)
    let someValue = "this is a string";
    let strLength = someValue.length;
    let someValue2 = "this is a string";
    let strLength2 = someValue2.length;
    // 解构
    let input = [1, 2];
    let [first1, second] = input; // first:1,second:2
    let [first2, ...rest] = [1, 2, 3, 4];
    console.log(first1); // 1
    console.log(rest); // [2,3,4]
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, b = 10 } = o;
})();
