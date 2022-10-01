export const hasAnimal = (checkString, name) => {
    const regString = `(${name})+`;
    const reg = new RegExp(regString, 'gi');
    return reg.test(checkString);
}

export const addAnimal = (str, name) => {
    const reg = new RegExp('( )+', 'gi');
    const replacer = ` ${name}`;
    const indexArray = [];

    let matches = [];
    while ((matches = reg.exec(str)) !== null) {
        indexArray.push(matches.index);
    }

    if(indexArray.length > 0) {
        const pos = indexArray[Math.floor(Math.random()*indexArray.length)];
        const animalAddedString = `${str.substring(0, pos)}${replacer}${str.substring(pos, str.length)}`;
        return animalAddedString;
    }

    return str;
}