import Queue, {Job} from "../../queue-with-processing.js"

const myQueue = new Queue()

const sleep = (ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const testFunction = async ()=> {
    await sleep(1000)
    console.log('Logging from my test function')
}

const longTestFunction = async () => {
    await sleep(5000)
    console.log('Waited 5 seconds to log')
}

const lastTestFunction = ()=> {
    console.log('Different log for the last job')
}

const delayedFunction = ()=> {
    console.log('Delayed function')
}

myQueue.addJob(new Job(testFunction))
myQueue.addJob(new Job(testFunction))
myQueue.addJob(new Job(testFunction))
myQueue.addJob(new Job(longTestFunction))
myQueue.addJob(new Job(testFunction))
myQueue.addJob(new Job(testFunction))
myQueue.addJob(new Job(longTestFunction))
myQueue.addJob(new Job(lastTestFunction))

sleep(20000).then(()=> {
    myQueue.addJob(new Job(delayedFunction))
})