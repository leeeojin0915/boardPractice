import {Link} from "react-router-dom";
import '../css/BoardList.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {boardList} from "../Data";

function BoardList() {
    const [dataList, setDataList] = useState([]); // 가져올 리스트

    //get 방식으로 데이터 불러오기
    // const getBoardList = async () => {
    //     const response = await (await axios.get("http://localhost:3000/write")).data;
    //     setBoardList(response.data);
    // }

    useEffect(() => {
        setDataList(boardList);
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
                {boardList ?
                    boardList.map((board) => {
                        return (
                            <tr key={board.id}>
                                <th>
                                    <input type={"checkbox"}/>
                                </th>
                                <th>{board.id}</th>
                                <th><Link to={"/detail/" + board.id}>{board.title}></Link></th>
                                <th>{board.author}</th>
                                <th>{board.createDate}</th>
                            </tr>
                        );
                    }) : ""}
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