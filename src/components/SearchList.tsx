import React from "react";
import {useQuery} from '@apollo/client'
import {GET_PHONE_LIST} from '../graphql/queries'
import {searchList} from "../styles/style"
import chevron from "../assets/chevron.right.svg"

interface Phone {
  contact: Contact,
  number: number
}

interface Contact {
  last_name: string;
  first_name: string;
  id: number
}

const SearchList: React.FC<{search: string}> = ({search}) => {
  const {loading, data} = useQuery(GET_PHONE_LIST, {
    variables: {
      search: '%' + search + '%'
    }
  });

  return (
    <>
      {
        !loading && search !== '' && 
          <div className={searchList}>
            {
              data.phone.length === 0
              ? <div>
                  No result
                </div>
              : data.phone.map((phone: Phone, index: number) => (
                  index < 4 &&
                  <div key={index}>
                    <div>
                      <div>{phone.contact.first_name}</div>
                      <div>{phone.contact.last_name}</div>
                    </div>
                    <div>
                      <div>{phone.number}</div>
                      <img src={chevron} alt="" />
                    </div>
                  </div>
                ))
            }
          </div>
        }
    </>
  )
}

export default SearchList;