const addTeaForm = document.getElementById('addTeaForm');
const cardDiv = document.getElementById('cardDiv');
const teaCard = document.getElementById('teaCard');

//ДОБАВЛЕНИЕ КАРТОЧКИ ЧАЯ
addTeaForm?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    action, method, tittle, place, picture, description,
  } = event.target;
  console.log(tittle, place, picture, description);

  const response = await fetch(action, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tittle: tittle.value,
      place: place.value,
      picture: picture.value,
      description: description.value,
    }),
  });
  const data = await response.text();
  const newDiv = document.createElement('div');
  newDiv.innerHTML = data;
  cardDiv.append(newDiv);
  console.log(data);
});

cardDiv?.addEventListener('click', async (event) => {
  event.preventDefault();


  //УДАЛЕНИЕ КАРТОЧКИ ЧАЯ
  if (event.target.name === 'delete') {
    const id = event.target.getAttribute('id');
    const response = await fetch(`/admin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    // const deleteDiv = document.getElementById(`divo/${id}`);
    // console.log('НУЖНЫЙ ДИВ', deleteDiv);
    document.getElementById(`divo/${id}`).remove();
    const data = await response.json();
    console.log(data);
  }
});
