class DataBase {
  #users;
  #posts;

  constructor() {
    this.#users = [];
    this.#posts = [];
  }

  get users() {
    return this.#users;
  }

  get posts() {
    return this.#posts;
  }

  addUser(user) {
    this.#users.push(user);
  }

  addPost(post) {
    this.#posts.push(post);
  }
}

const database = new DataBase();
export default database;