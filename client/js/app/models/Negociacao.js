class Negociacao {                           //classe

    constructor(data, quantidade, valor) {   //constutor

        this._data = new Date(data.getTime());                    //atributos 
        this._quantidade = quantidade;        //(_atr) = convenção de private 
        this._valor = valor;
        Object.freeze(this);                  //não altera o obj depois da criação                       
    }

    //get atributo permite acessar como atributo mas o js usa o metodo get como getVolume(){}
    get volume() { return this.quantidade * this.valor;}

    get data(){ return new Date(this._data.getTime());}

    get quantidade(){ return this._quantidade;}

    get valor(){ return this._valor;}
}