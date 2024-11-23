import { Routes, Route } from "react-router-dom";
import Home from "./componenets/routes/home/home.componenet";
import NavigationBar from "./componenets/routes/navitgation/navigation.componenet";
import Authentication from "./componenets/routes/authentication/authentication.component";
import Shop from "./componenets/routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  )
};

export default App;
