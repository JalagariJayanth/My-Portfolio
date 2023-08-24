import {Route, Routes,BrowserRouter} from 'react-router-dom'
import Main from "./Components/Main";
import ProjectDetails from './Components/ProjectDetails';



const App = () => {
  return(
    <BrowserRouter basename="/">
    <Routes>
      <Route exact path="/" Component={Main} />
      <Route exact path="/projects/:id" Component={ProjectDetails} />
    </Routes>
    </BrowserRouter>
  )


}
export default App