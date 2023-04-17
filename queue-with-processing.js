import typeCheck, { ObjectTypes } from "./functions/type-check.js";
import Queue from "./queue.js";

export class Job{
    resolve;
    reject;
    task;

    constructor(task){
        this.task = task
    }
}

export default class QueueWithProcessing extends Queue{
    #running;

    constructor(name){
        super(name, [ObjectTypes.object])
        this.#running = false
    }

    addJob(job){
        return new Promise((resolve, reject)=> {
            if(job instanceof Job === false){
                console.error('job not instance of Job class')
                return
            }

            job.resolve = resolve
            job.reject = reject

            super.enqueue(job)
            this.#executeJob()
        })
    }

    async #executeJob(){
        console.log('RUNNING:', this.#running)
        if(this.#running === true) return false

        let job = super.dequeue()

        console.log('GOT JOB', job)

        if(job === undefined) return false

        try{
            this.#running = true
            let result = await job.task()
            this.#running = false
            job.resolve(result)
        }
        catch(e){
            this.#running = false
            job.reject(e)
        }
        finally{
            this.#executeJob()
        }

        return true
    }
}