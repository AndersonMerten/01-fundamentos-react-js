import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import{Avatar} from './Avatar';

export function Comment(props){

    function handleDeleteComment(){
        props.deleteComment(props.content);
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
                    <button type="button">
                        <ThumbsUp size={24} /> aplaudir <span/> 20
                    </button>
                </footer>
            </div>
            
        </div>
    )
}