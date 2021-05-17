const obj = {
    _name: [], 
    set name(value) { 
        obj._name = value.split(", ").map(element => [element, element.length]);
    },
    get name() {
        return obj._name;
    }
}

    obj.name = 'Vrezh, Artavazd';
    console.log(obj.name) 