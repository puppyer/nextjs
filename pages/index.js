import Head from 'next/head';
import Link from 'next/link';
function Home(){
  return (
    <div>
      <Head>
        <title>nextjs study</title>
        <meta name="viewport" content="initial-scale=1.0,width=device-width"/>
      </Head>
      <h1>Welcome to nextjs!</h1>
      <Link href="/link">
        <a>jump to another page!</a>
      </Link>
    </div>
  )
}
export default Home;