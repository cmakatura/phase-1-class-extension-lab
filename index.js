// Your code here
class Polygon{
    constructor(array){
    this.array = array;
    }
    get countSides(){
        return this.array.length;
    }

    get perimeter(){
    let sum = this.array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    console.log(sum)    
    return sum
    }

    }


class Triangle extends Polygon {
    get isValid(){
    let a = this.array[0];
        console.log(a);
    let b = this.array[1];
    console.log(b);
    let c = this.array[2];
        console.log(c);
if (a + b > c && b + c > a && c + a > b){
    return true
} else {
    return false
}
        
    }
}


//let triangle = new Triangle([15, 10, 1])
//triangle.isValid

class Square extends Polygon{
    get isValid(){
    let a = this.array[0];
    let b = this.array[1];
    let c = this.array[2];
    let d = this.array[3];

    if(a === b && a === c && a === d){
        return true
    } else {
        return false
    }
        
}
get area(){
    let a = this.array[0];
    return a * a;
}
}





