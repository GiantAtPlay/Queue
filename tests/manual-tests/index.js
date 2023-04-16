import Queue from "../../queue-with-processing.js"

const myQueue = new Queue()

const testFunction = async ()=> {
    const sleep = ()=> {
        return new Promise(resolve => setTimeout(resolve, 1000))
    }
    await sleep()
    console.log('Logging from my test function')
}

const longTestFunction = async () => {
    const sleep = ()=> {
        return new Promise(resolve => setTimeout(resolve, 5000))
    }
    await sleep()
    console.log('Waited 5 seconds to log')
}

const lastTestFunction = ()=> {
    console.log('Different log for the last job')
}

myQueue.addJob(testFunction)
myQueue.addJob(testFunction)
myQueue.addJob(testFunction)
myQueue.addJob(longTestFunction)
myQueue.addJob(testFunction)
myQueue.addJob(testFunction)
myQueue.addJob(longTestFunction)
myQueue.addJob(lastTestFunction)