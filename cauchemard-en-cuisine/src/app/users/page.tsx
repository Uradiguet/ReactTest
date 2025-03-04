import HttpService from "@/services/HttpService";
import API_URLS from "@/constants/ApiUrls";

const getUsers = async () => {
    return await HttpService.get(API_URLS.users);
};

export default async function Userspage(){
    const users = await getUsers();
    return(
        <>
            <h1 className="text-center text-4xl text-blue-900 font-bold">Utilisateurs</h1>
            <p>{users.length}</p>
        </>
    );
}