class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
    this.alert = document.querySelector("#alert");
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">Ver Perfil</a>
          </div>
          <div class="col-md-9 mx-auto">
            <span class="badge badge-primary">Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Seguidores: ${user.followers}</span>
            <span class="badge badge-info">Seguidos: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Compañía: ${user.company}</li>
              <li class="list-group-item">Website-Blog: ${user.blog}</li>
              <li class="list-group-item">Ubicación: ${user.location}</li>
              <li class="list-group-item">Usuario desde: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3 display-4a">Últimas repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    let output = "";

    repos.forEach(repo => {
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Estrellas: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Visiones: ${repo.watchers_count}</span>
              <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // Mostras los repos
    document.querySelector("#repos").innerHTML = output;
  }

  showAlert(msg, className) {
    // Limpiamos alguna alerta antigua
    this.clearAlert();

    const alert = document.createElement("div");
    alert.className = className;
    alert.appendChild(document.createTextNode(msg));

    const parent = document.querySelector(".searchContainer");
    const son = document.querySelector(".search");
    // Insertamos la alerta entre parent y son
    parent.insertBefore(alert, son);

    // Desaparecemos la alerta
    setTimeout(this.clearAlert, 2000);

  }

  clearProfile() {
    this.profile.innerHTML = "";
  }

  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if(currentAlert){
      currentAlert.remove();
    }
  }

}