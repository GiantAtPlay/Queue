export const ObjectTypes = {
    array: 'array',
    boolean: 'boolean',
    date: 'date',
    function: 'function',
    number: 'number',
    object: 'object',
    promise: 'promise',
    string: 'string',
}

export default function typeCheck(value){
    const protoStr = Object.prototype.toString.call(value)
    const type = protoStr.substring(protoStr.indexOf(' ') + 1, protoStr.indexOf(']'))
    let return_value = type.toLowerCase()
    if(return_value === 'asyncfunction') return_value = ObjectTypes.function
    return return_value
}