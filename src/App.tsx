import "./App.css";
import AlbumFeature from "./features/Album";
import Todo from "./features/Todo";
import CounterFeature from "./features/Counter";
import { Student } from "./features/LabsTypeScript/Student";

function App() {
  return (
    <div className="App">
      {/* <Todo /> */}
      {/* <AlbumFeature /> */}
      {/* <CounterFeature /> */}
      <Student />
    </div>
  );
}

export default App;
