import { BrowserRouter } from "react-router-dom";
import RouterHome from "./routers/RouterHome";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <RouterHome />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
