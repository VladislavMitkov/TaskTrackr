import { useState } from "react";

const App = () => {
  const url = "http://localhost:5000";
  const [task, setTask] = useState(null);
  const [updatedTask, setUpdatedTask] = useState(null);

  const dummyData = { name: "first task", id: 2 };
  const updatedDummyData = { name: "Updated task", id: 2 };

  const getAllTasks = () => {
    fetch(url + "/tasks").then(() => console.log(task));
  };

  const getTask = (id) => {
    fetch(url + `/tasks/${2}`).then((res) => console.log(res));
  };

  const postTask = async () => {
    try {
      const response = await fetch(url + "/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dummyData),
      });
      if (response.status === 200) {
        const data = await response.json();
        setTask(data.payload);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const updateTask = (id) => {
    fetch(url + `/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDummyData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (task) {
          setTask(data.payload);
        } else {
          alert("There's no task yet");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  };

  const deleteTask = async (id) => {
    try {
      await fetch(url + `/tasks/${id}`, {
        method: "DELETE",
      });
      setTask({});
    } catch (error) {
      console.error("error", error);
    }
  };
  return (
    <>
      <div>Hello there</div>
      <div
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <button onClick={getAllTasks}>Get all tasks</button>
        <button onClick={() => getTask(2)}>Get single task</button>
        <button onClick={() => postTask()}>Upload a task</button>
        <button onClick={() => updateTask(3)}>Update task</button>
        <button onClick={() => deleteTask(2)}>Delete task</button>
      </div>
      <main>
        <h1>Task name: {task?.name}</h1>
        <p>Task id: {task?.id}</p>
      </main>
    </>
  );
};

export default App;
