import React from "react"
import  {createData} from "../services/services"
import {Form,Button} from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import {useState} from "react"


export function CadastrarProdutos() {
    const [newProduto,setNewProduto] = useState({
        cor: "",
        tamanho: "",
        categorias_id:0,
        preco:0,
        estoque:0,
        num_serial:0,
        promocao_id:0
    })

    const navigate = useNavigate()
    
    const CadastroProdutos = async()=>{
        await createData(newProduto)
        navigate("/")
    }

   
  return (
    <>
        <h1> Cadastrar Produto</h1>
        <Form>
            <Form.Group controlId ="FormNewProduto">
                <Form.Label>
                    cor
                </Form.Label>

                <Form.Control  
                 type="text"
                value={newProduto.cor}
                onChange={(e) => setNewProduto ({...newProduto, cor:e.target.value})}
                
                />

               <Form.Label>
                    tamanho
                </Form.Label>

                <Form.Control  
                 type="text"
                value={newProduto.tamanho}
                onChange={(e) => setNewProduto ({...newProduto, tamanho:e.target.value})}
                
                />

               <Form.Label>
                    categorias_id
                </Form.Label>

                <Form.Control  
                 type="number"
                value={newProduto.categorias_id}
                onChange={(e) => setNewProduto ({...newProduto, categorias_id:parseInt(e.target.value)})}
                
                />
               
               <Form.Label>
                    preco
                </Form.Label>

                <Form.Control  
                 type="number"
                value={newProduto.preco}
                onChange={(e) => setNewProduto ({...newProduto, preco:parseInt(e.target.value)})}
                
                />
                
                <Form.Label>
                    estoque
                </Form.Label>

                <Form.Control  
                 type="number"
                value={newProduto.estoque}
                onChange={(e) => setNewProduto ({...newProduto, estoque:parseInt(e.target.value)})}
                
                />

                <Form.Label>
                    num_serial
                </Form.Label>

                <Form.Control  
                 type="number"
                value={newProduto.num_serial}
                onChange={(e) => setNewProduto ({...newProduto, num_serial:parseInt (e.target.value)})}
                
                />

                <Form.Label>
                    promocao_id
                </Form.Label>

                <Form.Control  
                 type="number"
                value={newProduto.promocao_id}
                onChange={(e) => setNewProduto ({...newProduto, promocao_id:parseInt(e.target.value)})}
                
                />


            </Form.Group>

            <Button className="mt-2" onClick={CadastroProdutos}>Adicionar produtos</Button>

        </Form>
    </>
  )
}

