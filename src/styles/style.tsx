import {css} from '@emotion/css'

export const searchSection = css`
  z-index: 2;
  width: 100vw;
  padding: 8px 0;
  background-color: #3478F6;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`

export const listSection = css`
  width: calc(100vw - 16px);
  padding: 8px;
`

export const addContact = css`
  height: 48px;
  width: 48px;
  padding: 8px;
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #3478F6;
  cursor: pointer;
  > img {
    width: 42px;
  }
`

export const heading = css`
  margin: 16px 0 0 0;
  font-size: 28px;
  font-weight: bold;
`

export const emptyState = css`
  height: 120px;
  width: calc(100vw - 16px);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const searchBar = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    & > input {
      width: calc(100vw - 96px);
    }
    & > img {
      height: 20px;
      &:first-child {
        margin: 0 12px 0 8px;
      }
      &:last-child {
        margin: 0 8px 0 12px;
        cursor: pointer;
      }
    }
  }
`

export const searchList = css`
  width: calc(100vw - 32px);
  margin: 60px 0 0 0;
  padding: 8px;
  position: absolute;
  top: 0;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  > div {
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    > div:first-child {
      display: flex;
      flex-direction: row;
      > div:first-child {
        margin: 0 4px 0 0;
        font-weight: bold;
      }
    }
    > div:last-child {
      display: flex;
      flex-direction: row;
      align-items: center;
      > div {
        margin: 0 8px 0 0
      }
      > img {
        height: 12px
      }
    }
  }
    
`

export const contactCard = css`
  width: calc(100vw - 24px);
  padding: 8px 4px;
  border: solid #000000;
  border-width: 0.5px 0 0 0;
  & > div:first-child {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: row;
    }
    & > img {
      height: 12px
    }
  }
  & > div:last-child {
    margin: 4px 0 0 8px;
    display: flex;
    flex-direction: column;
    & > div:not(:last-child) {
      margin: 0 8px 0 0;
    }
  }
`

export const searchInput = css`
  height: 38px;
  padding: 0 8px;
  font-size: 16px;
  border: 0 none;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  &:focus {
    outline: none;
    color: #FFFFFF;
  }
  &:not(:focus) {
    color: #D9E4FC;
  }
  &::placeholder {
    color: #D9E4FC;
  }
`

export const userInput = css`
  height: 38px;
  padding: 0 8px;
  font-size: 16px;
  border: 0 none;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  &:focus {
    outline: 1px solid #3478F6;
    color: #3478F6;
  }
  &:not(:focus) {
    color: #000000;
  }
  &::placeholder {
    color: #888888;
  }
  &:disabled {
    color: #D9E4FC;
  }
`

export const profileCardInput = css`
  height: 38px;
  padding: 0 8px;
  font-size: 16px;
  border: 0 none;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  &:focus {
    outline: 1px solid #3478F6;
    color: #3478F6;
  }
  &:not(:focus) {
    color: #000000;
  }
  &::placeholder {
    color: #888888;
  }
  &:disabled {
    color: #D9E4FC;
  }
`

export const profileCardShow = css`
  height: 38px;
  padding: 0 8px;
  font-size: 16px;
  border: 0 none;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  &:disabled {
    color: #000000;
  }
`

export const actionButton = css`
  height: 38px;
  font-size: 16px;
  border: 0 none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const activeActionButton = css`
  background-color: #3478F6;
  color: #FFFFFF;
`

export const inactiveActionButton = css`
  background-color: #D9E4FC;
  border: 1px solid #3478F6;
  color: #3478F6;
`

export const modalBottom = css`
  z-index: 2;
  width: calc(100vw - 64px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  border-radius: 16px;
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
`

export const addContactForm = css`
  & input {
    width: calc(100vw - 96px);
    margin: 16px 0 0 0;
  }
  & > div:first-child {
    margin: 0 0 8px 0;
    font-size: 28px;
    font-weight: bold;
  }
  & > div:nth-child(4) {
    width: calc(100vw - 80px);
    margin: 16px 0;
    & > input:not(:first-child) {
      margin: 0;
      border-radius: 0;
    }
    & > input:first-child {
      margin: 0;
      border-radius: 8px 8px 0 0;
    }
    & > div {
      background-color: #FFFFFF;
      border-radius: 0;
      border-radius: 0 0 8px 8px;
    }
  }
  & > div:last-child {
    width: calc(100vw - 80px);
    margin: 12px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div {
      width: calc(50vw - 48px);
      &:first-child {
        background-color: #3478F6;
        color: #FFFFFF
      }
      &:last-child {
        background-color: #FFFFFF;
      }
    }
  }
`

export const contactName = css`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  & > div:first-child {
    font-weight: bold;
    margin: 0 4px 0 0;
  }
`

export const profileCard = css`
  z-index: 2;
  > : first-child {
    width: calc(100vw - 80px);
    margin: 0 0 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > : first-child {
      display: flex;
      flex-direction: row;
      font-size: 20px;
      > :first-child {
        margin: 0 4px 0 0;
      }
    }
    >:last-child {
      cursor: pointer;
    }
  }
  > : nth-child(2) {
    width: calc(100vw - 80px);
    display: flex;
    justify-content: space-between;
  }
  > : nth-child(3) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > div {
      margin: 16px 0 4px 0;
    }
    & > input {
      margin: 0;
    }
    & > div:last-child {
      border: 0 none;
      border-radius: 8px;
      margin: 0 0 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > input:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }
      & > input {
        border-radius: 0;
      }
      & > input:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      }
    }
    input {
      width: calc(100vw - 96px);
    }
  }
`

export const ticker = css`
  width: calc(100vw - 32px);
  height: 38px;
  position: fixed;
  top: 64px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: #FFFFFF;
  > img {
    margin: 0 8px 0 0;
  }
`

export const deleteConfirmation = css`
  width: calc(100vw - 80px);
  display: flex;
  justify-content: space-between;
  & > div {
    height: 60px;
    width: calc(50vw - 48px);
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      height: 20px;
      margin: 0 0 4px 0;
    }
    & > div {
      font-size: 12px;
    }
    &:last-child {
      background-color: #D9E4FC;
      border: 1px solid #3478F6;
      color: #3478F6;
    }
    &:first-child {
      background-color: #F8DCD9;
      border: 1px solid #EB5545;
      color: #EB5545;
    }
  }
`

export const editConfirmation = css`
  width: calc(100vw - 80px);
  display: flex;
  justify-content: space-between;
  & > div {
    height: 60px;
    width: calc(50vw - 48px);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #D9E4FC;
    border: 1px solid #3478F6;
    color: #3478F6;
    & > img {
      height: 20px;
      margin: 0 0 4px 0;
    }
    & > div {
      font-size: 12px;
    }
  }
`

export const mainInteraction = css`
  & > div {
    height: 60px;
    width: calc(30vw - 21px);
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
      height: 20px;
      margin: 0 0 4px 0;
    }
    & > div {
      font-size: 12px;
    }
    &:nth-child(2) {
      background-color: #D9E4FC;
      border: 1px solid #3478F6;
      color: #3478F6;
    }
    &:last-child {
      background-color: #F8DCD9;
      border: 1px solid #EB5545;
      color: #EB5545;
    }
  }
`

export const modalBackground = css`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
`

export const successTicker = css`
  background-color: #3478F6;
`

export const errorTicker = css`
  background-color: #E55343;
`

export const pagination = css`
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  > button {
    margin: 0 4px;
    padding: 0 8px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(24px);
    > div {
      min-width: 20px;
      color: #000000;
    }
    > img {
      width: 20px;
      height: 16px;
    }
  }
`

export const currentPage = css`
  font-weight: bold;
  background-color: #D9E4FC !important;
`

export const contactList = css`
  display:flex;
  flex-direction: column;
  align-items: center;
`