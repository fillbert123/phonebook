import {useQuery} from '@apollo/client'
import {GET_CONTACT_LIST} from '../graphql/queries'

interface Contact {
  id: Number,
  first_name: String,
  last_name: String
}

function ContactList() {
  const {error, loading, data} = useQuery(GET_CONTACT_LIST);
  loading ? console.log(loading) : console.log(data.contact)

  return (
    <>
      {
        !loading && data.contact.map((contact: Contact) => (
          <p key={contact.id.toString()}>{contact.first_name}</p>
        ))
      }
    </>
  )
}

export default ContactList;