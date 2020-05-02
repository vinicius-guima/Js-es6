class ProxyFactory {


    static create(obj, props, act) {

        return new Proxy(obj, {

            get: function (target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function () {
                        console.log(`método '${prop}' interceptado`);
                        Reflect.apply(target[prop], target, arguments);
                        return act(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            },
            set (target, prop, value, receiver) {
                if(props.includes(prop)){
                    target[prop] = value;
                    act(target)
                }
                return Reflect.set(target, prop, value, receiver);
            }
        });
    }

    static _ehFuncao(func){
       return typeof (func) == typeof (Function);
    }
}