import Header from "./components/Header";
import Chat from "./components/ChatRoom";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div>
      <Header title="Chat" />
      <Chat />
      <BottomNav />
    </div>
  );
}

export default App;
