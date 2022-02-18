import React from 'react';
import myposts from './MyPosts.module.css';
import Posts from './Posts/Post';

const MyPosts = (props) => {
    const postsElement = props.posts.map(p => <Posts message={p.message} likesCount={p.likeCount}/>);

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let value = e.target.value;
        props.updateNewPostValue(value);
    }

    return (
        <div className={myposts.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea
                    onChange={ onPostChange }
                    value={props.newPostText}
                />
                <button onClick={ onAddPost }>Add post</button>
            </div>
            <div className={myposts.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;