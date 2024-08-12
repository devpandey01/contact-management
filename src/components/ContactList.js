import React from "react";

const ContactList =({contacts,editContact,deleteContact,viewDetails})=>{
    return(
        <ul>
            {contacts.map((contact)=>(
                <li key={contact.id}>
                    <span>{contact.name}</span>
                    <div className="B">
                    <button className="edit" onClick={()=>editContact(contact)}>Edit</button>
                    <button className="delete" onClick={()=>deleteContact(contact.id)}>Delete</button>
                    <button className="details" onClick={()=>viewDetails(contact)}>View Details</button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;