import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../components/Avatar';

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=40&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" />
            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/AndersonMerten.png" />
                <strong>Anderson Merten</strong>
                <span>Junior developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Edite seu perfil
                </a>
            </footer>
            
        </aside>
    );
}