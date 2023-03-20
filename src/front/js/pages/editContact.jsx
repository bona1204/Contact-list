import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const EditContact = () => {
    const { store, actions } = useContext(Context)
    const [data, setData] = useState({})
    useEffect(() => {
    setData({ ...data, img: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg", agenda_slug: "agenda_de_sebastian" }) }, 
    [data.full_name, data.phone, data.email, data.address, data.img, data.agenda_slug])
    return (<div>
        <br />
        <h1 className="text-center">
            Edit contact
        </h1>
        <br />
        <div className="container">

            <br />
            <form>
                <label className="form-label">Full Name</label>
                <input placeholder="Full Name" name="nombre" className="form-control" onChange={(e) => { setData({ ...data, full_name: e.target.value }) }} />
                <label className="form-label">Email</label>
                <input placeholder="Enter email" name="correo" className="form-control" onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                <label className="form-label">Phone</label>
                <input placeholder="Enter phone" name="tlf" className="form-control" onChange={(e) => { setData({ ...data, phone: e.target.value }) }} />
                <label className="form-label">Address</label>
                <input placeholder="Enter address" name="dirección" className="form-control" onChange={(e) => {console.log(data), setData({ ...data, address: e.target.value }) }} />
                <br />
                <button type="button" className="btn btn-primary col-12" onClick={() => {
                    actions.editContact(index, data)
                }}>
                    Save
                </button>
            </form>
            <br />
            <Link to="/">or get back to contacts</Link>
        </div>
    </div>)
}
export default EditContact;