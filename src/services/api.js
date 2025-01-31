export async function fetchTasks() {
  // fetch("http://localhost:5000/")
  //   .then((res) => res.json())
  //   .then((data) => setLists(data.jobs));
  const res = await fetch("http://localhost:5000/list");
  const data = await res.json();

  return data.jobs;
}

export function addTask(list) {
  fetch("http://localhost:5000", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ task: list }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
