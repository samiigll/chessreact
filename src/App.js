import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Board from "./Board";
import subjectGame from "./Game";
import { useEffect, useState } from "react";

function App() {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    const subscribe = subjectGame.subscribe((sub) => setBoard(sub.chess));
    return () => subscribe.unsubscribe();
  }, []);
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Board board={board} />
      </div>
    </DndProvider>
  );
}

export default App;
