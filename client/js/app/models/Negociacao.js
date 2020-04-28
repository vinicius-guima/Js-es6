class Negociacao {                           //classe

    constructor(data, quantidade, valor) {   //constutor

        this._data = data;                    //atributos 
        this._quantidade = quantidade;          //(_atr) = convenção de private 
        this._valor = valor;
                                             
    }

    getVolume() { return this.quantidade * this.valor;}

    getData(){ return this._data;}

    getQuantidade(){ return this._quantidade;}

    getValor(){ return this._valor;}
}