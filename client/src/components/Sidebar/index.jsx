import React from "react";
import "./style.css";
import Avatar from "@mui/material/Avatar";
import { Link } from 'react-router-dom'
import Api from "../../utils/Api";
import { toast, ToastContainer } from "react-toastify";

function Sidebar({ user }) {

  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [endpoint, setEndpoint] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Submitted");
    const intToast = toast.loading("Creating")
    await Api.post("/endpoints/", {
      name,
      description,
      endpoint,
    }).then(async (res) => {
      if (res.status === 201) {
        setName("");
        setDescription("");
        setEndpoint("");
        toast.dismiss(intToast);
        await toast.success("Successfully Created", {
          closeButton: false,
        });
      }
    }).catch((err) => {
      toast.dismiss(intToast);
      toast.error("Creation Failed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
    });
  };

  return (
    <div className="">
      <ToastContainer />
      <div className="sidebar__container">
      <div className="add_api">
      { user.isAdmin && <div>
        <input type="text" placeholder="API Name" onChange={e=>setName(e.target.value) } />
        <textarea placeholder="API Description"
        onChange={
          e=>setDescription(e.target.value)
        } />
        <input type="text" placeholder="API Endpoint"
        onChange={
          e=>setEndpoint(e.target.value)
        } />
        <button onClick={handleSubmit}>Add API</button>
      </div> }
      </div>
      </div>
    </div>
  );
}

export default Sidebar;
