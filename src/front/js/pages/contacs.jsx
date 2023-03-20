import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'

const Contactos = () => {
    const { store, actions } = useContext(Context)
    const [nombre, setNombre] = useState("")
    const [data, setData] = useState([])

    

    useEffect(() => {
        fetch("https://assets.breatheco.de/apis/fake/contact/agenda/agenda_de_sebastian")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error));
        actions.getContact(data)
    }, [store.listaContactos])
return (
    <div className="container">
        <div>
            <br />
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <Link to="/add-contact">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>
            {/* <input type="text" placeholder="nombre nuevo" onChange={(e) => setNombre(e.target.value)} /> */}
            <br />
            <ul className="list-group">
                {store.listaContactos && store.listaContactos.length > 0 ? <>
                    {store.listaContactos.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <div className="row">
                                    <div className="col-2">
                                        <img className="rounded-circle img-fluid" src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg" style={{ width: 200 }}></img>
                                    </div>
                                    <div className="col-9">
                                        <div>
                                            <h3>
                                                {item.full_name}
                                            </h3>
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faLocationDot} className="pe-4" />
                                            {item.address}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faEnvelope} className="pe-4" />
                                            {item.email}
                                        </div>
                                        <div>
                                            <FontAwesomeIcon icon={faPhone} className="pe-4" />
                                            {item.phone}
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div>
                                            <Link to={`/edit-contact/${index}`}>
                                                <button className="btn" button="button">
                                                    <FontAwesomeIcon icon={faPencil} />
                                                </button>
                                            </Link>
                                            <button type="button" className="btn" onClick={() => { actions.deleteContact(item.id) }}>
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </li>)
                    })}
                </> : <>No hay contactos</>}
            </ul>
        </div>
    </div>
)
}
export default Contactos;