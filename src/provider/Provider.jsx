import { v4 as uuidv4 } from 'uuid'
import { createContext } from "react";

const bbdd = {

  follower : [
    { id : uuidv4() , name : "uyFranco" , userName : "@UyFrancoo" , avatar : "uyfrancoo.jpeg" , follow : "Follow" },
    { id : uuidv4() , name : "Mundo Ovnis" , userName : "@mundoovnis" , avatar : "mundoovnis.jpeg" , follow : "Follow" },
    { id : uuidv4() , name : "Exploración OVNI" , userName : "@exporacionovnis" , avatar : "exploracionovnis.png" , follow : "Follow" },
  ],

}

export const GlobalContext = createContext();
export const Provider = ({ children }) => {
    return (
      <GlobalContext.Provider value={bbdd}>
          {children}
      </GlobalContext.Provider>
    );
  };
  