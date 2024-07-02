export interface User {
  id: number;
  name: string;
}

export class Database {
  private dataStore: User[] = [];
  addUser(user: User) {
    this.dataStore.push(user);
  }
  getUser(id: number) {
    
    return this.dataStore.find((user) => user.id === id);
  }
}