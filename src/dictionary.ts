type Words = {
    [key:string ]: string
};

class Dict {
    private words:Words;

    constructor() {
        this.words = {};
    }

    add(word:Word) {  // 클래스를 타입처럼 사용할 수 있음
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def;
        }
    }

    update(word:Word) {
        if(this.words[word.term] !== undefined) {
            this.words[word.term] = word.def;
        }
    }

    del(term:string) {
        if(this.words[term] === undefined) {
            return delete this.words[term]
        }
    }

    def(term:string) {
        return this.words[term];
    }
}

class Word {
    constructor(public term: string, public def:string) {}
}

const kimchi = new Word("kimchi", "supper cool food");
const dict = new Dict();

dict.add(kimchi);
console.log("add : ", dict.def("kimchi"))

dict.update(new Word("kimchi", "cool"));
console.log("update : ", dict.def("kimchi"))

dict.del(kimchi.term);
console.log("del : ", dict)