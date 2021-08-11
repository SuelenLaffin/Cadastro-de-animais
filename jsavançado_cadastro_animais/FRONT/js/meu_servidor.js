$.ajax(
    {
        url: "http://localhost:4000/animais",
        type: "get",
        headers: {
            "Content-type": "application/json",
            "Accept": "appliction/json"
        },
        success: (res) => {
            console.log(res)
            res.forEach(animal => {
                escreveLinha(animal);

            });
        }
    }
);

function escreveLinha(animal) {
    $("<tr>")
        .append(
            $("<td>", { text: animal.Id })
        )
        .append(
            $("<td>", { text: animal.nome })

        )
        .append(
            $("<td>", { text: animal.tipo })
        )
       
        .appendTo("#dados")
}


$("#cadastrar").click(
   ()=>{

    let animal={
        nome: $("#nome").val(),
        tipo: $("#tipo").val()
        
    }
    $.ajax(
        {
            url: "http://localhost:4000/animais",
            type: "post",
            headers: {
                "Content-type": "application/json",
                "Accept": "appliction/json"
            },
            data:JSON.stringify(animal),
            sucess: (res) => {
               window.location="index.html"
               
        }
        
    })
   }


   
);

$("#deletar").click(
    ()=>{
        let animal={
            nome: $("#nome").val(),
            tipo: $("#tipo").val()
            

    }
    $.ajax(
        {
            url: "http://localhost:4000/animais/"+$("#id").val(),
            type: "delete",
            data:JSON.stringify(animal),
            success: (res) => {
            window.location="index.html"
               
        }
        
    });
});




        
    

