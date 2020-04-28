class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //para ficar menos verboso
        this._inputData = $('#data');                  // se asemelha a sintaxe do jquery 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();
        
        let helper = new DataHelper();
        

        let negocicao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
        console.log(negocicao);
        console.log(helper.dataParaTexto(negocicao.data));
        
        

    }
}