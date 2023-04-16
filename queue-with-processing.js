import typeCheck, { ObjectTypes } from "./functions/type-check.js";
import Queue from "./queue.js";

export default class QueueWithProcessing extends Queue{
    #running;

    constructor(name){
        super(name, [ObjectTypes.object])
        this.#running = false
    }

    addJob(job){
        return new Promise((resolve, reject)=> {
            if(typeCheck(job) !== ObjectTypes.function) return
            super.enqueue({func: job, resolve, reject})
            this.#executeJob()
        })
    }

    async #executeJob(){
        if(this.#running === true) return false

        let job = super.dequeue()

        if(job === undefined) return false

       try{
        this.#running = true
        let result = await job.func()
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