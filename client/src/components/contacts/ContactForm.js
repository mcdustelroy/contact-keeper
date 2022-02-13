import React, { useContext, useState } from 'react'
import ContactContext from '../../context/contact/contactContext'


const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const { contacts } = contactContext;

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
    })
    const { name, email, phone, type } = contact;

    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        })
    }
    // const onChange = ({target}) => {
    //     const {name, value} = target
    //     setContact((prev)=>({
    //         ...prev,
    //         [name]: value,
            
    //     }))
    // }

    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact);


    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add contact</h2>
            <input placeholder='Name' name='name' value={ name } type='text'onChange={onChange}/>
            <input placeholder='Email' name='email' value={email} type='email'onChange={onChange}/>
            <input placeholder='Phone' name='phone' value={phone} type='text'onChange={onChange}/>
            <h5>Contact Type</h5>
            <input  name='type' value='personal' checked={ type === 'personal'} type='radio'/> Personal{' '}
            <input  name='type' value='professional' checked={ type === 'professional'} type='radio'/>Professional

            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary btn-block" />
            </div>
        </form>
    )
}

export default ContactForm
