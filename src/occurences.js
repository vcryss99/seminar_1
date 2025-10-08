function occurences(Text , character) {
    return Text.split(character).length - 1;
}

console.log(occurences("sample text","e"));