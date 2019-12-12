(async()=> {
  const data = await fetch('/api').then(res => res.json())

  const menu = document.querySelector('#menu-list')

  console.table(data)

  for (const [ i, item ] of data.entries()) {
    const a = document.createElement('a')
    a.dataset.port = item.port
    a.classList.add('activatable')
    a.textContent = item.name.replace('_', ' ')

    const li = document.createElement('li')
    li.appendChild(a)
    menu.appendChild(li)

    if (i === 0) activate(a)

    a.addEventListener('click', () => {
      activate(a)
    })
  }
})()

async function activate(a) {
  document.querySelectorAll('.activatable')
    .forEach(el => el.classList.remove('is-active'))
  a.classList.add('is-active')

  document.querySelector('#iframe').src =
    `${location.protocol}//${location.hostname}:${a.dataset.port}`
}