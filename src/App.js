import { Routes, Route } from "react-router-dom";
import Home from "./componenets/routes/home/home.componenet";
import NavigationBar from "./componenets/routes/navitgation/navigation.componenet";
import SignIn from "./componenets/routes/sign-in/sign-in.component";


const Shop = () => {
  return <h1>I am funi page</h1>;
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
};

export default App;
