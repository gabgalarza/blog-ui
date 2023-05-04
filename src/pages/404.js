import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';

export default function NotFoundPage(){
  return (
    <Layout>
      <section className="section">
          <div className="container">
            <div className="content">
              <h1>Page Not Found</h1>
              <div>This route could not be found.. the sadness.</div>
              <br/>
              <div>Try heading back to the homepage <Link className='has-text-primary' to='/'>here</Link></div>
            </div>
          </div>
        </section>
    </Layout>
  );
}
