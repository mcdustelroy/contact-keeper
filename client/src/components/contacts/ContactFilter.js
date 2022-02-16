import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'


const ContactFilter = () => {
    const { filterContacts, clearFilter, filtered } = useContext(ContactContext)
    const text = useRef('')

    useEffect(() => {
        if(filtered === null) {
            text.current.value = '';
        }
    })

    const onChange = e => {
        if(text.current.value !== '') {
            filterContacts(e.target.value)
        } else {
            clearFilter()
        }
    }

    return (
        <form>
            <input ref={text} onChange={onChange} type='text' placeholder='Filter Contacts...' />
        </form>
    )
}

export default ContactFilter
