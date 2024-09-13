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
        ${i.web ? `
          <a href="${i.web}" target="_blank">
            <figure class="card" title="${i.nama}">
              <div class="card_image">
                <img src="${i.fotoformal}" alt="${i.nama}" width="100%">
              </div>
              <span class="card_arrow_link">
                <span>Visit site</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>
              </span>
              <figcaption class="card_description">
                <span>${i.nama}</span>
                <span>${parseInt(i.nim)}</span>
              </figcaption>
            </figure>
          </a>
        ` : `
          <figure class="card" title="${i.nama}">
            <div class="card_image">
              <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
            </div>
            <figcaption class="card_description">
              <span>${i.nama}</span>
              <span>${parseInt(i.nim)}</span>
            </figcaption>
          </figure>
        `}
      </li>
    `).join("")}
  `;

  return friendLists.innerHTML = lists
}

friendListsElement()