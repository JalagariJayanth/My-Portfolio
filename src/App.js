import {Route, Routes,HashRouter} from 'react-router-dom'
import Main from "./Components/Main";
import ProjectDetails from './Components/ProjectDetails';



const App = () => {
  return(
    <HashRouter basename="/">
    <Routes>
      <Route exact path="/" Component={Main} />
      <Route exact path="/projects/:id" Component={ProjectDetails} />
    </Routes>
    </HashRouter>
  )


}
export default App