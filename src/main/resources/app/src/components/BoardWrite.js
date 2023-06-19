import '../css/BoardWrite.css';
import {useState} from "react";
import axios from "axios";

function BoardWrite() {
    const [title, setTitle] = useState(""); //제목
    const [author, setAuthor] = useState(""); //작성자
    const [content, setContent] = useState(""); //내용

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const changeAuthor = (event) => {
        setAuthor(event.target.value);
    }

    const changeContent = (event) => {
        setContent(event.target.value);
    }

    //Post 방식으로 등록
    const createBoard = async () => {
        const req = {
            id: localStorage.getItem("id"),
            title: title,
            author: author,
            content: content
        }

        await axios.post("http://localhost:3000/write", req)
            .then((response) => {
                alert("등록완료")
                console.log(response);
            })
            .catch((error) => {
                alert("에러");
                console.log(error);
            })
    }

    return (
        <>
            <div className="container">
                <label>번호</label>
                <input type="text" value={localStorage.getItem("id")} readOnly/>
                <label>제목</label>
                <input type="text" value={title} onChange={changeTitle} placeholder="제목"/>

                <label>작성자</label>
                <input type="text" value={author} onChange={changeAuthor}/>

                <label>내용</label>
                <textarea id="subject" value={content} onChange={changeContent}
                          style={{height: "300px"}}></textarea>

                <button className='submit' onClick={createBoard}>등록</button>
            </div>

        </>
    )
}
export default BoardWrite;