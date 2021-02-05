const student = [ 
     {id: 21, name:'abir khan'},
    {id:4, name:'mark juker'},
    {id:44, name:'abul  baser'},
    {id:74, name:'kutub uddin khan'},
    {id:17, name:'jeo beiden'},
    {id:19, name:'mokol ahammed'}
];

const output = [];
const names = student.map(x => x.name);
const ids = student.map(s => s.id);
const begger = student.filter(s => s.id > 40);
const begger1 = student.find(s => s.id > 40);

console.log(begger1);
  
