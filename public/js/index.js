const commentHBS = document.getElementById('teaPage')
const commentsDiv = document.getElementById('commentsDiv')
console.log(commentHBS);

//ДОБАВЛЕНИЕ КОММЕНТОВ
// if(commentHBS){
  commentHBS.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { comment1, action } = event.target;
    console.log(comment1);
  const response = await fetch(action, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment: comment1.value})
    })  
    const data= await response.text();
    const newDiv = document.createElement('div');
    newDiv.innerHTML = data;
    commentsDiv.append(newDiv);
    console.log(data)
    event.target.reset(); 
  })
// }
