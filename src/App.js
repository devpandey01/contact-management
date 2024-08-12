import React from "react";
import { useState } from "react";
import ContactDetails from "./components/Contactdetails";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import './App.css'

const App=()=>{
  const[contacts,setContacts]=useState([])
  const[currentContact,setCurrentContact]=useState(null)
  const[selectedContact,setSelectedContact]=useState(null)

  const addContact=(contact)=>{
        setContacts([...contacts,{...contact,id:Date.now()}]);
  }

  const updateContact=(updatedContact)=>{
    setContacts(
      contacts.map((contact=>
        contact.id===updatedContact.id?updatedContact:contact
      ))
    );
    setCurrentContact(null);
  }

  const deleteContact=(id)=>{
    setContacts(contacts.filter((contact)=>contact.id!==id));
  };

  const editContact=(contact)=>{
    setCurrentContact(contact);
  }

  const viewDetails=(contact)=>{
    setSelectedContact(contact);
  }

  return(
    <div className="App">
      <ContactForm addContact={addContact} currentContact={currentContact} updateContact={updateContact}/>
      <ContactList contacts={contacts} editContact={editContact} deleteContact={deleteContact} viewDetails={viewDetails}/>
      <ContactDetails contact={selectedContact}/>
    </div>
  );
};

export default App;


