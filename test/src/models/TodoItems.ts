import {randomUUID, UUID} from "node:crypto";

type SimpleTodoItems = {
    id: UUID;
    title: string;
    done: boolean;
};

export default class TodoItems{
    id: UUID;
    title: string;
    done: boolean;
    constructor(id: UUID, title: string, done: boolean){
        this.id = randomUUID();
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