import {css} from '@emotion/css'

export const mainComponent = css`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const heading = css`
  font-size: 28px;
  font-weight: bold;
`

export const loadingScreen = css`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const searchBar = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > select {
    height: 28px;
    width: 128px;
    padding: 0 8px;
    font-size: 16px;
    border: 0 none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    appearance: none;
    -webkit-appearance: none;
    &:focus {
      outline: none;
    }
  }
  & > input {
    height: 28px;
    width: calc(92vw - 128px - 96px);
    padding: 0 8px;
    font-size: 16px;
    border: 0 none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    &:focus {
      outline: none;
    }
  }
  & > button {
    height: 28px;
    width: 96px;
    padding: 0 8px;
    font-size: 16px;
    border: 0 none;
    background-color: #FFFFFF;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
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
    & > div:first-child {
      font-weight: bold;
      margin: 0 4px 0 0;
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