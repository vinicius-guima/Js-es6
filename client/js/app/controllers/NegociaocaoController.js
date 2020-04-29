class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //para ficar menos verboso
        this._inputData = $('#data');                  // se asemelha a sintaxe do jquery 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();



    }

    adiciona(event) {

        event.preventDefault();

        let negocicao = new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );

        this._listaNegociacoes.adiciona(negocicao);
        this._limpaFormulario();

        console.log(this._listaNegociacoes.negociacoes);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade = 0;
        this._inputValor = 0.0;

        this._inputData.focus();
    }
}