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
    sendMessage("일기 종료");
    setMessage("");
  };

  return (
    <div className="flex justify-center min-h-screen bg-[#FFF8F2] px-4 font-pen">
      <div className="w-full max-w-[390px] py-6 flex flex-col justify-between">
        {diary !== "" ? (
          <div className="p-6 bg-[#FFFCF7] rounded-xl shadow-md border border-[#F0EAE0]">
            <h2 className="text-2xl mb-4 text-[#6B4F3B]">📓 오늘의 일기</h2>
            <div className="whitespace-pre-wrap text-xl text-[#5D4B3C] leading-relaxed bg-[url('/note-lines.png')] bg-repeat-y bg-[length:100%_32px] p-4 rounded-md shadow-inner">
              {diary}
            </div>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-2 mb-4 overflow-y-auto max-h-[65vh] pr-1 text-lg">
              <li className="text-[#8D7B68] ">🤖 assistant: 오늘 무슨 일이 있으셨나요?</li>
              {conversation?.map((item: any, idx: number) => (
                <li key={idx} className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-md leading-relaxed ${
                      item.role === "user"
                        ? "bg-[#D8F3DC] text-[#3A4F39] rounded-br-none"
                        : "bg-white text-[#4B3A2F] border border-[#E6DDD1] rounded-bl-none"
                    }`}
                  >
                    {item.content}
                  </div>
                </li>
              ))}
            </ul>

            <form onSubmit={clickButton} className="flex flex-col gap-2">
              <textarea
                className="border text-lg  border-[#E6DDD1] rounded-xl p-3 h-20  resize-none bg-[#FFFDF9] placeholder:text-[#B8A99B] focus:outline-none focus:ring-2 focus:ring-[#DDB892]"
                value={message}
                placeholder="오늘 있었던 일을 들려주세요 ✍️"
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="flex justify-between">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-[#B7E4C7] text-[#2C4B37] rounded-lg text-base font-semibold hover:bg-[#95D5B2]"
                >
                  전송 📤
                </button>
                <button
                  type="button"
                  onClick={clickEnd}
                  className="flex-1 ml-2 px-4 py-2 bg-[#F1C0B9] text-[#5E3023] rounded-lg text-base font-semibold hover:bg-[#E5989B]"
                >
                  종료 🧸
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
