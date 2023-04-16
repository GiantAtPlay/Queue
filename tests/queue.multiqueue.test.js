import {supressConsoleLogs} from './base.js'
import Queue from '../queue.js'

supressConsoleLogs()

let q1 = null
let q2 = null

beforeEach(()=> {
    q1 = new Queue('Queue one')
    q2 = new Queue('Queue two')
})

afterEach(()=> {
    q1 = null
    q2 = null
})

test('Items are added to the correct queue', ()=> {
    q1.enqueue(1)
    q2.enqueue(2)

    const list1 = q1.view()
    const list2 = q2.view()

    expect(list1).toEqual([1])
    expect(list2).toEqual([2])
})

test('Items are removed from the correct queue', ()=> {
    q1.enqueue(1)
    q2.enqueue(2)

    q2.dequeue()

    const list1 = q1.view()
    const list2 = q2.view()

    expect(list1).toEqual([1])
    expect(list2).toEqual([])
})