import Head from 'next/head'
import LandingLayout from '../components/LandingLayout/LandingLayout';
import {ResetStyles} from '../ResetStyles';

export default function index(){
  return(
      <>
        <Head>
              <title>Christian Lagasca</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
              <meta name="robots" content="index, follow"/>
              <meta charSet="utf-8"/>
              <meta name="author" content="christian lagasca"/>
              <meta name="description" content="Christian Lagasca"/>
              <meta name="keywords" content="Christian Lagasca,christian lagasca,toronto,Software Developer,Front-End,Full-Stack,Software Developer - Christian Lagasca"/>
              <meta property="og:image" content="https://images.unsplash.com/photo-1559437380-537153517019?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></meta>
              <meta property="og:site_name" content="Christian Lagasca"/>
              <meta name="theme-color" content={"#D4737E"}/>
              <meta httpEquiv="cache-control" content="cache"/>
              <link href="https://fonts.googleapis.com/css?family=Poppins:400,700,900&display=swap" rel="stylesheet"/>
        </Head>
        <LandingLayout/>
        <ResetStyles/>
      </>
  )
}

