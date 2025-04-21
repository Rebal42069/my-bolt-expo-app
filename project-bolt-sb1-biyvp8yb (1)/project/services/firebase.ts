// This is a mock Firebase implementation for the prototype
// In a real app, you would set up actual Firebase configuration

const firebase = {
  auth: () => ({
    signInWithEmailAndPassword: async (email: string, password: string) => {
      // Mock implementation
      if (email && password) {
        return { user: { uid: '123', email } };
      }
      throw new Error('Invalid credentials');
    },
    createUserWithEmailAndPassword: async (email: string, password: string) => {
      // Mock implementation
      if (email && password) {
        return { user: { uid: '123', email } };
      }
      throw new Error('Invalid credentials');
    },
    signOut: async () => {
      // Mock implementation
      return true;
    },
    currentUser: null,
  }),
  firestore: () => ({
    collection: (name: string) => ({
      add: async (data: any) => ({ id: 'mock-id' }),
      doc: (id: string) => ({
        get: async () => ({
          exists: true,
          data: () => ({ ...data, id }),
        }),
        set: async (data: any) => true,
        update: async (data: any) => true,
        delete: async () => true,
      }),
      where: (field: string, op: string, value: any) => ({
        get: async () => ({
          docs: [
            {
              id: 'mock-id',
              data: () => ({ id: 'mock-id', [field]: value }),
            },
          ],
        }),
      }),
    }),
  }),
};

export default firebase;