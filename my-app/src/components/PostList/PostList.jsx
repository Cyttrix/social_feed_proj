import "./PostList.css"
import CustomButton from "../CustomButton/CustomButton";

const MovieList = ({ posts = [] }) => {
    
    const postItems = posts.map((post, index) => <div key={index}>{post.user} <br/> {post.text} <CustomButton/> <p/>&nbsp;</div>);
    return ( 
    <div className="outline">
        <h4>Feed</h4>
        <p/>&nbsp;
        <div>
           {postItems}
        </div>
    </div> );
}
 
export default MovieList;