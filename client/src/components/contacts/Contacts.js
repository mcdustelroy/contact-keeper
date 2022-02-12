import React, { Fragment, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext'
import ContactItem from './ContactItem'

const Contacts = () => {
    const contactContext = useContext(ContactContext)

    console.log(contactContext)
    // const { contacts } = contactContext;

    return (
        <Fragment>
            hi
            {/* {contacts.map(contact => (
                <h3>
                    {contact.name}
                </h3>
            ))}    */}
        </Fragment>
    )
}

export default Contacts
