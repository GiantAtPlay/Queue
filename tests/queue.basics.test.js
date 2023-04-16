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

test('Can add item to queue', ()=> {
    q.enqueue(1)

    const list = q.view()

    expect(list).toEqual([1])
})

test('Can add multiple items to queue', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)

    const list = q.view()

    expect(list.length).toBe(4)
})

test('Adding multiple items maintains FIFO ordering', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)
    
    const list = q.view()

    expect(list).toEqual([1,2,3,4])
})

test('Can dequeue first item in queue', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)
    q.dequeue()

    const list = q.view()

    expect(list).toEqual([2,3,4])
})

test('Returns item when dequeued', ()=> {
    q.enqueue(1)
    q.enqueue(2)
    q.enqueue(3)
    q.enqueue(4)

    const result = q.dequeue()

    expect(result).toEqual(1)
})