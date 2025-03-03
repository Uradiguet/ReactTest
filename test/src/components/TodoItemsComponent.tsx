'use client';

import SimpleTodoItems from "@/models/TodoItems";
import {Button, Checkbox, Modal} from "antd";
import {useState} from "react";
import TodoItemsForm from "@/components/forms/TodoItemsForm";

export default function TodoItemsComponent({...props}:{items:SimpleTodoItems[]}){
    const [items, setItems] = useState(props.items);
    const [showDialog, setShowDialog] = useState(false);
    return (
        <div>
            <h1>Todos</h1>

            <Button onClick={()=>setItems([])}>
                Supprimer tous les items
            </Button>

            <Button onClick={() => setShowDialog(true)}>Ajouter un Item</Button>
            {showDialog && <TodoItemsForm items={{id:"",title:"",done:false}}/>}

            <Modal open={showDialog} onCancel={() => setShowDialog(false)}>
                <TodoItemsForm items={{id:"",title:"",done:false}}/>
            </Modal>

            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Checkbox checked={item.done} onChange={(e) => {
                            const newItems = [...item];
                            newItems[item.id].done = e.target.checked;
                            setItems(newItems);
                        }}/>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}