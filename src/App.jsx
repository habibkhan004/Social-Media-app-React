import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./components/store/post-list-store";
import PostList from "./components/PostList";
import { useState } from "react";

function App() {
  const [tab, setTab] = useState("Home");
  let onTabChange = (tabChange) => {
    let newTab = tabChange;
    setTab(newTab);
  };
  return (
    <>
      <PostListProvider>
        <div className="app-container">
          <SideBar tab={tab} onTabChange={onTabChange}></SideBar>
          <div className="content">
            <Header></Header>
            {tab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
            <Footer></Footer>
          </div>
        </div>
      </PostListProvider>
    </>
  );
}

export default App;
