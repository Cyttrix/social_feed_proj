const MovieList = ({}) => {
    const posts = [{user: "Jack Torrance", text: "HERES JOHNNY"}, {user: "Freddy Kruger", text: "Sweet Dreams Nancy"}];
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