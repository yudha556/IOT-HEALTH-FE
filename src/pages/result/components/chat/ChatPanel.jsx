import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send } from "lucide-react";

const DEFAULT_QUICK_REPLIES = [
  "Kenapa BPM saya segitu?",
  "Apa maksud SpO2 99%?",
];

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl rounded-bl-md px-4 py-3 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]" />
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" />
      </div>
    </div>
  );
}

function generateReply(question) {
  const q = question.toLowerCase();
  if (q.includes("bpm") || q.includes("detak") || q.includes("jantung")) {
    return "BPM kamu masih tergolong normal, biasanya dipengaruhi aktivitas ringan sebelum pengukuran atau posisi tubuh. Kalau kamu merasa berdebar atau pusing, coba ukur ulang setelah istirahat 5 menit.";
  }
  if (q.includes("spo2") || q.includes("oksigen")) {
    return "SpO2 di atas 95% menandakan oksigen dalam darah kamu tersalurkan dengan baik, jadi angka kamu saat ini masih tergolong sehat.";
  }
  return "Terima kasih pertanyaannya. Berdasarkan hasil pengukuran kamu saat ini, kondisinya masih dalam batas normal. Kalau ada gejala lain yang dirasakan, boleh ceritakan lebih detail ya.";
}

export function ChatPanel({
  bpm = 100,
  spo2 = 99,
  quickReplies = DEFAULT_QUICK_REPLIES,
}) {
  const [messages, setMessages] = useState([
    {
      id: "greeting",
      sender: "ai",
      text: "Hasil kamu sudah aku analisis. Ada yang mau ditanyain lebih lanjut soal detak jantung atau kadar oksigen kamu?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  function sendMessage(text) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: trimmed },
    ]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "ai", text: generateReply(trimmed) },
      ]);
    }, 1100 + Math.random() * 500);
  }

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <Card className="p-5 rounded-3xl border-slate-100 dark:border-slate-800 shadow-sm flex flex-col gap-4 h-full">
      {/* Header */}
      <div className="flex items-center justify-between w-full gap-2.5">
        <div className="flex flex-row gap-3 items-center">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white">
            Tanya AI Lebih Lanjut
          </h3>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-50 text-rose-500 dark:bg-rose-950/30">
            {bpm} BPM
          </span>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/30">
            {spo2}% SpO₂
          </span>
        </div>
      </div>

      <ScrollArea className="flex-1 min-h-0 pr-4">
        <div className="flex flex-col gap-2.5">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-md"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && <TypingBubble />}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      {quickReplies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((q) => (
            <button
              key={q}
              type="button"
              onClick={() => sendMessage(q)}
              className="text-xs px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tulis pertanyaan kamu..."
          className="flex-1 rounded-full h-10 border-slate-200 dark:border-slate-700"
        />
        <Button
          type="submit"
          size="icon"
          className="h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 shrink-0"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
    </Card>
  );
}