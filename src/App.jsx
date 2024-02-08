import { BrowserRouter } from "react-router-dom";
import MainRouter from "./Components/MainRouter";
import Theme from "./Theme/index"
import DataProcessing from "./DataProcessing/DataProcessing";
function App() {

  return (
    <DataProcessing>
      <Theme>
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Theme>
    </DataProcessing>
  )
}

export default App
