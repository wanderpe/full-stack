
import Post from './components/post';
import styles from './page.module.css'
import prisma from '@/lib/prisma'



async function getPost() {
  const post = await prisma.post.findMany({
    where: {
      published: true
    },
    include: {
      author: {
        select: {name: true}
      }
    }
  })
  return post;
}


export default async function Home() {
  const post = await getPost();
  return (
    <main className={styles.main}>
      <h1>Feed</h1>
      {
        post.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author?.name}

            ></Post>
          )

        })
      }
    </main>
  )
}
