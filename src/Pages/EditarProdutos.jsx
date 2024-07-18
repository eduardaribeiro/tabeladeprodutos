import React,{useEffect,useState} from "react"
import {Form,Button} from "react-bootstrap"
import { useNavigate,useParams } from "react-router-dom"
import {getData, updateData} from "../services/services"


function EditarProdutos (){
 const {id} = useParams();
 const [produtos,setProdutos] =useState({

    cor:"",
    tamanho:"",
    preco:0,
    estoque:0,
    num_serial:0,
    promocao_id:0

     
 })

  const navigate = useNavigate()

  useEffect( () =>{
    fetchProdutos()
  },[])

  const fetchProdutos = async ()=> {
    const result = await getData()
    const produtos = result.data.find(produtos=> produtos.id === parseInt(id))
    setProdutos(produtos)
  }

const handleupdate = async () =>{
    await updateData(id,produtos)
    navigate ("/")
}
return (


  <>
        <h1> editar Produto</h1>
        <Form>
            <Form.Group controlId ="FormProduto">
                <Form.Label>
                    cor
                </Form.Label>

                <Form.Control  
                 type="text"
                value={produtos.cor}
                onChange={(e) => setProdutos ({...produtos, cor:e.target.value})}
                
                />

               <Form.Label>
                    tamanho
                </Form.Label>

                <Form.Control  
                 type="text"
                value={produtos.tamanho}
                onChange={(e) => setProdutos ({...produtos, tamanho:e.target.value})}
                
                />

               <Form.Label>
                    categorias_id
                </Form.Label>

                <Form.Control  
                 type="number"
                value={produtos.categorias_id}
                onChange={(e) => setProdutos ({...produtos, categorias_id:parseInt(e.target.value)})}
                
                />
               
               <Form.Label>
                    preco
                </Form.Label>

                <Form.Control  
                 type="number"
                value={produtos.preco}
                onChange={(e) => setProdutos ({...produtos, preco:parseInt(e.target.value)})}
                
                />
                
                <Form.Label>
                    estoque
                </Form.Label>

                <Form.Control  
                 type="number"
                value={produtos.estoque}
                onChange={(e) => setProdutos ({...produtos, estoque:parseInt(e.target.value)})}
                
                />

                <Form.Label>
                    num_serial
                </Form.Label>

                <Form.Control  
                 type="number"
                value={produtos.num_serial}
                onChange={(e) => setProdutos ({...produtos, num_serial:parseInt (e.target.value)})}
                
                />

                <Form.Label>
                    promocao_id
                </Form.Label>

                <Form.Control  
                 type="number"
                value={produtos.promocao_id}
                onChange={(e) => setProdutos ({...produtos, promocao_id:parseInt(e.target.value)})}
                
                />


            </Form.Group>

            <Button className="mt-2" onClick={handleupdate}>editar produtos</Button>

        </Form>
    </>

)

}


export default EditarProdutos