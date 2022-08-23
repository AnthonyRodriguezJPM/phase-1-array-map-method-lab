const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];



/*const titleCased = () => {
  return tutorials
  
}*/






function titleCased () {
  const newReturn = tutorials.map(function(item) {
        const splitArray= item.split(' ');
        const newNew=[]
          for(const item2 of splitArray) {
            newNew.push(item2.charAt(0).toUpperCase() + item2.slice(1))
          }
        const final= newNew.join(' ')
        
        return final});
        return newReturn
};
console.log(titleCased());








