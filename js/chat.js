const message = (ev) => {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    sendmessage(term);
    if (ev) {
        ev.preventDefault();
    };
};

const sendmessage = (term) => {
  let message = term;
  document.querySelector('body .chats').innerHTML +=
    `<div class="container darker">
      <img src = "https://res.cloudinary.com/teepublic/image/private/s--DfMDF3EU--/t_Preview/b_rgb:ffb81c,c_limit,f_jpg,h_630,q_90,w_630/v1478354686/production/designs/774752_1.jpg" alt="Avatar" class = "right">
      <p>${message}</p>
    </div>`;
  document.querySelector('input ')
};


document.querySelector('#search').onkeyup = (ev) => {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        message();
    }
};
