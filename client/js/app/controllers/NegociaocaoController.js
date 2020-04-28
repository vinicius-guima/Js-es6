class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //para ficar menos verboso
        this._inputData = $('#data');                  // se asemelha a sintaxe do jquery 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();
        // ... operador spread diz que sera converido num array
        console.log(this._inputData.value); // retorna yyyy-MM--dd
        let data = new Date(
            ...this._inputData.value
                .split('-')
                .map((item, index) => {
                    return item - index % 2;
                })
        );
                F
                
    }
}