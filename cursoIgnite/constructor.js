function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "andando"
    }
}

const mayk = new Person("mayk")
const joao = new Person("joao")
console.log(mayk.walk())
console.log(joao.walk())