import express from "express";
import cors from "cors";
import mysql from "mysql";

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "",
    database: "fseletro"
})

server.get("/produto", (req, res) => {
    connection.query("SELECT * FROM produto", (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
});

server.post('/pedidos', (req, res) => {
    const { nome_cliente, endereco_cliente, email_cliente, nome_produto, valorunitario, quantidade, valortotal } = req.body
    connection.query(`INSERT INTO pedidos (nome_cliente, endereco_cliente, email_cliente, nome_produto, valorunitario, quantidade, valortotal)
                                   VALUES ('${nome_cliente}', '${endereco_cliente}', '${email_cliente}', '${nome_produto}', ${valorunitario}, ${quantidade}, ${valortotal})`, (error, result) => {
        if(error) {
            res.json({
                message: "Erro ao registrar pedido!"
            })
        } else {
            res.status(201).json({
                message: "Pedido efetuado com sucesso!"
            })
        }
    })
})

server.get('/comentarios', (req, res) => {
    connection.query(`SELECT comentarios.*, produto.descricao FROM comentarios INNER JOIN produto ON comentarios.idproduto = produto.idproduto`, (error, result) => {
        if (error) {
            res.send(error)
        } else {
            res.send(result)
        }
    })
})


server.listen(3333)