"use strict";
class Dict {
    constructor() {
        this.words = {};
    }
    add(word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }
    update(word) {
        if (this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }
    del(term) {
        if (this.words[term] === undefined) {
            return delete this.words[term];
        }
    }
    def(term) {
        return this.words[term];
    }
}
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    }
}
const kimchi = new Word("kimchi", "supper cool food");
const dict = new Dict();
dict.add(kimchi);
console.log("add : ", dict.def("kimchi"));
dict.update(new Word("kimchi", "cool"));
console.log("update : ", dict.def("kimchi"));
dict.del(kimchi.term);
console.log("del : ", dict);
