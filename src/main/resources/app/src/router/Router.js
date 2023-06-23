import {Route, Routes} from "react-router-dom";
import BoardList from "../components/BoardList";
import BoardDetail from "../components/BoardDetail";
import BoardWrite from "../components/BoardWrite";

function Router(){
    return(
        <Routes>
            <Route path="" element={<BoardList />}></Route>
            <Route path="/detail/:id" element={<BoardDetail />}></Route>
            <Route path="/write" element={<BoardWrite />}></Route>
        </Routes>
    )
}
export default Router;