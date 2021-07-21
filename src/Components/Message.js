import { useState, useEffect } from "react";
import MessageUpload from "./MesaageUpload";

function Message() {
  const [tasks, setTasks] = useState({
    loading: false,
    item: [],
  });

  useEffect(() => {
    setInterval(() => {
      //backend data recived
      setTasks({
        loading: false,
        items: [
          { _id: "111", title: "Task 1", isCompleted: false },
          { _id: "222", title: "Task 2", isCompleted: false },
          { _id: "333", title: "Task 3", isCompleted: true },
        ],
      });
    }, 1500);
  }, []);

  if (tasks.loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <input
        style={{ height: "200px", border: "solid 2px #739C80" }}
        className="form-control form-control-lg"
        placeholder=""
      />
      {/* {chats.items.map((chat, index) => (
        <Chat chat={chat} key={index} />
      ))} */}
    </div>
  );
}

export default Message;
