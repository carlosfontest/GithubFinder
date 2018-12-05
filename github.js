class GitHub {
  constructor() {
    this.client_id = "dc1269451b645089de03";
    this.client_secret = "092378c684281cca43ebf071dac84e86b5b2f5f3";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    // Obtenemos el perfil
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profileData = await profileResponse.json();

    // Obtenemos los repos
    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const reposData = await reposResponse.json();

    return {
      profile: profileData,
      repos: reposData
    }
  }
}