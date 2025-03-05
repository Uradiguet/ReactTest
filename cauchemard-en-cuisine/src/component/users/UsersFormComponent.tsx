"use client";

import {Form, Input, Button, Divider} from "antd";
import {useState} from "react";
import User from "@/models/User";

export default function UsersFormComponent({onSubmit}: {onSubmit: (user: User) => void}) {
    const [editedUser, setEditedUser] = useState<User>(new User());

    const handleSubmit = () => {
        onSubmit(editedUser);
    };

    return (
        <>
            <h2 className="text-center text-4xl text-blue-900 font-bold">Utilisateur</h2>
            <Form>
                <div className={"grid grid-cols-2 gap-4"}>
                    <div>
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <Input
                            id="username"
                            value={editedUser.username}
                            onChange={(e) => setEditedUser({...editedUser, username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            value={editedUser.email}
                            onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName">Prénom</label>
                        <Input
                            id="firstName"
                            value={editedUser.firstName}
                            onChange={(e) => setEditedUser({...editedUser, firstName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Nom</label>
                        <Input
                            id="lastName"
                            value={editedUser.lastName}
                            onChange={(e) => setEditedUser({...editedUser, lastName: e.target.value})}
                        />
                    </div>
                </div>
                <Divider/>
                <Button type="primary" onClick={handleSubmit}>Valider</Button>
            </Form>
        </>
    )
}