import { InteractiveWelcome} from "./InteractiveWelcome";
import { Login } from "./Login";
import { UncontrolledLogin } from "./UncontrolledLogin";

export function App(){
  return(
    <div>
      <Login />
      <UncontrolledLogin />
    </div>
  )
}