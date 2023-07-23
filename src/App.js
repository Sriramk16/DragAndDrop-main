import { Droppable } from "react-beautiful-dnd";
import "./App.css";
import SideBar from "./components/SideBar";
import ContentBar from "./components/ContentBar";


function App() {
  return (
    <div className="flex">
      <SideBar />
      <ContentBar />
    </div>
  );
}

export default App;
