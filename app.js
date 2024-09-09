function pesquisar() {
 // Obtém a seção HTML onde os resultados serão exibidos
    let section= document.getElementById ("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

     // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML= "<p>Pesquisa não encontrada</p>"
        return
    }

 campoPesquisa= campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados= "";
    let titulo= "";
    let descrição= "";
    let tags= "";

     // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo= dado.titulo.toLowerCase()
        descrição= dado.descrição.toLowerCase()
        tags= dado.tags.toLowerCase()

         // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa)|| descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                ${dado.titulo}
                </h2>
                <p class="descricao-meta">${dado.descrição}</p>
            <a href=${dado.link} target="_blank" >30 especies de plantas de sol</a>
            </div> 
            `;
        }
    
   
    }

    if (!resultados) {
     resultados= "<p>Nada foi encontrado</p>"
    }
    
        // Atribui os resultados gerados à seção HTML
    section.innerHTML= resultados

}



