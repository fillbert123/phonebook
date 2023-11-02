import {css} from '@emotion/css'

export const searchSection = css`
  width: 100vw;
  padding: 8px 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
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
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  > img {
    width: 42px;
  }
`

export const heading = css`
  margin: 16px 0 0 0;
  font-size: 28px;
  font-weight: bold;
`

export const loadingScreen = css`
  width: 100vw;
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
      width: calc(100vw - 92px);
    }
    & > img {
      height: 20px;
      &:first-child {
        margin: 0 8px 0 0;
      }
      &:last-child {
        margin: 0 0 0 8px;
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
  padding: 8px 4px;
  border: solid #000000;
  border-width: 0.5px 0;
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

export const userInput = css`
  height: 38px;
  padding: 0 8px;
  font-size: 16px;
  border: 0 none;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  &:focus {
    outline: none;
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

export const modalBottom = css`
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
  >:first-child {
    width: calc(100vw - 80px);
    margin: 0 0 12px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >:last-child {
      cursor: pointer;
    }
  }
  >:nth-child(2) {
    width: calc(100vw - 80px);
    display: flex;
    justify-content: space-between;
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
      &:not(:last-child) {
        background-color: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(24px);
        color: #3478F6;
      }
      &:last-child {
        background-color: rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(24px);
        color: #EB5545;
      }
    }
  }
`

export const ticker = css`
  width: calc(100vw - 32px);
  height: 38px;
  position: fixed;
  bottom: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(24px);
  border-radius: 8px;
`