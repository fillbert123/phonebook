import { gql } from '@apollo/client'

export const GET_CONTACT_LIST = gql`
  {
    contact{
      created_at
      first_name
      id
      last_name
      phones {
        number
      }
    }
  }
`