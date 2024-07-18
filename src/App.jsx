import React from "react"
import {Routes,Route,BrowserRouter,Link} from "react-router-dom"
import {Container,Navbar,Nav} from "react-bootstrap"
import ListarProdutos from "./Pages/ListarProdutos.jsx"
import {CadastrarProdutos} from "./Pages/CadastrarProdutos.jsx"
import EditarProdutos from "./Pages/EditarProdutos.jsx"

function App() {

  return (
    <>
     <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Crud</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse aria-controls="basic-navbar-nav" >
          <Nav>
            <Nav.Link className="mr-auto">Listar Produtos</Nav.Link>
            <Nav.Link to="cadastrar" className="mr-auto">Cadastrar  Produtos</Nav.Link>
            
          </Nav>
        </Navbar.Collapse >
      </Navbar>

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListarProdutos/>}> </Route>
        <Route path="/cadastrar" element={<CadastrarProdutos/>}> </Route>
        <Route path="/editar/:id" element={<EditarProdutos/>}> </Route>
      </Routes>
      </BrowserRouter>
      
     </Container>
    </>
  )
}

export default App
