'use client';

import {Button, Checkbox, Modal} from "antd";
import {useState} from "react";
import TodoItems from "@/models/TodoItems";
import TodoItemsForm from "@/components/forms/TodoItemsForm";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";

export default function TodoItemsComponent({...props}:{items: TodoItems[]}) {
    const [items, setItems] = useState(props.items);
    const [showDialog, setShowDialog] = useState(false);
    const [editedItem, setEditedItem] = useState(new TodoItems("", "", false));
    const [isAdd, setIsAdd] = useState(false);

    return <div>
        <h1>Todos</h1>
        <Button onClick={() => setItems([])}>Supprimer tous les items</Button>
        <Button onClick={() => {
            setEditedItem(new TodoItems("", "", false).toSimpleObject());
            setIsAdd(true);
            setShowDialog(true);
        }}>
            Ajouter un item
        </Button>

        <Modal open={showDialog}
               onCancel={() => setShowDialog(false)}
               className={"pt-8"}
               title={isAdd ? "Ajouter un item" : "Modifier un item"}
               onOk={() => {
                   const updatedItems = isAdd ? [...items, editedItem] : items.map((item) => item.id === editedItem.id ? editedItem : item);
                   setItems(updatedItems);
                   setShowDialog(false);
               }}
        >
            <TodoItemsForm items={editedItem || {id: "", title: "", completed: false}} setItem={setEditedItem} />
        </Modal>
        <ul>
            {items.map((item, index) => <li key={index}>
                <Checkbox checked={item.done} onChange={(e) => {
                    const newItems = [...items];
                    newItems[index].done = e.target.checked;
                    setItems(newItems);
                }} />
                {item.title} {item.done ? "(done)" : ""}
                <Button size={"small"} icon={<DeleteOutlined/>} shape={"circle"} onClick={() => {
                    const newItems = [...items];
                    newItems.splice(index, 1);
                    setItems(newItems);
                }}/>
                <Button size={"small"} icon={<EditOutlined/>} shape={"circle"}
                        onClick={() => {
                            setIsAdd(false);
                            setShowDialog(true);
                            setEditedItem(item);
                        }}
                />
            </li>)}
        </ul>
    </div>;
}