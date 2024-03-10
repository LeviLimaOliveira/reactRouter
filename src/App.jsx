import {Link, Outlet} from 'react-router-dom'

import { Navbar } from 'flowbite-react';

function App() {

  return (
    <>
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="../digital.png" className="mr-3 h-6 sm:h-9" alt="digital Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Digital App</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="/">
          Produtos
        </Link>
        <Link to="/insert">
          Inserir
        </Link>
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default App




