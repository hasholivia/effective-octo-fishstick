import { AppProps } from '$fresh/server.ts';
import { Head } from '$fresh/runtime.ts';

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Olivia Portfolio v2</title>
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <Component />
    </>
  )
}