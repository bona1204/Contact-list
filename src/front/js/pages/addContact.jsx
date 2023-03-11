import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const AddContact =()=>{
    const {store, actions}=useContext(Context)
    let newContact={
        full_name:"Sebastian",
        email:"sebastian.bonillad@gmail.com",
        "agenda_slug": "agenda_de_sebastian",
        "address":"47568 NW 34ST, 33434 FL, USA",
        "phone":"7864445566"
    }
    return (<div>
        Aqui deberia agregar contactios nuevos
        <br/>
        <Link to="/">Regresar a la lista de contactos</Link>
        <br/>
        <button type="button" onClick={()=>{
            actions.addContact(newContact)
        }}>Agregar Contacto a la Agenda</button>
    </div>)
}
export default AddContact;