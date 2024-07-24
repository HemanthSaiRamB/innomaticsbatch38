//filter - find - findIndex

let students = [
    {
      name:'Hemanth',
      section:'A'
    },
     {
      name:'Parimala',
      section:'B'
    },
     {
      name:'Charan',
      section:'A'
    },
     {
      name:'Rahul',
      section:'B'
    },
     {
      name:'Narendra',
      section:'A'}, 
     {
      name:'Anjireddy',
      section:'C'
    },
     {
      name:'Narsimha',
      section:'B'
    },
     {
      name:'Dattu Bhai',
      section:'D'
    },
     {
      name:'Hemanth',
      section:'Sneha'
    },
     {
      name:'Sindhu',
      section:'C'
    },
    ]
    
  let A_Section_Students = students.filter((student)=>{
    if(student.section==='A')
      return student
  })
  let B_Section_Students = students.filter((student)=>{
    if(student.section==='B')
      return student
  })
  
  let C_Section_Students = students.filter((student)=>{
    if(student.section==='C')
      return student
  })
  let D_Section_Students = students.filter((student)=>{
    if(student.section==='D')
      return student
  })
  let A_and_D_section_Students = students.filter((itrtr)=>{
    if(itrtr.section==='A'||itrtr.section==='D')
    return itrtr
  })
  // console.log(A_Section_Students)
  // console.log(B_Section_Students)
  // console.log(C_Section_Students)
  // console.log(D_Section_Students)
  console.log(A_and_D_section_Students)