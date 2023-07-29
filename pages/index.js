import * as React from 'react';
import withSession from '../lib/sesion';
import { Header } from '../components/header';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ResponsiveAppBar({ user }) {
  return(
    <>
      <Header üser={user}></Header>
      hello world!!

    </>
  )
}

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  if (user === undefined) {
    return { props: {user:null} };
  }
  console.log(user);
  return {
    props: { user: req.session.get("user") },
  }
});