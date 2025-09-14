import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "A Promise, Not a Platitude",
    text: "This isn't meant to dismiss your current struggle. It's a promise to yourself that you will get through it, just as you have survived every difficult day before this one. Your pain is real, but so is your resilience.",
  },
  {
    title: "Your Track Record of Perfect",
    text: "Look back. You have a 100% success rate of making it through your worst days. Every past challenge that felt insurmountable at the time is now a chapter you overcame. This will be too.",
  },
  {
    title: "The Bridge is Built Small",
    text: "You don't need to see the whole path yet. The way forward is built one small, manageable step at a time. Focus only on the next right thing. Then the next. The rest will follow.",
  },
  {
    title: "You Are Not Meant To Carry It Alone",
    text: `"Okay" often arrives with help. It’s found in a friend's text, a deep conversation, or simply sharing the load. Reaching out is not a sign of weakness; it's a step toward healing.`,
  },
  {
    title: "Trust the Rhythm of Life",
    text: `Life is a cycle of ebbs and flows. You are in a difficult flow right now, but it is temporary. Calm waters are ahead. This is not the end of your story; it's a challenging passage. The sun will rise again.`,
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
