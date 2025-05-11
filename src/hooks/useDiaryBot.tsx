import { useState } from "react";

const useDiaryBot = () => {
  const [conversation, setConversation] = useState<any>([]);
  const [diary, setDiary] = useState("");

  const sendMessage = async (message: string) => {
    const newMessages = [...conversation, { role: "user", content: message }];
    // // 대화 종료 조건 체크
    // if (message.includes("종료")) {
    //   const diary = await fetch("/api", {
    //     method: "POST",
    //     body: JSON.stringify({ messages: newMessages }),
    //   });
    //   return diary;
    // }

    // 일반 응답 처리
    const response: any = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ messages: newMessages }),
    });
    const data = await response?.json();
    console.log(data);
    if (data?.diary) {
      setDiary(data?.diary ?? "");
    }
    setConversation([...newMessages, { role: "assistant", content: data?.response }]);
  };

  return { sendMessage, conversation, diary };
};

export default useDiaryBot;
