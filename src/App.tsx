import { useState, createContext } from "react";
import Main from "./Pages/main";
function App() {
  const [data, setdata]: any = useState(null);
  const [loading, setloading]: any = useState(false);

  return (
    <DataContext.Provider
      value={{
        data: data,
        setdata: setdata,
        loading: loading,
        setloading: setloading,
      }}
    >
      <Main data={data} loading={loading} />
    </DataContext.Provider>
  );
}

export const DataContext = createContext({});
export default App;
