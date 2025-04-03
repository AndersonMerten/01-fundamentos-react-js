import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import{Avatar} from './Avatar';
import { useState } from 'react';

export function Comment(props){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        props.deleteComment(props.content);
    }

    const handleLikeComment=()=>{
        setLikeCount((state) =>{
            return state+1;
        });
    }


    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/andersonmerten.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anderson Merten</strong>
                            <time title="2 de abril às 16:00" dateTime="2025-04-02 16:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment}title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment} type="button">
                        <ThumbsUp  size={24} /> aplaudir <span/> {likeCount}
                    </button>
                </footer>
            </div>
            
        </div>
    )
}