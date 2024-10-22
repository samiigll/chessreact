import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Board from "./Board";
import Game from "./Game";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Board />
      </div>
    </DndProvider>
  );
}

export default App;
