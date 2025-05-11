"use client";
import useDiaryBot from "@/hooks/useDiaryBot";
import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const { sendMessage, conversation, diary } = useDiaryBot();
  const clickButton = () => {
    sendMessage(message);
    setMessage("");
  };

  console.log("data", conversation);
  return (
    <div className="p-20">
      <input className="border" type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={clickButton}>전송</button>
      <ul>
        {conversation?.map((item: any) => (
          <li key={item.content}>
            <div>
              {item.role} : {item.content}
            </div>
          </li>
        ))}
      </ul>
      {diary !== "" && <div>{diary}</div>}
    </div>
  );
}
