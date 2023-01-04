import '../../pages/portfolio/Portfolio.css'

import easyBank from '../../assets/easyBank.png'
import manage from '../../assets/manage.png'
import huddle from '../../assets/huddle.png'
import acme from '../../assets/acme.png'
import portfolio from '../../assets/portfolio.png'
import sneakers from '../../assets/sneakers.png'
import text from '../../assets/text.png'

function Portfolio() {
  return (
    <div>
      <section className="portfolio">

<h1 class="heading"> <span>my</span> works </h1>

<div className="box-container">

    <div className="box">
        <img src={easyBank} alt="" />
        <div className="content">
            <h3>easy bank clone project </h3>
            <p>use of HTML5 and CSS3, fully responsive </p>
            <a href="https://codeot.github.io/Easybank-demo/">visit demo site</a>
            <a href="https://github.com/codeOT/bootststrap-blog-2"> Github page</a>
        </div>
    </div>

    <div className="box">
        <img src={manage} alt="" />
        <div className="content">
            <h3>Manage Landing Page</h3>
            <p>first tailwind css project. fully responsive</p>
            <a href="https://manage-landing-page-01.vercel.app/">visit demo site</a>
            <a href="https://github.com/codeOT/Manage-Landing-Page"> Github page</a>
        </div>
    </div>
  
    <div className="box">
        <img src={sneakers} alt="" />
        <div className="content">
            <h3>An e-commerce details page</h3>
            <p>A simple details page of an e-commerce web page using JavaScript</p>
            <a href="https://e-commerce-details-page.vercel.app/">visit demo site</a>
            <a href="https://github.com/codeOT/e-commerce-details-page"> Github page</a>
        </div>
    </div>

    <div className="box">
        <img src={huddle} alt="" />
        <div className="content">
            <h3>bootstrap project</h3>
            <p>clean bootstrap project with some css..fully responsive</p>
            <a href="https://codeot.github.io/bootststrap-blog-2/">visit demo site</a>
            <a href="https://github.com/codeOT/bootststrap-blog-2"> Github page</a>
        </div>
    </div>

    <div className="box">
        <img src={acme} alt="" />
        <div className="content">
            <h3>acme acme-photograghy project</h3>
            <p>a photography site clone..fully responsive</p>
            <a href="https://codeot.github.io/acme-photograghy/">visit demo site</a>
            <a href="https://github.com/codeOT/bootststrap-blog-2"> Github page</a>
        </div>
    </div>

    <div className="box">
        <img src={portfolio} alt="" />
        <div className="content">
            <h3>Oni Toheeb Damilare Portfolio website</h3>
            <p>my portfolio website designed with react and CSS3</p>
            <a href="https://portfolio-two-eta-99.vercel.app/">visit site</a>
            <a href="https://github.com/codeOT/portfolio"> Github page</a>
        </div>
    </div>

    <div className="box">
        <img src={text} alt="" />
        <div className="content">
            <h3>Text to speech web app</h3>
            <p>a text to speech web app using JavaScript</p>
            <a href="https://text-to-speech-web-app.vercel.app/">visit demo site</a>
            <a href="https://github.com/codeOT/Text-to-speech-web-app"> Github page</a>
        </div>
    </div>

</div>



</section>
    </div>
  )
}

export default Portfolio