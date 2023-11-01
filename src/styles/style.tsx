import {css} from '@emotion/css'

export const mainComponent = css`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
  z-index: 2;
  display: flex;
  flex-direction: column;
  position: relative;
  & > input {
    height: 38px;
    width: calc(100vw - 32px);
    padding: 0 8px;
    font-size: 16px;
    border: 0 none;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.1);
    &:focus {
      outline: none;
    }
  }
`

export const searchList = css`
  width: calc(100vw - 32px);
  margin: 46px 0 0 0;
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