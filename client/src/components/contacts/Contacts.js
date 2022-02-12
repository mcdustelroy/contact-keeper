import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

function Contacts() {
    const contactContext = useContext(ContactContext)

    const { contacts } = contactContext;

    return (
        <Fragment>
            {contacts.map(contact => (
                <h3>
                    {contact.name}
                </h3>
            ))}   
        </Fragment>
    )
}

export default Contacts
