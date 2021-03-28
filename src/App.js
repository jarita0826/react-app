import Header from "./components/Header";
// import Chat from "./components/ChatRoom";
import BottomNav from "./components/BottomNav";


// function App() {
//   return (
//     <div >
//       <Header title="Chat" />
//       <Chat />
//       <BottomNav />
//     </div>
//   );
// }

function ChatBox({ image, message }) {
  return (
    <div>
      <img src={image} alt="lorem" />
      <p>
        {message}
      </p>
    </div>
  )
}

function ChatRoom() {
  const messages = [
    {
      image: "https://picsum.photos/id/237/200",
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
      image: "https://picsum.photos/id/237/200",
      message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    }
  ]
  return (
    <div>
      {
        messages.map((msg) => {
          <ChatBox image={msg.image} message={msg.message} />
        })
      }
    </div>
  )
}

function ChatRoom({ image, username, message }) {
  return (
    <div className="flex space-x-4 p-4">
      <img className="rounded-full h-16 w-16" src={image} alt="lorem" />
      <div className="text-sm">
        <h3 className="font-bold">{username}</h3>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default function Main() {
  const rooms = [
    {
      image: "https://picsum.photos/id/237/200",
      username: "James",
      message: "Thank you! That was very helpful!"
    },
    {
      image: "https://picsum.photos/id/237/200",
      username: "James",
      message: "Thank you! That was very helpful!"
    },
    {
      image: "https://picsum.photos/id/237/200",
      username: "James",
      message: "Thank you! That was very helpful!"
    }
  ]
  return (
    <div className="divide-y">
      {rooms.map((room) => (
        <ChatRoom image={room.image} username={room.username} message={room.message} />
      ))}
    </div>
  )
}


function App() {
  return (
    <div>
      <Header title="James" />
      <ChatRoom />
      <BottomNav />
    </div>
  );
}

export default App;