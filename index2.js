const oldAccounts = [
    { userID: 15, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 63, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 97, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 12, title: "Developer Apprentice", accessLevel: "user" },
    { userID: 44, title: "Developer Apprentice", accessLevel: "user" },
  ];

function replace(item) {
    return Object.assign({}, item, {accessLevel: 'name'});
}

function newAccounts(array, func) {
    const newArray=[];
    for(let item of array) {
        newArray.push(func(item))
    }
    return newArray;
};

console.log(newAccounts(oldAccounts, replace));
console.log(oldAccounts);

/////////

const newEngineers = oldAccounts.map(replace);
console.log(newEngineers);