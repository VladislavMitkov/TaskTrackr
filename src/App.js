const App = () => {
  const url = "http://localhost:5000";

  const getAllTasks = () => {
    fetch(url + "/tasks").then((res) => console.log(res.status));
  };

  const getTask = (id) => {
    fetch(url + `/tasks/${id}`).then((res) => console.log(res.status));
  };

  const updateTask = (id) => {
    fetch(url + `/tasks/${id}`).then((res) => console.log(res.status));
  };
  const deleteTask = (id) => {
    fetch(url + `/tasks/${id}`).then((res) => console.log(res.status));
  };

  return (
    <>
      <div>Hello there</div>
      <div>
        <button onClick={getAllTasks}>Get all tasks</button>
        <button onClick={() => getTask(4)}>Get single task</button>
        <button onClick={() => updateTask(3)}>Update task</button>
        <button onClick={() => deleteTask(3)}>Delete task</button>
      </div>
    </>
  );
};

export default App;
