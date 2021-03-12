import Navbar from "./UserComponent/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Adjust from "./UserComponent/Adjust";
import Home from "./UserComponent/Home";
import Login from "./Login";
import Register from "./Register";
import MovieDetail from "../src/UserComponent/MovieDetail";
import CastDetailPage from "./UserComponent/CastDetailPage";
import SeatBookContainer from "./UserComponent/SeatBookContainer";
import SnackContainer from "./UserComponent/SnackContainer";
import Profile from "./UserComponent/Profile";
import History from "./UserComponent/History"
import Query from "../src/UserComponent/Query"

import Booked from "./UserComponent/Booked";
import BookingPage from "./UserComponent/BookingPage";

import {AuthContextProvider} from "../src/Context/AutoContext"

import axios from 'axios';
axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <div className="app__div">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/adjust" exact component={Adjust} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/moviedetail" exact component={MovieDetail} />
          <Route path="/castdetailpage" exact component={CastDetailPage} />
          <Route path="/castdetailpage" exact component={CastDetailPage} />
          <Route path="/seatBookContainer" exact component={SeatBookContainer}/>
          <Route path="/snackcontainer/" exact component={SnackContainer} />
          <Route path="/profile" exact component={Profile}/>
          <Route path="/history" exact component={History} />
          <Route path="/bookingpage" exact component={BookingPage}/>
          <Route path="/booked" exact component={Booked}/>
          <Route path="/query" exact component={Query}/>
        </Switch>
      </div>
    </Router>
    </AuthContextProvider>
  );
}

export default App;