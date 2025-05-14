"use client";
import useDiaryBot from "@/hooks/useDiaryBot";
import { FormEvent, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const { sendMessage, conversation, diary } = useDiaryBot();
  const clickButton = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(message);
    setMessage("");
  };
  const clickEnd = () => {
    sendMessage("뷁");
    setMessage("");
  };

  console.log("data", conversation);
  return (
    <div className="p-20">
      <div>
        <textarea
          className="border h-20 w-96 text-sm"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button
            onClick={clickButton}
            className="px-2 py-1 rounded-md text-sm bg-green-500 text-white font-normal"
          >
            전송
          </button>
          <button
            type="button"
            onClick={clickEnd}
            className="ml-2 px-2 py-1 bg-red-500  rounded-md text-white text-sm font-normal"
          >
            종료
          </button>
        </div>
      </div>

      <ul>
        <li>assitant: 오늘 무슨 일이 있으셨나요?</li>
        {conversation?.map((item: any) => (
          <li key={item.content}>
            <div>
              {item.role} : {item.content}
            </div>
          </li>
        ))}
      </ul>
      {diary !== "" && <div className="mt-16 ">{diary}</div>}
    </div>
  );
}
