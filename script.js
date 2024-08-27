function getData() {
  const data = fetch('./data.json').then(res => res.json())
  return data
}


async function friendListsElement() {
  const friendLists = document.getElementById("friend_lists");
  const data = await getData() 
  const lists = `
    ${data.map(i => `
      <li>
        <figure class="card" title="${i.nama}">
          <div class="card_image">
            <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
          </div>
          <figcaption class="card_description">
            <span>${i.nama}</span>
            <span>${parseInt(i.nim)}</span>
          </figcaption>
        </figure>
      </li>
    `).join("")}
  `;

  return friendLists.innerHTML = lists
}

friendListsElement()