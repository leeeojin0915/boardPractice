import {Link} from "react-router-dom";
import '../css/BoardWrite.css';

function BoardWrite(){

    return(
        <>
            <div className="container">
                <form >
                    <label htmlFor="fname">제목</label>
                    <input type="text" value={title} placeholder="제목"/>

                        <label htmlFor="lname">작성자</label>
                        <input type="text" value={author} readOnly/>

                        <label htmlFor="subject">내용</label>
                        <textarea id="subject" value={content}
                                  style={{height:"300px"}}></textarea>

                    <Link to='/'>
                        <button className='submit'>등록</button>
                    </Link>
                </form>
            </div>

        </>
    )
}
export default BoardWrite;