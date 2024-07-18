import React,{useEffect,useState} from "react"
import { deleteData, getData } from "../services/services"
import { Link } from "react-router-dom"
import { Table,Button } from "react-bootstrap"

function ListarProdutos() {
    const [produtos,setProdutos] = useState([])

    const fetchProdutos = async () => {
        const result = await getData()
        setProdutos(result.data)
    }
    useEffect(() => {
        fetchProdutos()
    },[])

   const deleteProdutos = async (id) =>{
    await deleteData (id)
    fetchProdutos()
   }

   

  return (
    <>
        <h1>Tabela De Produtos</h1>
        <Table striped bordered hover className="mt-4" >
        <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Cor</th>
                <th scope="col">Tamanho</th>
                <th scope="col">Categoria</th>
                <th scope="col">Preco</th>
                <th scope="col">Estoque</th>
                <th scope="col">Serial</th>
                <th scope="col">Promocao</th>
                <th>Ações</th>
                </tr>
        </thead>
        <tbody>
            {produtos.map((produtos,index)=> (
                <tr key={produtos.id}>
                    <td>{index+1}</td>
                    <td>{produtos.cor}</td>
                    <td>{produtos.tamanho}</td>
                    <td>{produtos.categorias_id}</td>
                    <td>{produtos.preco}</td>
                    <td>{produtos.estoque}</td>
                    <td>{produtos.num_serial}</td>
                    <td>{produtos.promocao_id}</td>
                    <td>
                        <Link to={`/editar/${produtos.id}`}> 
                            <Button variant="primary">Editar</Button>
                        </Link>
                        <Button variant="danger" onClick={() => deleteProdutos  (produtos.id)}
                        >Deletar</Button>
                    </td>
                </tr>
            ))}
        </tbody>
        </Table>
    </>
  )
}

export default ListarProdutos
