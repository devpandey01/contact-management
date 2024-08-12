import React from "react";
const ContactDetails=({contact})=>{
    if(!contact) return <div>Select a contact to View Details</div>

    return(
        <div>
            <h2>Contact Details</h2>
            <p><strong>Name: </strong>{contact.name}</p>
            <p><strong>Email: </strong>{contact.email}</p>
            <p><strong>Phone: </strong>{contact.phone}</p>
        </div>
    );
};

export default ContactDetails;