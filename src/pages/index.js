import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="bgimg-1">
      <div className="caption">
        <span className="border">HELLO</span>
      </div>
    </div>

    <div style={{color: '#444',backgroundColor:'#FFFEDF50',padding:'50px 80px',textAlign: 'justify'}}>
      <h3 style={{textAlign:'center'}}>Front end developer</h3>
      <p>I'm a Senior Full Stack Developer​, with experience working on Web, mainly in Front End development with React using Redux and JS ES6, and Back End development with Grails and Hibernate, With experience in maintenance, development and design of web applications.</p>
      <p>Worked in CMMi L5 and Agile projects using Scrum; understanding the use and benefits of each one.</p>
      <p>And constantly interest in technologies/frameworks for agile development applying CoC, DRY and KISS patterns and practices.</p>
    </div>


    <div className="bgimg-2">
      <div className="caption">
        <span className="border">EXPERTISE:</span>
      </div>
    </div>

    <div style={{position:'relative'}}>
      <div className='content'>
        <ul>
          <li>React – Redux Front End Development</li>
          <li>Java Developer</li>
          <li>Application Design</li>
          <li>Full Stack Development</li>
          <li>Agile Methodology</li>
        </ul>
      </div>
    </div>

    <div className="bgimg-3">
      <div className="caption">
        <span className="border">INTEREST:</span>
      </div>
    </div>

    <div style={{position:'relative'}}>
      <div className='content2'>
      <ul>
          <li>Coffee</li>
          <li>Woodworking</li>
          <li>Movies</li>
          <li>-----------------</li>
          <li>Functional Programing</li>
          <li>NoSQL/MongoDB/</li>
          <li>Containers/Dockers/Kubernetes</li>
        </ul>
      </div>
    </div>

    <div className="bgimg-1">
      <div className="caption">
        <span className="border">CONTACT ME:</span>
        <p></p>
        <span className="border"><a target="blank" title="Twitter" rel="noopener" href="https://twitter.com/juniormty/"><svg width="25" height="20" viewBox="0 0 25 20" xmlns="http://www.w3.org/2000/svg"><path d="M24.52 2.433c-.903.4-1.872.67-2.89.792 1.04-.623 1.836-1.61 2.212-2.783-.972.576-2.05.995-3.194 1.22C19.73.685 18.423.074 16.976.074c-2.78 0-5.03 2.252-5.03 5.03 0 .394.044.778.13 1.146-4.18-.21-7.888-2.212-10.37-5.255-.432.742-.68 1.607-.68 2.528 0 1.746.888 3.285 2.238 4.187-.825-.026-1.6-.252-2.28-.63v.065c0 2.437 1.735 4.47 4.036 4.932-.422.115-.866.177-1.325.177-.324 0-.64-.032-.947-.09.64 1.998 2.498 3.452 4.7 3.493-1.722 1.35-3.89 2.153-6.248 2.153-.406 0-.806-.024-1.2-.07C2.226 19.167 4.87 20 7.71 20c9.254 0 14.314-7.665 14.314-14.313 0-.218-.005-.435-.015-.65.982-.71 1.835-1.596 2.51-2.604" fill="#876147" fill-rule="evenodd"></path></svg></a></span>
        <span className="border"><a target="blank" title="Instagram" rel="noopener" href="https://www.instagram.com/juniormtty/"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#876147" fill-rule="evenodd"><path d="M10 1.804c2.67 0 2.985.01 4.04.06.974.043 1.504.206 1.856.343.466.18.8.398 1.15.748.35.35.566.683.747 1.15.137.35.3.88.344 1.855.048 1.055.06 1.37.06 4.04s-.012 2.985-.06 4.04c-.044.974-.207 1.504-.344 1.856-.18.466-.398.8-.748 1.15-.35.35-.683.566-1.15.747-.35.137-.88.3-1.855.344-1.054.048-1.37.06-4.04.06s-2.986-.012-4.04-.06c-.974-.044-1.504-.207-1.856-.344-.466-.18-.8-.398-1.15-.748-.35-.35-.566-.683-.747-1.15-.137-.35-.3-.88-.344-1.855-.048-1.055-.06-1.37-.06-4.04s.012-2.985.06-4.04c.044-.974.207-1.504.344-1.856.18-.466.398-.8.748-1.15.35-.35.683-.566 1.15-.747.35-.137.88-.3 1.855-.344 1.055-.048 1.37-.06 4.04-.06m0-1.8c-2.715 0-3.055.012-4.122.06-1.064.05-1.79.218-2.426.465-.658.255-1.215.597-1.77 1.153-.557.557-.9 1.114-1.154 1.772C.28 4.088.112 4.814.063 5.878.015 6.945.003 7.285.003 10s.012 3.055.06 4.122c.05 1.064.218 1.79.465 2.426.255.658.597 1.215 1.153 1.77.557.557 1.114.9 1.772 1.154.636.247 1.362.416 2.426.465 1.067.048 1.407.06 4.122.06s3.055-.012 4.122-.06c1.064-.05 1.79-.218 2.426-.465.658-.255 1.215-.597 1.77-1.153.557-.557.9-1.114 1.154-1.772.247-.636.416-1.362.465-2.426.048-1.067.06-1.407.06-4.122s-.012-3.055-.06-4.122c-.05-1.064-.218-1.79-.465-2.426-.255-.658-.597-1.215-1.153-1.77-.557-.557-1.114-.9-1.772-1.154-.636-.247-1.362-.416-2.426-.465C13.055.015 12.715.003 10 .003"></path><path d="M10 4.866c-2.835 0-5.134 2.3-5.134 5.134 0 2.835 2.3 5.134 5.134 5.134 2.835 0 5.134-2.3 5.134-5.134 0-2.835-2.3-5.134-5.134-5.134zm0 8.466c-1.84 0-3.332-1.492-3.332-3.332 0-1.84 1.492-3.332 3.332-3.332 1.84 0 3.332 1.492 3.332 3.332 0 1.84-1.492 3.332-3.332 3.332zM16.536 4.664c0 .662-.537 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.663.538-1.2 1.2-1.2.663 0 1.2.537 1.2 1.2"></path></g></svg></a></span>
        <span className="border"><a title="Linked In" href="https://www.linkedin.com/in/joseluisjuniorgarza" target="_blank" rel="noopener"><svg width="19" height="19" viewBox="0 0 19 19" version="1.1" xmlns="http://www.w3.org/2000/svg"><g fill="#876147" stroke="none" stroke-width="1" fill-rule="evenodd"><path d="M2.377 0C3.687 0 4.75 1.025 4.75 2.287c0 1.263-1.063 2.288-2.373 2.288C1.06 4.575 0 3.55 0 2.287 0 1.025 1.06 0 2.377 0zM.327 19h4.1V6.31h-4.1V19zM6.65 6.022h3.796v1.774h.055c.53-1.02 1.822-2.096 3.75-2.096 4.01 0 4.75 2.687 4.75 6.182V19h-3.96v-6.312c0-1.504-.026-3.44-2.06-3.44-2.06 0-2.374 1.64-2.374 3.333V19H6.65V6.022"></path></g></svg></a></span>
        
      </div>
    </div>
    <div class="site-footer__get-in-touch__social-media">
                        
                    </div>

  </Layout>
)

export default IndexPage
