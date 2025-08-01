import {Route, Routes} from "react-router-dom";
import BoardList from "../components/BoardList";
import BoardForm from "../components/BoardForm";


function Router(){
    return(
        <Routes>
            <Route path="/" element={<BoardList />}/>
            <Route path="/board/:boardId" element={<BoardForm />}/>
            <Route path="/board/create" element={<BoardForm />}/>
        </Routes>
    )
}
export default Router;