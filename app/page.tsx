// maps to root `/` URL
import variables from './variables.module.scss';

function Home() {
  return <h1 style={{ color: variables.primaryColor }}>Hello, Next.js!</h1>;
}

export default Home;
