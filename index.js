const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(cat){
    cats.push(cat);
}

function destructivelyPrependCat(cat){
    cats.unshift(cat);
}

function destructivelyRemoveLastCat(cat){
    cats.pop();
}

function destructivelyRemoveFirstCat(cat){
    cats.shift();
}

function appendCat(cat){
    return [...cats, cat];
}

function prependCat(cat){
    return [cat, ...cats];
}

function removeLastCat(){
    return cats.slice(0, -1);
}

function removeFirstCat(){
    return  cats.slice(1);
}
