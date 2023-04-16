import {supressConsoleLogs} from './base.js'
import typeCheck, { ObjectTypes } from '../functions/type-check.js'

supressConsoleLogs()

const items = [[], 'This is a string', 10, true, function(){ console.log()}, new Date(), new Promise(resolve=> {})]

const testCases = [
    ['Numbers', 1, ObjectTypes.number],
    ['Strings', '', ObjectTypes.string],
    ['Dates', new Date(), ObjectTypes.date],
    ['Booleans', true, ObjectTypes.boolean],
    ['Functions', function(){}, ObjectTypes.function],
    ['Arrays', [], ObjectTypes.array],
    ['Objects', {}, ObjectTypes.object],
    ['Promises', new Promise(r=> {}), ObjectTypes.promise],
    ['AsyncFunctions', async function(){}, ObjectTypes.function]
]

describe('Type check returns the correct object type', ()=> {
    testCases.forEach((el, i) => {
        let category = el[0]
        let value = el[1]
        let expectedType = el[2]

        test(`Check ${category}`, ()=> {
            const result = typeCheck(value)
            expect(result).toBe(expectedType)
        })
    })
})