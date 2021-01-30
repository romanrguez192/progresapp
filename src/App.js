import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import {
  unstable_createMuiStrictModeTheme as createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Tutorings from "./pages/Tutorings";
import TutoringDetail from "./pages/TutoringDetail";
import CreateTutoring from "./pages/CreateTutoring";
import { UserProvider } from "./contexts/UserContext";
import CustomRoute from "./components/CustomRoute";
import { light } from "@material-ui/core/styles/createPalette";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

//Tema
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },

  palette: {
    //Moradito clarito
    primary: {
      main: "#475694",
    },
    //Rojosado
    secondary: {
      main: "#d3485a",
    },
    //Rosado
    tertiary: {
      main: "#fb86bb",
    },
    //Cremita
    quaternary: {
      main: "#ffe4d4",
    },
    //Morado oscuro
    quinary: {
      main: "#232b4a",
    },
    //Marron claro
    sextarian: {
      main: "#b39490",
    },
    //Mostaza
    septenary: {
      main: "#fca976",
    },
  },
});

function App() {
  return (
    <div>
      {/* Tema */}
      <ThemeProvider theme={theme}>
        <UserProvider>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Router>
              <Switch>
                {/* Página principal */}
                <CustomRoute exact path="/" auth={true}>
                  <Home />
                </CustomRoute>
                {/* Página de lista de tutorías */}
                <CustomRoute exact path="/tutorias" auth={true}>
                  <Tutorings />
                </CustomRoute>
                {/* Detalle de tutoría */}
                <CustomRoute path="/tutorias/:id" auth={true}>
                  <TutoringDetail />
                </CustomRoute>
                {/* Crear tutoría TODO: No es definitivo que sea una página */}
                <CustomRoute path="/crearTutoria" auth={true}>
                  <CreateTutoring />
                </CustomRoute>
                {/* Página de registro */}
                <CustomRoute path="/signup" auth={false}>
                  <SignUp />
                </CustomRoute>
                {/* Página de inicio de sesión */}
                <CustomRoute path="/login" auth={false}>
                  <Login />
                </CustomRoute>
              </Switch>
            </Router>
          </MuiPickersUtilsProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
