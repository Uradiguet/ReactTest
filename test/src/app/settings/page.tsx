import Link from "next/link";
import SettingsFormComponent from "@/components/forms/SettingsFormComponent";

export default function SettingsPage() {
    return(
        <>
            <h1 className="mt-20 text-center text-2xl text-teal-600 font-bold">Settings</h1>
            <p className={"text-xm"}>Paramètres de l'application</p>
            <SettingsFormComponent />
            <hr className={"my-8"} />
            <Link
                href={"/"}
                className={"outline-1 outline-teal-600 font-semibold px-4 rounded-3xl"}
            >
                Retour à l'accueil
            </Link>

        </>
    );
}