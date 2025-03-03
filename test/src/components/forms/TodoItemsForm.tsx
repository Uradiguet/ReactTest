import {useState} from "react";
import SimpleTodoItems from "@/models/TodoItems";
import {Button, Divider, Form} from "antd";

export default function TodoItemsForm({...props}:{items:SimpleTodoItems[]}){
    const [items, setItems] = useState("");
    return (
        <Form>
            <Form.Item label={"Titre"}>
                <input
                    type={"text"}
                    value={props.items.title}
                />
            </Form.Item>
            <Form.Item label={"Complété"}>
                <input
                    type={"checkbox"}
                    checked={props.items.done}
                />
            </Form.Item>
            <Divider/>
            <Button type="primary" htmlType="submit"></Button>
        </Form>
    );

}