const commentHBS = document.getElementById('comment')
console.log(commentHBS);

if(commentHBS){
  commentHBS.addEventListener('submit', async (event) => {
    event.preventDefault()
    const { comment1 } = event.target
    console.log(comment1);
  const response = await fetch(`/comment`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({comment1: comment1.value})
    })  
    const data= await response.json();
    console.log(data)
  })
}
