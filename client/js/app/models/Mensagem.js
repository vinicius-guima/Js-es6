class Mensagem{

    constructor(texto= 'valor padrão do argumento'){
        this._texto;
    }


    get texto(){
        return this._texto;
    }

    set texto(texto){
        this._texto = texto; 
    }
}