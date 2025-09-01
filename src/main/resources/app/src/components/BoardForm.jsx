import {useEffect, useRef, useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import axios from "../config/config";
import '../css/BoardWrite.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const BoardForm = () => {
    const {boardId} = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // 모드 판별
    const isCreateMode = location.pathname.includes("/create");
    const [mode, setMode] = useState(isCreateMode ? "create" : "view");

    // 게시판 상태
    const [board, setBoard] = useState({
        boardId: "",
        title: "",
        content: "",
        author: "",
        createDate: "",
        updateDate: "",
        boardType:"NOTICE",
        boardTypeName: ""
    });

    // 데이터 가져오기 (view/edit)
    useEffect(() => {
        if (!isCreateMode && boardId) {
            axios.get(`/api/board/detail/${boardId}`)
                .then((res) => setBoard(res.data))
                .catch((err) => console.error(err));
        }
    }, [boardId]);

    // 수정
    const handleChange =(e)=>{
        const {name,value} =e.target;
        setBoard((prev)=>({...prev, [name]:value}));
    };

    const handleCreate=()=>{
        axios.post("/api/board/write",board)
            .then(()=>navigate("/"))
            .catch((err)=>console.error(err));
    }; // 생성

    const handleUpdate=()=>{
        axios.put(`/api/board/update`,board)
            .then(()=>setMode("view"))
            .catch((err)=>console.error(err))
    }; // 수정


    return (
        <div className="container">
            <h2>{mode === "create" ? "게시글 등록" : "게시글 상세"}</h2>
            <table>
                <tbody>
                <tr>
                    {mode ==="view" && <th className="thDetail">번호</th>}
                    <td>
                        {/*{mode === "view" ? (
                            <span>{board.boardId}</span>
                        ) : (
                            <input name="boardId" value={board.boardId ?? ""} onChange={handleChange} readOnly/>
                        )}*/}
                        {mode==="view" && <span>{board.boardId}</span>}
                    </td>
                </tr>
                <tr>
                    <th className="thDetail">제목</th>
                    <td>
                        {mode === "view" ? (
                            <span>{board.title}</span>
                        ) : (
                            <input name="title" value={board.title ?? ""} onChange={handleChange}/>
                        )}
                    </td>
                </tr>
                <tr>
                    <th className="thDetail">작성자</th>
                    <td>
                        {mode === "view" ? (
                            <span>{board.author}</span>
                        ) : (
                            <input name="author" value={board.author ?? ""} onChange={handleChange}/>
                        )}
                        {/*<span>{board.author}</span>*/}
                    </td>
                </tr>
                <tr>
                    <th className="thDetail">내용</th>
                    <td>
                        {mode === "view" ? (
                            <div style={{whiteSpace: "pre-line"}} dangerouslySetInnerHTML={{__html:board.content}}/>
                        ) : (
                            <CKEditor editor={ClassicEditor}
                                name="content"
                                data={board.content}
                                onChange={(event, editor) =>{
                                    const data = editor.getData();
                                    setBoard((prev) =>({
                                        ...prev,
                                        content:data
                                    }));
                                }}
                                style={{height: "600px", width: "100%"}}
                            />
                        )}
                    </td>
                </tr>
                </tbody>
            </table>

            <div style={{marginTop: "20px"}}>
                {mode === "view" && <button className="submit" onClick={() => setMode("edit")}>수정</button>}
                {mode === "edit" && <button className="submit" onClick={handleUpdate}>저장</button>}
                {mode === "create" && <button className="submit" onClick={handleCreate}>등록</button>}
                <button className="list" onClick={() => navigate("/")}>목록</button>
            </div>
        </div>
    );
};

export default BoardForm;