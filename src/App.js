import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/SettingsPage/Settings";
import { store } from "./redux/data";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar friends={props.store._data.friends} />
        <div className="app-wrapper__content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={props.store._data.posts}
                newText={props.store._data.newText}
                dispatch={props.store.dispatch.bind(store)}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.store._data.dialogs}
                newMessageText={props.store._data.newMessageText}
                messages={props.store._data.messages}
                dispatch={props.store.dispatch.bind(store)}
              />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/Settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

//37 lesson was
