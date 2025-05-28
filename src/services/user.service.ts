type User = {
  id: string;
  name: string;
};

let users: User[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

export const getAllUsers = async () => users;

export async function getUserById(id: string): Promise<User | null> {
  const user = users.find((user) => user.id === id);
  return user ? user : null;  // explicitly return null if not found
}


export const createUser = async (data: Omit<User, 'id'>) => {
  const newUser = { id: Date.now().toString(), ...data };
  users.push(newUser);
  return newUser;
};

export const updateUser = async (id: string, data: Partial<User>) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;
  users[index] = { ...users[index], ...data };
  return users[index];
};

export const deleteUser = async (id: string) => {
  const index = users.findIndex((user) => user.id === id);
  if (index === -1) return null;
  const deleted = users.splice(index, 1)[0];
  return deleted;
};
