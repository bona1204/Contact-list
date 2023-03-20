export const contactStore = {
  listaContactos: [
    {
      full_name: "Dave Bradley",
      email: "dave@gmail.com",
      agenda_slug: "agenda_de_sebastian",
      address: "47568 NW 34ST, 33434 FL, USA",
      phone: "7864445566",
      img: "https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg",
    },
  ],
};

export function contactActions(getStore, getActions, setStore) {
  return {
    addContact: async (obj) => {
      console.log(obj)
      let store = getStore();
      let arrTemp = store.listaContactos.slice();
      arrTemp.push(obj);
      setStore({ ...store, listaContactos: arrTemp });
      return store.listaContactos;
    },
    deleteContact: (indice) => {
      let store = getStore();
      let arrTemp = store.listaContactos.filter((item, index) => {
        return index != indice;
      });
      setStore({ ...store, listaContactos: arrTemp });
    },
    editContact: async(indice, obj) => {
      console.log(obj)
      let store = getStore();
      let arrTemp = store.listaContactos.slice();
      arrTemp[indice] = obj;
      setStore({ ...store, listaContactos: arrTemp });
      return store.listaContactos;
    }, 
  };
}  
