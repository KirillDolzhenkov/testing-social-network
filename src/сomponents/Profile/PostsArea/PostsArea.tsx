import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import styleModule from "./PostsArea.module.css";
import {PostType} from "../../../redux/store";


type PostsAreaPropsType = {
    updateNewPostText: (text: string) => void
    addPost: (text: string) => void
    posts: Array<PostType>
    newPostText: string
}

const PostsArea: React.FC<PostsAreaPropsType> = (props) => {

    let postsElements = props.posts
        .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const onAddPost = () => {
        if(props.newPostText.trim()){
            props.addPost(props.newPostText)
        }
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onAddPost();
        }
    }

    return (
        <div className={styleModule.postBlock}>
            <h3>My posts</h3>
            <hr/>
            <div>
                <textarea
                    value={props.newPostText}
                    onChange={onPostChange}
                    onKeyPress={onKeyPressHandler}
                    placeholder="Write something"
                />
            </div>
            <div>
                <button onClick={onAddPost}>Send</button>
            </div>
            <div className={styleModule.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export {
    PostsArea
}
