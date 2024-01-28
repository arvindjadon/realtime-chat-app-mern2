import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

export default function App() {
  return (
    <div className="app">
      {/* <h1>Let's build a MERN Whatsapp clone</h1> */}
      <div className="app-body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
