todos.find(function(element) {
  if(element.completed === false){
    let task = element.title;
    let id = element.userId;
    users.find(function(element){
      if(element.id === id && element.company.bs.includes('web')){
        console.log(`У ${element.name} не выполнена задача: ${task}`);
      }
    }) 
  }
})