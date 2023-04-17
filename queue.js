import typeCheck, {ObjectTypes} from './functions/type-check.js'

const default_name = 'Unamed Queue'
const default_types = []

export default class Queue {
    #name;
    #types;
    #items;
    #next;
    #last;

    constructor(name = default_name, allowedTypes = default_types){
        this.#name = typeCheck(name) === ObjectTypes.string ? name : default_name
        this.#types = Array.isArray(allowedTypes) ? allowedTypes : []
        this.#items = []
        this.#next = 0
        this.#last = 0

        console.log(`Started queue '${this.#name}'`)
    }

    /** Adds a new item to internal items array */
    enqueue(item){
        if(this.#isValidItemType(item) === false){
            console.error(`Invalid item type! '${this.#name}' only accepts types of '${this.#types.join(',')}': ${item}`)
            return
        }

        this.#items[this.#last] = item
        this.#last++
        console.log(`Added item to '${this.#name}':`, item)
    }

    /** Remove first item from internal items array and return it */
    dequeue(){
        const item = this.#items[this.#next]

        if(item === undefined){
            console.log(`No more items in '${this.#name}'`)
            return item
        }

        delete this.#items[this.#next]
        this.#next++

        console.log(`Removed item from '${this.#name}':`, item)

        return item
    }

    /** Returns a copy of the first item in the internal items array  */
    peek(){
        return this.#items.slice(this.#next, this.#next + 1)[0]
    }

    /** Returns a shallow copy of the internal items array */
    view(){
        return this.#items.slice(this.#next, this.#last)
    }

    /** Returns current length of internal items array */
    length(){
        return this.#last - this.#next
    }

    isEmpty(){
        return this.length() === 0
    }

    name(){
        return this.#name
    }

    #isValidItemType(item){
        const type = typeCheck(item)
        return this.#types.length === 0 || this.#types.includes(type)
    }
}