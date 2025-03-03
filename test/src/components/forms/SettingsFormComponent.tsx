'use client';
import {useState} from "react";

export default function SettingsFormComponent(){
    const [color, setColor] = useState("#008080");

    return (
        <form>
            <h1 style={{color : color}}>CHANGE LA COULEUR</h1>
            <input
                    type={"color"}
                    value={color}
                    placeholder={"Couleur du titre de l'accueil"}
                    onChange={(e) => {
                        setColor(e.target.value);
                        console.log('color', color);
                    }}
            />
            <button>Valider</button>
        </form>
    );
}