const postContainer = document.querySelector('.posts-container');

const getData = async () => {
  const res = await fetch('./data.json');
  const data = await res.json();

  return await data.posts;
};

const UI = async () => {
  const posts = await getData();

  posts.forEach((post) => {
    postContainer.innerHTML += `
    <div class="post">
        <h4>${post.title}</h4>
        <p>
       ${post.body}
        </p>
    </div>
    `;
  });
};

UI();
