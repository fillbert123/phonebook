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
      height: 38px;
      width: calc(100vw - 92px);
      padding: 0 8px;
      font-size: 16px;
      border: 0 none;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(24px);
      &:focus {
        outline: none;
      }
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
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      flex-direction: row;
      & > div:first-child {
        font-weight: bold;
        margin: 0 4px 0 0;
      }
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

export const addContactForm = css`
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
  & > input {
    width: calc(100vw - 96px);
    height: 38px;
    margin: 8px 0;
    padding: 0 8px;
    font-size: 16px;
    border: 0 none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(24px);
    &:focus {
      outline: none;
    }
  }
  & > div:first-child {
    margin: 0 0 16px 0;
    font-size: 28px;
    font-weight: bold;
  }
  & > div:last-child {
    width: calc(100vw - 80px);
    margin: 12px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div {
      width: calc(50vw - 48px);
      height: 38px;
      font-size: 16px;
      border: 0 none;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
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