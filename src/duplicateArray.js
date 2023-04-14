let varArr = [2,3,3,4,1,1,12,4]
let varArr2 = []
for (let i = 0; i < varArr.length; i++) {
    if(!varArr2.includes(varArr[i])) varArr2.push(varArr[i]);
}
console.log(varArr2)

