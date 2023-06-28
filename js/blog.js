const getPostData = async () => {
  const response = await fetch('https://gorest.co.in/public/v1/posts');
  const result = await response.json();

  console.log(result);
};

getPostData();
