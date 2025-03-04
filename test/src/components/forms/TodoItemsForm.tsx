import TodoItems from "@/models/TodoItems";
import {Checkbox, Form} from "antd";
import {ChangeEvent} from "react";

export default function TodoItemsForm({...props}:{items: TodoItems, setItem:(item: TodoItems)=>void}) {
    return (
        <Form>
            <Form.Item label={"Titre"}>
                <input
                    value={props.items.title}
                    placeholder={" ..."}
                    onChange={(e:ChangeEvent<HTMLInputElement>):void =>{
                        props.setItem({
                            ...props.items, title: e.target.value,
                            toSimpleObject: function (): { id: string; title: string; done: boolean; } {
                                throw new Error("Function not implemented.");
                            },
                            toggle: function (): void {
                                throw new Error("Function not implemented.");
                            }
                        })
                    }}
                />
            </Form.Item>
            <Form.Item label={"Complété"}>
                <Checkbox
                    checked={props.items.done}
                    onChange={(e:ChangeEvent<HTMLInputElement>):void => {
                        return props.setItem({
                            ...props.items, done: e.target.checked,
                            toSimpleObject: function (): { id: string; title: string; done: boolean; } {
                                throw new Error("Function not implemented.");
                            },
                            toggle: function (): void {
                                throw new Error("Function not implemented.");
                            }
                        });
                    }}
                />
            </Form.Item>
        </Form>
    );
}