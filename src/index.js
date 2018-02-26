module.exports = function solveEquation(equation) {
    equation=equation.split(' ').join('');
   let arr=equation.split('*x^2'),
        arr1=arr[1].split('*x'),
        newArr=[arr[0],...arr1];
    for (let i=0; i<newArr.length;i++){
        newArr[i]=Number(newArr[i]);
    }
    let D=Math.sqrt(newArr[1]*newArr[1]-4*newArr[0]*newArr[2]);
     return [Math.round((-newArr[1]+D)/(2*newArr[0])),Math.round((-newArr[1]-D)/(2*newArr[0]))].sort((a,b)=>a-b);
}
