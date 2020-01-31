const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  // array.some will return just one that wr are looking
  const isAdult = people.some(person => ((new Date()).getFullYear())- person.year >= 19);
  //we are returning one whose age is 19
  console.log({isAdult});

  // array.every will return everything that matches the condition
  const alladult = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
  //we are returing all whose age is 19
  console.log({alladult});

  // array.find is similar to filter but instead returns just the one that we are looking
  const comment = comments.find(comment => comment.id === 823423);
  //we are finding the comment whose value is 823423
  console.log(comment);

  //array.findIndex is used to find with the index value
  const index = comments.findIndex(comment => comment.id === 823423);
  console.log(index);
  //we are deleting the comment with ID 823423 
  // for deleting we are using slice(index,1);
  const newComments = [
      ...comments.slice(0,index),
      ...comments.slice(index + 1)
  ];