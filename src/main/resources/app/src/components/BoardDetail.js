import {Link} from "react-router-dom";

function BoardDetail() {
    return(
        <>
            <div className="container">
                <form >
                    <label htmlFor="fname">제목</label>
                    <input type="text" id="fname" name="firstname" placeholder="제목"/>

                    <label htmlFor="lname">작성자</label>
                    <input type="text" id="lname" name="lastname"/>

                    <label htmlFor="subject">내용</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."
                              style={{height:"300px"}}></textarea>

                    <Link to='/'>
                        <button className='submit' style={{backgroundColor:"yellowgreen"}}>수정</button>
                    </Link>

                    <Link to='/'>
                        <button className='submit'>목록</button>
                    </Link>
                </form>
            </div>

        </>
        )
}
export default BoardDetail;