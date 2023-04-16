import Queue from '../../queue.js'

var q = new Queue()
var q2 = new Queue('Queue Two')

console.log('View:', q.view())
console.log('View Queue Two:', q2.view())

q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)

q2.enqueue(6)
q2.enqueue(7)
q2.enqueue(8)
q2.enqueue(9)
q2.enqueue(10)

console.log('View:', q.view())
console.log('View Queue Two:', q2.view())

q.dequeue()
q.dequeue()
q2.dequeue()

console.log('View:', q.view())
console.log('View Queue Two:', q2.view())
