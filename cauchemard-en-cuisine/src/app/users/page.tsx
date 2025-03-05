import HttpService from "@/services/HttpService";
import API_URLS from "@/constants/ApiUrls";
import UsersComponent from "@/component/users/UsersComponent";

const getUsers = async () => {
    return await HttpService.get(API_URLS.users);
};

export default async function Userspage(){
    const users = await getUsers();
    return(
        <>
            <UsersComponent users={users} />
        </>
    );
}