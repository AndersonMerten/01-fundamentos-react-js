import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import './global.css';
import styles from './App.module.css';
import carla from "./components/User";


export function App() {

  const posts = [
    {
      id: 1,
      author:{
        avatarUrl: "https://github.com/AndersonMerten.png",
        name:"Anderson Merten",
        role:"Junior Developer"
      },
      content: [
        {type: "paragraph", content: "Mussum Ipsum, cacilds vidis litro abertis."},
        {type: "paragraph", content: "Quem num gosta di mé, boa gentis num é."},
        {type: "paragraph", content: "Suco de cevadiss deixa as pessoas mais interessantis."},
        {type: "paragraph", content: "Atirei o pau no gatis, per gatis num morreus."},
        {type: "paragraph", content: "Mé faiz elementum girarzis, nisi eros vermeio."},
        {type: "paragraph", content: "clique pra saber mais"},
        {type: "link", content: "mussumipsum.com/"}
      ],
      publishedAt: new Date('2025-04-02 11:51:00')
    },
    {
      id: 2,
      author:{
        avatarUrl: "https://github.com/WilliamParlow.png",
        name:"Willian Parlow",
        role:"Senior Developer"
      },
      content: [
        {type: "paragraph", content: "Mussum Ipsum, cacilds vidis litro abertis."},
        {type: "paragraph", content: "Quem num gosta di mé, boa gentis num é."},
        {type: "paragraph", content: "Suco de cevadiss deixa as pessoas mais interessantis."},
        {type: "paragraph", content: "Atirei o pau no gatis, per gatis num morreus."},
        {type: "paragraph", content: "Mé faiz elementum girarzis, nisi eros vermeio."},
        {type: "paragraph", content: "clique pra saber mais"},
        {type: "link", content: "mussumipsum.com/"}
      ],
      publishedAt: new Date('2025-04-01 11:51:00')
    }

  ]

  
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>{
            return (
            <Post
              key = {post.id}
              author = {post.author}
              content = {post.content}
              publishedAt = {post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </div>
  )
}

