import Header from "./components/Header";
// import Chat from "./components/ChatRoom";
import BottomNav from "./components/BottomNav";
import { useState } from "react";

// function App() {
//   return (
//     <div >
//       <Header title="Chat" />
//       <Chat />
//       <BottomNav />
//     </div>
//   );
// }

function ChatBox({ image, message, right }) {
  const elements = [
    <img className="rounded-full h-8 w-8" src={image} alt="lorem" />,
    <div className="text-sm bg-gray-200 px-4 py-2">
      <p>{message}</p>
    </div>
  ]
  return (
    <div className="flex space-x-4 p-4">{
      right ? elements.reverse() : elements
    }

    </div>
  )
}

function ChatRoom({ messages }) {

  return (
    <div className="">
      {messages.map((message, index) => (
        <ChatBox image={message.image} message={message.message} right={index % 2} />
      ))}
    </div>
  )
}


function App() {
  const [messages, setMessages] = useState(
    [
      {
        image: "https://picsum.photos/id/237/200",
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      },
      {
        image: "https://picsum.photos/id/237/200",
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      }
    ])
  return (
    <div>
      <Header title="James" />
      <ChatRoom messages={messages} />
      <BottomNav onPlusClick={() => {
        setMessages([
          ...messages,
          {
            image: "https://picsum.photos/id/237/200",
            message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
          }
        ])
      }} />
    </div>
  );
}

export default App;