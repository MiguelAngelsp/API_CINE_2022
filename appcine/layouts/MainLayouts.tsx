import React, { FC } from 'react'
import { NavBar } from '../components/commons';

interface Props {
    children: any;
}
export const MainLayouts:FC<Props> = ({children}) => {
  return (
    <>
        <header>
            <NavBar />
        </header>
        <main style={{
            margin: '20px auto',
            maxWidth: '1440px',
            padding: '0px 30px'
        }}>
            { children }
        </main>
        <footer>
            <h2>Footer de la página</h2>
        </footer>
    </>
  )
}