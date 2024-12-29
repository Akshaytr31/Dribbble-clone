function multiple(times,num){
    let sum=0
    for(let i=1;i<=times;i++){
        sum+=num
    }
    return sum
}
// console.log(multiple(10,7))
function test(){
let list=[[5,5],[10,5],[20,10]]
let expected=[25,50,200]
for(let i=0;i<list.length;i++){
    let result=multiple(list[i][0],list[i][1])
    if (result===expected[i]){
        console.log(`test ${i+1} is passed`)
    }else{
        console.log(`test ${i+1} is failed`)
    }
}
}
test()

