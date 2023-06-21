import {Link} from "react-router-dom";
import '../css/BoardList.css'
import {useEffect, useState} from "react";
import axios from "axios";

function BoardList() {
    const [boardList, setBoardList] = useState([]); // 가져올 리스트

    //get 방식으로 데이터 불러오기
    const getBoardList = async () => {
        await axios.get("http://localhost:3000/list")
            .then((response) => {
                setBoardList(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getBoardList();
    }, [])


    return (
        <>
            <table>
                <thead>
                <tr>
                    <th><input type='checkbox'/></th>
                    <th>No</th>
                    <th style={{width: "70%"}}>제목</th>
                    <th>저자</th>
                    <th>등록일자</th>
                </tr>
                </thead>
                <tbody>
                    {boardList.map((board) => {
                        return(
                            <tr>
                                <th><input type='checkbox'/></th>
                                <td>{board.id}</td>
                                <td><Link to="/detail">{board.title}</Link></td>
                                <td>{board.author}</td>
                                <td>{board.date}</td>
                            </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            <Link to=''>
                <button className='submit' style={{backgroundColor: "indianred"}}>삭제</button>
            </Link>
            <Link to='/write'>
                <button className='submit'>글쓰기</button>
            </Link>
        </>
    )
}

export default BoardList;