import UtilityContext from "../Context/UtilityContext";

//UtilityContext provider
const UtilityContextProvider = ({ children }) => {
  const title = "who are you bro.. let me know";
  return (
    <UtilityContext.Provider value={{ title }}>
      {children}
    </UtilityContext.Provider>
  );
};

//export
export default UtilityContextProvider;
