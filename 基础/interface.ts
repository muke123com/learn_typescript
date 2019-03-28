(function(){
    // 可选属性
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig) {
        let newSquare = {color: "white", area: 100};
        if(config.color) {
            newSquare.color = config.color;
        }
        if(config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({color: "black"});
    console.log(mySquare);

    // 只读属性
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };

    let a: number[] = [1,2,3,4];
    let ro: ReadonlyArray<number> = a;

    console.log(ro);

    // 额外属性
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }

    // 函数类型
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    let mySearch: SearchFunc;
    mySearch = function (src, sub): boolean {
        let result = src.search(sub);
        return result > -1
    };
    mySearch('abc', '/a/g');

    // 可索引类型
    interface StringArray {
        [index: number]: string;
    }
    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];
})()
