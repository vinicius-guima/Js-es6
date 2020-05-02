class ProxyFactory {


    static create(obj, props, act) {

        return new Proxy(new ListaNegociacoes(), {

            get: function (target, prop, receiver) {

                if (props.includes(prop) && typeof (target[prop]) == typeof (Function)) {
                    return function () {
                        console.log(`método '${prop}' interceptado`);
                        Reflect.apply(target[prop], target, arguments);
                        return act(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });
    }
}