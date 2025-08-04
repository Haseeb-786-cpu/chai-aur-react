import { useState } from "react"


function App() {
  const [color, setColor] = useState("white")



  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >

      <div className="fixed flex flex-wrap
  justify-center bottom-12 inset-x-0 px-2 ">

        <div className="flex flex-wrap gap-3 justify-center bg-white shadow-lg
    px-3 py-2 rounded-3xl ">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>
            Red</button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}>
            Green</button>

          <button
            onClick={() => setColor("black")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}>
            Black</button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-6 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}>
            Yellow</button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>
            Blue</button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-6 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}>
            pink</button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}>
            purple</button>

          <button
            onClick={() => setColor("grey")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>
            grey</button>

          <button
            onClick={() => setColor("aqua")}
            className="outline-none px-6 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "aqua" }}>
            aqua</button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}>
            orange</button>

          <button
            onClick={() => setColor("violet")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "violet" }}>
            violet</button>

          <button
            onClick={() => setColor("lime")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lime" }}>
            lime</button>

          <button
            onClick={() => setColor("brown")}
            className="outline-none px-6 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}>
            brown</button>

          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-6 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}>
            lavender</button>

        </div>
      </div>
    </div>
  )
}

export default App
