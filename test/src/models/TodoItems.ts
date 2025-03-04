import {v4 as uuidv4} from "uuid";

type SimpleTodoItems = {
    id: string;
    title: string;
    done: boolean;
};

export default class TodoItems{
    id: string;
    title: string;
    done: boolean;
    constructor(id: string, title: string, done: boolean){
        this.id = uuidv4();
        this.title = title;
        this.done = done;
    }

    toSimpleObject():SimpleTodoItems{
        return {
            id: this.id,
            title: this.title,
            done: this.done
        };
    }

    toggle():void{
        this.done = !this.done;
    }
}