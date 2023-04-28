import {Link} from "react-router-dom";
import '../css/BoardList.css'

function BoardList() {
    return(
        <>
            <table>
                <tr>
                    <th><input type='checkbox'/></th>
                    <th>No</th>
                    <th style={{width:"70%"}}>제목</th>
                    <th>저자</th>
                    <th>등록일자</th>
                </tr>
                <tr>
                    <th><input type='checkbox'/></th>
                    <td>1</td>
                    <td><Link to="/detail">게시판1</Link></td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
                <tr>
                    <th><input type='checkbox'/></th>
                    <td>1</td>
                    <td><Link to="/detail">게시판2</Link></td>
                    <td>Jackson</td>
                    <td>94</td>
                </tr>
                <tr>
                    <th><input type='checkbox'/></th>
                    <td>1</td>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>67</td>
                </tr>
            </table>
            <Link to=''>
                <button className='submit' style={{backgroundColor:"indianred"}}>삭제</button>
            </Link>

            <Link to='/write'>
                <button className='submit'>글쓰기</button>
            </Link>
        </>
    )
}
export default BoardList;