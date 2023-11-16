// https://api.github.com/users/${userName}
// https://ahadsts9901.github.io/github-devfinder/
async function click1(event) {
  event.preventDefault();
  let input = document.querySelector("#search")
  console.log(input);
  try {
    let responce = await axios.get(`https://api.github.com/users/${input.value}`);
    console.log(responce.data);

    document.querySelector("#print").innerText= 
    `Name:${responce.data.name}
     Bio:${responce.data.bio}
    Followers:${responce.data.followers}
    city:${responce.data.location}
    `
  } catch (error) {
    console.log(error);
  }
}
