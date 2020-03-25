import Head from 'next/head'

// We can import TS modules from the path based import
import { Cool } from '@css/cool';
import { NotCool } from '@css/notcool';

// We Cannot import the css from the paths based import
// import '@css/style.css'; // Uncommenting will cause a "Module not found" error

// But we can using a relative path back to the css file
import '../css/style.css'

const cool: Cool & NotCool = {
  name: 'joe',
  age: 1
}

function MyApp({ Component, pageProps }) {
 
  return (
    <Component {...pageProps}/>
  )
}

export default MyApp
