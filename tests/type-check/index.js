import typeCheck from './../../functions/type-check.js'

const items = [[], 'This is a string', 10, true, function(){ console.log()}, new Date(), new Promise(resolve=> {})]

for(let i = 0; i < items.length; i++){
    console.log('TypeCheck:', items[i], typeCheck(items[i]))
}