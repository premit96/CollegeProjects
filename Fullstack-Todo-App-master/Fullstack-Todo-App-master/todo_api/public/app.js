/* global $ */
$(document).ready(function(){
  //ajax call to get all todos
  $.getJSON("/api/todos")
  .then(displayTodos)
  .catch(handleError);
  
  
  $('#todoInput').keypress(function(e){
    if(e.which == 13){
      createTodo();
    }
  });
  
  
  $('.list').on('click', 'li', function(){
    updateTodo($(this));
  });
  
  
  $('.list').on('click', 'span', function(e){
    e.stopPropagation();
    removeTodo($(this).parent());
  });
  
});


function displayTodos(todos){
  todos.forEach(function(todo){
    addTodo(todo);
  });
}


function addTodo(todo){
  var newTodo = $('<li class="task">'+todo.name+'<span>X</span></li>');
  //this id will be used to delete
  newTodo.data('id', todo._id);
  //this for the update
  newTodo.data('completed', todo.completed);
  if(todo.completed){
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}


function createTodo(){
  var usrInput = $('#todoInput').val();
  //send request to create new todo
  $.post('/api/todos',{name: usrInput})
  .then(function(newTodo){
    $('#todoInput').val('');
    addTodo(newTodo);
  })
  .catch(handleError);
}


function removeTodo(todo){
  var clickedId = todo.data('id');
  var deleteUrl = '/api/todos/' + clickedId;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
  .then(function(data){
    todo.remove();
  })
  .catch(handleError);
}


function updateTodo(todo){
  var updateUrl = '/api/todos/' + todo.data('id');
  var isDone = !todo.data('completed');
  var updateData = {completed: isDone};
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
  .then(function(updatedTodo){
    todo.toggleClass('done');
    todo.data('completed', isDone);
  })
  .catch(handleError);

}


function handleError(err){
  alert("Something went wrong. Please try again");
  console.log(err);
}