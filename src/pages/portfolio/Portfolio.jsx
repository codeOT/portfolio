import '../../pages/portfolio/Portfolio.css'

import easyBank from '../../assets/easyBank.png'
import manage from '../../assets/manage.png'
import huddle from '../../assets/huddle.png'
import acme from '../../assets/acme.png'
import portfolio from '../../assets/portfolio.png'

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
            <a href="https://github.com/codeOT/bootststrap-blog-2"> code page</a>
        </div>
    </div>

    <div className="box">
        <img src={manage} alt="" />
        <div className="content">
            <h3>Manage Landing Page</h3>
            <p>first tailwind css project. fully responsive</p>
            <a href="https://manage-landing-page-01.vercel.app/">visit demo site</a>
            <a href="https://github.com/codeOT/Manage-Landing-Page"> code page</a>
        </div>
    </div>
    
     {/* <div className="box">
        <img src="images/newImg.png" alt="">
        <div className="content">
            <h3>blog website</h3>
            <p>a blog website template..not responsive</p>
            <a href="#">visit demo site</a>
        </div>
    </div>  */}

    <div className="box">
        <img src={huddle} alt="" />
        <div className="content">
            <h3>bootstrap project</h3>
            <p>clean bootstrap project with some css..fully responsive</p>
            <a href="https://codeot.github.io/bootststrap-blog-2/">visit demo site</a>
            <a href="https://github.com/codeOT/bootststrap-blog-2"> code page</a>
        </div>
    </div>

    <div className="box">
        <img src={acme} alt="" />
        <div className="content">
            <h3>acme acme-photograghy project</h3>
            <p>a photography site clone..fully responsive</p>
            <a href="https://codeot.github.io/acme-photograghy/">visit demo site</a>
            <a href="https://github.com/codeOT/bootststrap-blog-2"> code page</a>
        </div>
    </div>

    <div className="box">
        <img src={portfolio} alt="" />
        <div className="content">
            <h3>Oni Toheeb Damilare Portfolio website</h3>
            <p>html css and JavaScript..fully responsive</p>
            <a href="https://codeot.github.io/acme-photograghy/">visit demo site</a>
            <a href="https://github.com/codeOT/bootststrap-blog-2"> code page</a>
        </div>
    </div>

</div>



</section>
    </div>
  )
}

export default Portfolio