import Accordion from "./Accordion";

function App() {
  const accordionData = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "Why use React?", content: "React makes it easy to build interactive UIs with reusable components." },
    { title: "How does React work?", content: "React creates a virtual DOM and updates only the changed parts efficiently." },
  ];

  return (
    <div className="App">
      <h2>React Accordion</h2>
      <Accordion items={accordionData} />
    </div>
  );
}

export default App;
