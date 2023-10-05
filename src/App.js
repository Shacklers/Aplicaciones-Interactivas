import HelpIcon from "@material-ui/icons/Help";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { AuthProvider } from "./components/Hooks/AuthContext";
import Navbar from "./components/navbar-component/Navbar";
import "./css/space.css";
import Account from "./views/Account";
import Catalog from "./views/Catalog";
import Home from "./views/Home";
import Login from "./views/Login";
import { Post } from "./views/Post";
import Checkout from "./views/payments/Checkout";

const useStyles = makeStyles({
  home: {
    display: "flex",
    flexDirection: "column",

    padding: 0,
    backgroundColor: "#fff1f1",
    width: "100%",
  },
});

function App() {
  const arrayNavLinks = [
    {
      title: "",
      path: "/",
      icon: <HelpIcon />,
    },
    {
      title: "Dar clases particulares",
      path: "/Login",
      icon: "",
    },
    {
      title: "Conectate",
      path: "/Login",
      icon: "",
    },
  ];
  const classes = useStyles();

  return (
    <>
      <AuthProvider>
        <div className={classes.home}>
          <Navbar arrayNavLinks={arrayNavLinks} />

          <Container maxWidth={false} disableGutters>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Catalog" element={<Catalog />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Catalog/:text" element={<Catalog />} />
              <Route path="/Catalog/Post/:user" element={<Post />} />
              <Route path="/Post/:user/Checkout" element={<Checkout />} />
              <Route path="/:user/Account" element={<Account />} />
            </Routes>
          </Container>
          <Footer></Footer>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
