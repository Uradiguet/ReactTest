"use client";

import User from "@/models/User";
import {Badge, Button, List, Modal} from "antd";
import {useState} from "react";
import UsersFormComponent from "@/component/users/UsersFormComponent";
import HttpService from "@/services/HttpService";
import API_URLS from "@/constants/ApiUrls";

export default function UsersComponent({...props}: { users: User[] }) {
    const [users, setUsers] = useState<User[]>(props.users);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [editedUser, setEditedUser] = useState<User>(new User());

    const addUser = (user: User) => {
        if (!user.id) {
            delete user.id;
        }
        HttpService.post(API_URLS.users, user).then((res) => {
            /*if (res.ok){

            }*/
            setUsers([...users, res.data]);
        });
        setShowModal(false);
    }


    return (
        <>
            <h1 className="text-center text-4xl text-blue-900 font-bold">Utilisateurs</h1>

            <Button type={"default"}
                    onClick={()=>{
                        setShowModal(true);
                    }}>
                Ajouter un utilisateur
            </Button>

            <Modal open={showModal} title={"Ajouter un utilisateur"}
                   onCancel={() => setShowModal(false)}
                   onOk={()=>addUser()}
                   footer={null}>

                <UsersFormComponent user={editedUser} setUser={setEditedUser} onSubmit={addUser}/>

            </Modal>

            <List dataSource={users}
                  header={<h2 className={"text-xm font-bold text-teal-600"}>
                      utilisateurs <Badge color={"teal"} count={users.length} />
                  </h2>
                  }
                  renderItem={(user: User) =>
                      <List.Item key={user.id}>
                          {user.firstName} {user.lastName} {user.username} - {user.email}
                          <Button type={"default"}>Editer</Button>
                          <Button type={"default"}>Supprimer</Button>
                      </List.Item>}>
            </List>
        </>
    );
}