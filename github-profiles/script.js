const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main")
const form = document.getElementById("form")
const search = document.getElementById("search")
getUser("mojombo");

async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);
}
function createUserCard(user) {

    const cardHTML= `
        <div class="card">
            <div class="img-container">
                <img class="avatar" src="${user.avatar_url}" alt ="${user.name}"/>
            </div>
            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.url}</p>

                <ul class="info">
                    <li><strong>followers</strong>${user.followers}</li>
                    <li><strong>followings</strong>${user.followings}</li>
                    <li><strong>public_repos</strong>${user.public_repos}</li>
                </ul>
            </div>
        </div>
    `;
    main.innerHTML = cardHTML;
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;
    if(user) {
        getUser(user);
        search.value ="";
    }
})