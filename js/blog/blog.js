const getPostData = async () => {
  // const getParams = new URLSearchParams(location.search);
  // const page = getParams.get('page');

  const response = await fetch(`https://gorest.co.in/public-api/posts/`);
  const data = await response.json();
  console.log(data);
  return data;
};

const renderPosts = async () => {
  const data = await getPostData();
  const blogWrapper = document.querySelector('.blog__wrapper');

  const articles = data.data.map(item => {
    const article = document.createElement('article');
    article.classList.add('card');

    article.insertAdjacentHTML('beforeend', `
      <div class="card__img">
        <img src="../img/blog/1.png" alt="shoes">
      </div>
      <div class="card__info">
        <h3 class="card__title">
          <a href="article.html?id=${item.id}&user_id=${item.user_id}"
            class="card__link" target="_blank">
            ${item.title}
          </a>
        </h3>
        <div class="card__when when">
          <span class="when__day">22 октября 2021,</span>
          <span class="when__time">12:45</span>
        </div>
        <div class="card__social social">
          <div class="social__views">
            <img src="../img/icons/icons_eye.png" alt="">
            <span>1.2k</span>
          </div>
          <div class="social__comments">
            <img src="../img/icons/chat.png" alt="">
            <span>0</span>
          </div>
        </div>
      </div>
    `);

    return article;
  });

  blogWrapper.append(...articles);
};

const renderArticlePage = async () => {
  const pageParams = new URLSearchParams(location.search);
  const articleId = pageParams.get('id');
  const articleUserId = pageParams.get('user_id');

  const responseId = await fetch(`https://gorest.co.in/public-api/posts/${articleId}`);
  const resultId = await responseId.json();
  const post = resultId.data;

  const responseUser = await fetch(`https://gorest.co.in/public-api/users/${articleUserId}`);
  const resultUser = await responseUser.json();
  const user = resultUser.data;
  console.log(user);
  const articleWrapper = document.querySelector('.article__wrapper');

  articleWrapper.insertAdjacentHTML('afterbegin', `
    <div class="article__info">
      <h2 class="article__title">${post.title}</h2>
      <div class="article__text">
        <p class="article__copy">
          ${post.body}
        </p>
      </div>
      <div class="article__footer">
        <div class="article__back">
          <img src="../img/icons/keyboard_backspace.svg" alt="#">
          <a href="blog.html">К списку статей</a>
        </div>
        <div class="article__author author">
          <h3 class="author__title">${user.name ? user.name : 'Guest'}</h3> 
          <div class="card__data data">
            <span class="data__day">22 октября,</span>
            <span class="data__time">12:45</span>
          </div>
          <div class="card__social social">
            <div class="social__views">
              <img src="../img/icons/icons_eye.png" alt="">
              <span>1.2k</span>
            </div>
            <div class="social__comments">
              <img src="../img/icons/chat.png" alt="">
              <span>0</span>
            </div>
          </div>
        </div>
      </div>      
    </div>
  `);
};

const createPag = async () => {
  const pagination = await getPostData();

  const blogPagination = document.querySelector('.blog__pagination');

  for (let i = 1; i < pagination.meta.pagination.pages; i += 1) {
    blogPagination.innerHTML += `
      <a href="blog.html?page=${i}" class="pagiantion__link">${i}</a>
    `;
  }
};

renderPosts();
renderArticlePage();
createPag();
