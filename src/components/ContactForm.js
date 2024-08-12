import React,{useState,useEffect} from 'react';

const ContactForm=({addContact,currentContact,updateContact})=>{
    const [contact,setContact]=useState({name:'',email:'',phone:''});

    useEffect(()=>{
        if(currentContact){
            setContact(currentContact)
        }else{
            setContact({name:'',email:'',phone:''})
        }
    },[currentContact]);

    const handleChange = (e) =>{
        const {name,value}=e.target;
        setContact({...contact,[name]:value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentContact){
            updateContact(contact);
        }else{
            addContact(contact);
        }
        setContact({name:'',email:'',phone:''});
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={contact.name} placeholder='Name' onChange={handleChange} required/>
            <input type='email' name='email' value={contact.email} placeholder='Email' onChange={handleChange} required/>
            <input type='text' name='phone' value={contact.phone} placeholder='Phone' onChange={handleChange} required/>
            <button type='submit'>{currentContact?"Update Contact":"Add Contact"}</button>
        </form>
    );
};

export default ContactForm;
