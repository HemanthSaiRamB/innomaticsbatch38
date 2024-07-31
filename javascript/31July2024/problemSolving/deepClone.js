//problem solving
let oldData = {
    name:'Hemanth',
    age:80,
    phnNum:[1234567891,9090909090],
    gender:true,
    address:{
      pincode:530023,
      landamark:['Kapra','ECIL']
    },
    occupation:'Software Engineer'
  }
  
  let newData = {
    name:'Hemanth sai ram',
    age:81,
    phnNum:[1234567891,6767676767],
    gender:true,
    address:{
      pincode:530023,
      landamark:['Kapra','ECIL','Tarnaka']
    },
    email:'hemanth@gmail.com'
  }
  function mergeObjects(oldObject,newObject){
    let result={...oldObject}
    Object.keys(newObject).forEach((itrtr)=>{
      if(oldObject[itrtr]){
        if(typeof newObject[itrtr]==="string"|| 
        typeof newObject[itrtr]==="number"|| 
        typeof newObject[itrtr]==="boolean"){
          if(newObject[itrtr]!==oldObject[itrtr]){
            result[itrtr]=newObject[itrtr]
          }
        }
        else{
          if(Array.isArray(newObject[itrtr])){
            result[itrtr]=[...new Set([...newObject[itrtr],...oldObject[itrtr]])]
          }
          else{
            result[itrtr]=mergeObjects(oldObject[itrtr],newObject[itrtr])
          }
        }
      }
      else{
        result[itrtr]=newObject[itrtr]
      }
    })
    return result
  }
  console.log(mergeObjects(oldData,newData))