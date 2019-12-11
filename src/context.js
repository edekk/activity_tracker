import { createContext, useContext } from 'react';

const AppContext = createContext();

export const useStore = () => useContext(AppContext);

export default AppContext;