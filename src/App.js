import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./pages/Root";
import Dashboard from "./pages/Dashboard";
import Content from './pages/Content';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Analytics from './pages/Analytics';
import Comments from './pages/Comments';
import Subtitles from './pages/Subtitles';
import Copyright from './pages/Copyright';
import Earn from './pages/Earn';
import Customization from './pages/Customization';
import Audio from './pages/Audio';
import Settings from './pages/Settings';
import Logout from './pages/Logout';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Dashboard />} />
      <Route path="content" element={<Content />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="comments" element={<Comments />} />
      <Route path="subtitles" element={<Subtitles />} />
      <Route path="copyright" element={<Copyright />} />
      <Route path="earn" element={<Earn />} />
      <Route path="customization" element={<Customization />} />
      <Route path="audio" element={<Audio />} />
      <Route path="settings" element={<Settings />} />
      <Route path="logout" element={<Logout />} />
    </Route>
  )
);

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <RouterProvider router={router} />;
    </ThemeProvider>
  )
}

export default App;