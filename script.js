console.log("event worked!");

const modal = document.querySelector('.modal');
const modalImg = modal.querySelector('img');
const modalText = modal.querySelector('.modal-text');

document.querySelectorAll('.container li, .container2 li').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const text = item.querySelector('.content');

    modalImg.src = img.src;
    modalText.innerHTML = text.innerHTML;
    modal.classList.add('active');
  });
});

modal.addEventListener('click', () => {
  modal.classList.remove('active');
});
