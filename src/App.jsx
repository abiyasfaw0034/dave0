import { useState } from "react";
import { useGetTask } from "./services/useGetTask";
import { useAddTask } from "./services/useAddTask";

function App() {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState("");

  const { data, isLoading } = useGetTask();
  const { mutate, isadding } = useAddTask();

  function handleSubmit(e) {
    e.preventDefault();
    if (!list) {
      console.log("empty");
      return;
    }
    setOpen(false);
    setList("");
    mutate(list);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-3xl text-yellow-400">Todo list</div>
      {data?.length === 0 || isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div className="p-10 bg-slate-300">
          {data?.map((list, index) => (
            <div key={index} className="text-black">
              - {list}
            </div>
          ))}
        </div>
      )}

      {open ? (
        <form onSubmit={handleSubmit} className="p-5 bg-yellow-200 flex gap-10">
          <input
            name="task"
            value={list}
            onChange={(e) => {
              setList(e.target.value);
            }}
            required
          />
          <button type="submit">Add task</button>
        </form>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-slate-600 py-5 px-20 "
        >
          Add task
        </button>
      )}
      {isadding && <div>adding</div>}
    </div>
  );
}
export default App;
