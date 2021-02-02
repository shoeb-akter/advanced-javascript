const student = [
    {id: 21, name: 'robin sunny'},
    {id: 59, name: 'omar faruk'},
    {id: 18, name: 'kamla voirob'},
    {id: 43, name: 'kopa vai'},
];
const names = student.map(s => s.name);
const ids = student.map(s => s.id);
const bigger = student.filter( s => s.id>40 )
const bigger2 = student.find( s => s.id>40 )

console.log(names,ids);
console.log(bigger);
console.log(bigger2);