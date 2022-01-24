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

// class Triangle {
//     constructor(a,b,c) {
//         for (let side of [a,b,c]){
//             if(!Number.isFinite(side) || side <= 0) {
//                 throw new Error('Sides must be positive numbers!!!!');
//             }
//         }
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     greet(){
//         console.log('hello from the other side!!!');
//     }
//     display(){
//         console.log(`Triangle with the sides of ${this.a} and ${this.b}`);
//     }
//     getArea() {
//         const {a,b,c} = this;
//         const s = (a+b+c)/2;
//         return Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     }
//     isBig() {
//         return this.getArea() >50
//     }
// }

// const firstTri = new Triangle();
// firstTri.a = 3;
// firstTri.b = 4;
// const secondTri = new Triangle();
// secondTri.a = 9;
// secondTri.b = 12;

const blue = {
    name: 'Blue', 
    breed: 'Scottish Fold', 
    dance: function(dance) {
        console.log('this is', this);
        console.log(`Meow I am a ${this.breed} and I like to ${dance}`);
    },
    play: function(...toys){
        for(let toy of toys) {
            console.log(`${this.name} plays with ${toy}`);
        }
    }, 
    greet() {
        alert(`${this.name}SAYS MEOWWWW`);
    }
};

// const rocket = {
//     name: 'Rocket', 
//     breed: 'Himalayan'
// }

// const bDance = blue.dance; 
// const boundDance = bDance.bind(blue);

// const rocketDacne = blue.dance.bind(rocket);

// new CODE!!!!!!! new CODE!!!!! NEW CODE!!!!!!!! NEW CODE!!!!!!!!!!!
// const blueDisco = blue.dance.bind(blue, 'disco');
// const playsWithSocks = blue.play.bind(blue, 'socks', 'right sock');

// function applySalesTax(taxRate, price){
//     return price+price*taxRate;
// }

// const applyCATax = applySalesTax.bind(null, 0.0725);
// const applyTXTax = applySalesTax.bind(null, 0.0625);

// const bobsMembership = {
//     name: 'Bob', 
//     total: 250, 
    
// }

// function collectMonthlyFee(fee){
//     const remaining = this.total - fee;
//     this.total = remaining; 
//     return this.name + ' remaining balance: ' + remaining;
// }

// const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);

// const jillsMembership = {
//     name: 'jill', 
//     total: '250'
// }

// const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);

// document.getElementById('btn-one').addEventListener('click', blue.greet.bind(blue));

// const buttonONE = document.getElementById('btn-one');
// const buttonTWO = document.getElementById('btn-two');
// const buttonTHREE = document.getElementById('btn-three');

// function popUp(msg){
//     alert('THIS IS YOUR ALERT'+ msg);
// }

// buttonONE.addEventListener('click', popUp.bind(null, 'BUTTON A SAYS HI'))
// buttonTWO.addEventListener('click', popUp.bind(null, 'BUTTON b SAYS HI'))
// buttonTHREE.addEventListener('click', popUp.bind(null, 'BUTTON c SAYS HI'))

const greeter = {
    msg: 'I LIKE CHICKENZ', 
    sayHi: function() {
        alert(this.msg);
    },
    waitAndGreet: function(delay) {
        let callBack = function(){
            alert(this.msg)
        }
        setTimeout(callBack.bind(this), delay);
    }
};

// an alternative way and running the above function
// waitAndGreet: function(delay){
//     setTimeout(function(){
//         alert(this.msg);
//     }.bind(this), delay);
// }



