const Sort = require('./Sort.js')

function main(){
    let biglist = [];
    for(let i=0;i<1000000;i++){
        biglist[i] = Math.random();
    }
    let list1 = Sort.merge(biglist);
}
main();
