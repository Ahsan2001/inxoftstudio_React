import React from 'react'
import { Header, Footer } from '../components'

const Layout = (props) => {
  return (
    <React.Fragment>
        <Header />
            <main>
                {props.children}
            </main>
        <Footer />
    </React.Fragment>
  )
}

export default Layout