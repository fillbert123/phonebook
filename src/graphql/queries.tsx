import { gql } from '@apollo/client'

export const GET_CONTACT_LIST = gql`
  query GetContactList {
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

export const GET_CONTACT_DETAIL = gql`
  query GetContactDetail(
    $id: Int!
  ) {
    contact_by_pk(
      id: $id
    ) {
      last_name
      id
      first_name
      created_at
      phones {
        number
      }
    }
  }
`

// export const GET_PHONE_LIST = gql`
//   query GetPhoneLIst(
//     $where: phone_bool_exp
//   ) {
//     phone(
//       where: $where
//     ) {
//       contact {
//         last_name
//         first_name
//         id
//       }
//     }
//   }
// `

export const GET_PHONE_LIST = gql`
  query GetPhoneLIst(
    $search: String
  ) {
    phone(
      where: {
        contact: {
          _or: [
            {first_name: {_like: $search}},
            {last_name: {_like: $search}},
            {phones: {number: {_like: $search}}}
          ]
        }
      }
    ) {
      contact {
        last_name
        first_name
        id
      }
      number
    }
  }
`