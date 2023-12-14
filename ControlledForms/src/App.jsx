import { Color } from "./Color";
import { Colors } from "./Colors";
import { Counter } from "./Counter";
import { FocusableInput } from "./FocusableInput";
import { ToDoList } from "./ListsAndState";

export function App() {
  return (
    <div>

      <ToDoList todos={["","","","","","",""]}/>
    </div>
  )
} 