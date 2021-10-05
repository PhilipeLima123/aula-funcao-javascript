function nomes (){
    let nomes = "Diego Ademir Diego Bruna Diego  Adriana  Ademir Magda Adriana Bruna Adriana Delvair Magda Ademir Bruna Bruna Roselene Delvair Delvair Lawiny Ademir Bruna Lawiny Nicolas Lawiny Roselene Alice Nicolas Nicolas Ademir Bruna Alice Alice Júlia Júlia Ademir"


var repe = (nomes.match(/Bruna/g) || []).length;

console.log(repe)
}

nomes()