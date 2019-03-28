(function(){
    // 常量
    const kitty = {
        name: "Aurora"
    };
    kitty.name = "Rory";  //const变量的内部状态是可修改

    // 变量
    let isDone: boolean = false;
    let createByNewBoolean: Boolean = new Boolean();

    let id: number = 1;
    let name1: string = "Geralt of Rivia";
    let sentence: string = `${name} is a witcher`;
    let any: any = 123;
    let u: undefined = undefined;
    let n: null = null;

    // 数组
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];
    let list_any: any[] = [1, 'abc', 2];

    // 元组
    let x: [string, number] = ['abc', 10];
    x.push(1);  //越界元素会使用联合类型(string|number)
    x.push('abc');

    // 枚举
    enum Color { Red, Green, Blue }
    let c: Color = Color.Red;

    // 方法
    function warnUser(): void {
        console.log("MESSAGE");
    }

    // 类型断言(类型转换)
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    let someValue2: any = "this is a string";
    let strLength2: number = (someValue2 as string).length;

    // 解构
    let input = [1, 2];
    let [first1, second] = input;  // first:1,second:2
    let [first2, ...rest] = [1, 2, 3, 4];
    console.log(first1); // 1
    console.log(rest);  // [2,3,4]

    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    };
    let { a, b = 10 } = o;
})()