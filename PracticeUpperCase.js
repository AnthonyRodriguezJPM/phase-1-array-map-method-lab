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
  
  /*function returns (item) {
    const nowUpper=[];
    const combine=[];
    const isSplit=item.split('');
    for(let item of isSplit){
      nowUpper.push(item.toUpperCase())
      for(let item2 of nowUpper) {
        combine.push(item2+item.substring(1))
      }}
      return combine
    }
    //return nowUpper;
    
  
  
  function upperCaseEveryWord (array, func) {
    let newStuff=[];
    for(let item of array) {
      newStuff.push(func(item))
    }
    return console.log(newStuff)
  }
  
  
  upperCaseEveryWord(tutorials, returns)
  
  //console.log(tutorials)*/
  
  function magic (item) {
        const splitArray= item.split(' ');
        const newNew=[]
          for(const item2 of splitArray) {
            newNew.push(item2.charAt(0).toUpperCase() + item2.slice(1))
          }
        const final= newNew.join(' ')
        
        return final;
      }
    
  
  
  function returnNewUpper (array, func) {
    const newReturn = [];
    for(const item of array) {
        newReturn.push(func(item))
  }
  return newReturn
  }
  
  console.log(returnNewUpper(tutorials, magic));
  
  //item.toUpperCase().split('').join('')