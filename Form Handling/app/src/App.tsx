import "./App.css";
import FormHandling from "./component/FormHandling";
import FormHandlingWithReactHookForm from "./component/FormHandlingWithReactHookForm";
import FormHandlingWithState from "./component/FormHandlingWithState";

function App() {
  return (
    <>
      <h1>Ways to handle forms</h1>
      <FormHandling />
      <FormHandlingWithState />
      <FormHandlingWithReactHookForm />
    </>
  );
}

export default App;
