"use client";

import { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";

const answers: Record<string, string> = {
  programs: "Our Strength Lab, Engine Room, and Move Better sessions cover progressive strength, conditioning, and mobility. Start with the program that matches your goal, then we can help you build from there.",
  nutrition: "We keep nutrition practical: build meals around protein, colorful plants, quality carbohydrates, and enough water. Our Nutrition page has a simple plate guide and sample day.",
  workouts: "Most members train three to five times per week. Sessions are designed to scale, so consistency matters more than going all-out every day.",
 membership: "FITFORGE membership starts with a personal goal check-in and a program recommendation. Create an account to access your dashboard, or contact a coach for details.",
 contact: "Reach our team at gabrielgabriel9727@gmail.com, or use the contact form and we will get back to you.",
 fitforge: "FITFORGE is a training and food lifestyle community built around strength, consistency, and feeling good in your own body.",
};

function getAnswer(question: string) {
  const text = question.toLowerCase();
  if (/program|class/.test(text)) return answers.programs;
  if (/food|nutrition|meal|eat/.test(text)) return answers.nutrition;
  if (/workout|train|exercise/.test(text)) return answers.workouts;
  if (/member|join|price|membership/.test(text)) return answers.membership;
  if (/contact|email|coach/.test(text)) return answers.contact;
  return answers.fitforge;
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<{ from: "bot" | "you"; text: string }[]>([{ from: "bot", text: "Hey, welcome to FITFORGE. What would you like to know?" }]);
  const ask = (text: string) => {
    if (!text.trim()) return;
    setMessages((items) => [...items, { from: "you", text }, { from: "bot", text: getAnswer(text) }]);
    setQuestion("");
  };
  return <div className="chat-root">
    {open && <section className="chat-panel" aria-label="FITFORGE assistant">
      <div className="chat-head"><span className="chat-dot" /><div><strong>FITFORGE GUIDE</strong><small>Here to help you get moving</small></div><button onClick={() => setOpen(false)} aria-label="Close chat"><X size={18} /></button></div>
      <div className="chat-messages">{messages.map((message, index) => <p className={`chat-message ${message.from}`} key={`${index}-${message.from}`}>{message.text}</p>)}</div>
      <div className="quick-questions">{["Programs", "Nutrition", "Membership"].map((item) => <button key={item} onClick={() => ask(item)}>{item}</button>)}</div>
      <form className="chat-form" onSubmit={(event) => { event.preventDefault(); ask(question); }}><input value={question} onChange={(event) => setQuestion(event.target.value)} placeholder="Ask us anything" aria-label="Ask FITFORGE" /><button aria-label="Send question"><Send size={16} /></button></form>
    </section>}
    <button className="chat-launch" onClick={() => setOpen(!open)} aria-label={open ? "Close FITFORGE chat" : "Chat with FITFORGE"}><MessageCircle size={21} /><span>{open ? "Close" : "Ask FITFORGE"}</span></button>
  </div>;
}