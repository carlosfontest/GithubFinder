// Iniciamos el HTTP
const github = new GitHub;
// Iniciamos el UI
const ui = new UI;

// Input de búsqueda
const searchUser = document.querySelector("#searchUser");

// Evento de escribir una tecla
searchUser.addEventListener("keyup", (e) => {
  // Tomar lo que está escrito
  const userText = searchUser.value;

  if(userText !== ""){
    // Hacemos la llamada al HTTP
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === "Not Found") {
          // Mostrar alerta de que no existe el usuario
          ui.showAlert("Usuario no encontrado.", "alert alert-danger");
        } else {
          // Mostrar el perfil
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Limpiar el perfil
    ui.clearProfile();
  }
});