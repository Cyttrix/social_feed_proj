const MovieList = ({ posts = [] }) => {
    
    const postItems = posts.map((post) => <div>{post.user} {post.text}</div>);
    return ( 
    <div>
        <h4>Feed</h4>
        <div>
           {postItems}
        </div>
    </div> );
}
 
export default MovieList;