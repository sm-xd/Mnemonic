import { Button } from "./components/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <div className="h-100 w-100 flex items-center justify-center">
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon/>}/>
        <span className="mx-2" />
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>}/>
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
