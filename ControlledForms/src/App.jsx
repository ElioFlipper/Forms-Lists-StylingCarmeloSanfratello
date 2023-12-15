import { Color } from "./Color";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { ToDoList } from "./ListsAndState";
import { ToDo } from "./ToDo";
import { ToDo2 } from "./ToDoProva";
import { Welcome } from "./Welcome";


export function App() {
  return (
    <div>
      <Welcome name="Elio" eta={28} />
      <ToDo2 />

    </div>
  )
} 