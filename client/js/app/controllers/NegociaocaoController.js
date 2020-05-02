class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document); //para ficar menos verboso
        this._inputData = $('#data');                  // se asemelha a sintaxe do jquery 
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

     
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'esvazia', 'adiciona');

        
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($('#mensagemView')),
            'texto');


    }

    adiciona(event) {
        event.preventDefault();
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();
    }
    apaga() {
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 0
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}