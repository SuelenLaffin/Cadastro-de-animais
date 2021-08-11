const express = require('express')
const cors = require('cors')
const app = express()
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.json());
app.use(cors())
var db = new sqlite3.Database('./banco/cadastros.db');
app.get(
    "/teste",
    (req,res)=>{
        return res.status(200).send("Deu certo, confie")
    }
);



app.get( //método para conectar o banco
    "/animais",
    (req,res) =>{
        let sql= "Select * from Animais";
        db.all(
            sql,
            [], //json de lista, uma lista vazia
            (erro,linhas)=>{
                return res.status(200).json(linhas);

            }

        )

    }
);

app.post(
    "/animais",
    (req,res)=> {
        let sql = "insert into Animais (Id,nome,tipo) values(?,?,?)";
        let campos=[
            req.body.nome,
            req.body.tipo
        ];
       
        db.run(
            sql,
            campos,
            (erro)=>{
                if (erro){
                    return res.status(400).send("ERROU "+ erro)
                }
                return res.status(201).send(this.lastId);
            }
        )
           
        
    }
);


    app.delete('/animais/:index',
    (req, res) => {

        db.run(`DELETE FROM Animais WHERE id=?`, req.params.index, function(err) {
            return res.status(200).json({
                "Itens deletados": this.changes
            }); 
          });
          
    });


app.listen(4000,
    ()=>{
        console.log("O servidor subiu na porta 4000")
    }
);
