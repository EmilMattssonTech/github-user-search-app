const getData = async () => {
  const EmilMattssonTech = await fetch(
    "https://api.github.com/users/EmilMattssonTech"
  );

  const data = await EmilMattssonTech.json();
  const getInformation = document.getElementById("button");
  const getTwitterProfile = document.getElementById("twitter");
  const getCompany = document.getElementById("company");
  const getWebsite = document.getElementById("website");
  const getPlace = document.getElementById("place");
  const getImage = document.getElementById("profileImage");
  const getUsername = document.getElementById("username");
  const getBio = document.getElementById("bio");
  const getDate = document.getElementById("date");
  const getRepo = document.getElementById("repo");
  const getFollowers = document.getElementById("followers");
  const getFollowing = document.getElementById("following");

  getInformation.addEventListener("click", () => {
    getImage.innerHTML = data.avatar_url;
    getUsername.innerHTML = data.login;
    getBio.innerHTML = `User bio: ${data.bio}`;
    getDate.innerHTML = `Last update: ${data.updated_at}`;
    getRepo.innerHTML = data.repos_url;
    getFollowers.innerHTML = `Followers: ${data.followers}`;
    getFollowing.innerHTML = `Following: ${data.following}`;
    getTwitterProfile.innerHTML = `Titter handle: ${data.twitter_username}`;
    getCompany.innerHTML = `Company: ${data.company}`;
    getPlace.innerHTML = `User location: ${data.location}`;
    getWebsite.innerHTML = `Website ${data.website}`;
  });
};

getData();
