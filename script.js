// const color = 'teal';

// const obj = {};

// obj.color = 'green';
// obj[color] ='purple'

// for (let [key, value] of Object.entries(obj)) {
//     console.log(key, value);
// }

// const add = (x,y) => x+y;
// const mult = (x,y) => x*y;
// const square = (x) => x*x;
// const power = (x,y) => x**y;

// const myMath = {};

// myMath.add = add;
// myMath.mult = mult;

// const myMath = {
//     add: function(x,y) {
//         return x+y;
//     }, 
//     mult: (x,y)=>{return x*y}
// }

// const myMath = {
//     add(x,y) {
//         return x+y
//     }, 
//     square(x) {
//         return x*x
//     }
// }

// const rightTriangle = {
//     a: 9, 
//     b: 12, 
//     printThis: function() {
//         console.log(this);
//     },
//     getArea: function () {
//         return this.a*this.b/2;
//     },
//     getHypotenuse: function() {
//         return Math.sqrt(this.a**2 + this.b**2);
//     }
// };

// function Triangle(a, b) {
//     this.a = a;
//     this.b = b;
// }

// const tri1 = new Triangle(3,4);
// const tri2 = new Triangle(9,12);

// Triangle.prototype.getArea = function() {
//     return (this.a*this.b)/2
// };
// Triangle.prototype.getHypotenuse = function() {
//     return Math.sqrt(this.a**2 + this.b**2);
// };

class Triangle {
    constructor(a,b,c) {
        for (let side of [a,b,c]){
            if(!Number.isFinite(side) || side <= 0) {
                throw new Error('Sides must be positive numbers!!!!');
            }
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    greet(){
        console.log('hello from the other side!!!');
    }
    display(){
        console.log(`Triangle with the sides of ${this.a} and ${this.b}`);
    }
    getArea() {
        const {a,b,c} = this;
        const s = (a+b+c)/2;
        return Math.sqrt(s*(s-a)*(s-b)*(s-c));
    }
    isBig() {
        return this.getArea() >50
    }
}

// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;








