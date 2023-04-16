import {supressConsoleLogs} from './base.js'
import Queue from '../queue.js'

supressConsoleLogs()

let q = null

beforeEach(()=> {
    q = new Queue()
})

afterEach(()=> {
    q = null
})

test('View returns all items currently in items array', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    let list = q.view()

    expect(list).toEqual([1,2,3])
})

test('View correctly excludes dequeued items', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    const list = q.view()

    q.dequeue()

    let list2 = q.view()

    expect(list).toEqual([1,2,3])
    expect(list2).toEqual([2,3])
})

test('View returns clone not reference to actual items', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    let list = q.view()
    list[1] = 4

    const list2 = q.view()

    expect(list).toEqual([1,4,3])
    expect(list2).toEqual([1,2,3])
})

test('Peek returns next item in queue', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    const item = q.peek()

    expect(item).toBe(1)
})

test('Peek returns clone not reference to actual item', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    let item = q.peek()
    item = 4

    const list = q.view()

    expect(item).toBe(4)
    expect(list).toEqual([1,2,3])
})

test('Length returns correct queue length', ()=> {
    const length1 = q.length()

    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)

    const length2 = q.length()

    q.enqueue(4)
    q.enqueue(5)

    const length3 = q.length()

    expect(length1).toBe(0)
    expect(length2).toBe(3)
    expect(length3).toBe(5)
})

test('IsEmpty returns true when no items', ()=> {
    const result = q.isEmpty()

    expect(result).toBe(true)
})

test('IsEmpty returns false when there are items', ()=> {
    q.enqueue(1)
    
    const result = q.isEmpty()

    expect(result).toBe(false)
})
