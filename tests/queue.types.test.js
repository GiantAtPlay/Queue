import {supressConsoleLogs} from './base.js'
import Queue from '../queue.js'
import { ObjectTypes } from '../functions/type-check.js'

supressConsoleLogs()

const testCases = [
    ['Numbers only queue', [ObjectTypes.number], 1],
    ['Strings only queue', [ObjectTypes.string], 1],
    ['Dates only queue', [ObjectTypes.date], 1],
    ['Booleans only queue', [ObjectTypes.boolean], 1],
    ['Functions only queue', [ObjectTypes.function], 1],
    ['Arrays only queue', [ObjectTypes.array], 1],
    ['Objects only queue', [ObjectTypes.object], 1],
    ['Promise only queue', [ObjectTypes.promise], 1],
    ['Mixed queue', [ObjectTypes.number, ObjectTypes.date, ObjectTypes.function, ObjectTypes.object], 4],
]

describe('Queue only accepts allowed item types', ()=> {
    testCases.forEach((el, i)=> {
        let name = el[0]
        let types = el[1]
        let expectedCount = el[2]
        test(`'${name}' only accepts '${types.join(',')}'`, ()=> {
            const q = new Queue(name, types)

            q.enqueue(1)
            q.enqueue('This is a string')
            q.enqueue(new Date())
            q.enqueue(true)
            q.enqueue(function(){ console.log('Test function')})
            q.enqueue([])
            q.enqueue({})
            q.enqueue(new Promise(r => {}))

            q.enqueue(null)
            q.enqueue(undefined)

            const length = q.length()

            expect(length).toBe(expectedCount)
        })
    })

    test('By default queue accepts any item type', ()=> {
        const q = new Queue()
    
        q.enqueue(1)
        q.enqueue('This is a string')
        q.enqueue(new Date())
        q.enqueue(true)
        q.enqueue(function(){ console.log('Test function')})
        q.enqueue([])
        q.enqueue({})
        q.enqueue(new Promise(r => {}))
    
        q.enqueue(null)
        q.enqueue(undefined)
    
        const length = q.length()
    
        expect(length).toBe(10)
    })
})