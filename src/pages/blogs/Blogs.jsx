import '../blogs/Blogs.css'
import code from '../../assets/code.jpg'
import newCode from '../../assets/newCode.jpg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser } from '@fortawesome/free-solid-svg-icons'

function Blogs() {
    return (
        <div>
            <section class="blogs">

                <h1 className="heading"> <span>my</span> blogs </h1>

                <div className="box-container">

                    <div className="box">
                        <div class="image">
                            <a href="https://otd17.hashnode.dev/do-i-need-javascript-on-my-website">
                                <img src={code} alt="" /></a>
                        </div>
                        <div className="content">
                            <div className="icons">

                                <a href="https://otd17.hashnode.dev/do-i-need-javascript-on-my-website"> oni toheeb damilare </a>
                            </div>
                            <h3>Do I need JavaScript on my website??</h3>
                            <p>I get this questions from people why they have to use JavaScript on there web pages...</p>
                            <a href="https://otd17.hashnode.dev/do-i-need-javascript-on-my-website" class="btn" title="Read more on Hashnode"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <a href="https://otd17.hashnode.dev/what-new-web-developers-should-know">
                                <img src={newCode} alt="" /> </a>
                        </div>
                        <div className="content">
                            <div class="icons">

                                <a href="https://otd17.hashnode.dev/do-i-need-javascript-on-my-website"> <i className="fas fa-user"></i> oni toheeb damilare </a>
                            </div>
                            <h3>What New Web Developers Should Know!!</h3>
                            <p>web development</p>
                            <a href="https://otd17.hashnode.dev/what-new-web-developers-should-know" class="btn" title="Read more on Hashnode"> read more <i class="fas fa-link"></i> </a>
                        </div>
                    </div>

                    {/* <div class="box">
        <div class="image">
            <img src="images/blog3.jpg" alt="">
        </div>
        <div class="content">
            <div class="icons">
                
                <a href="#"> <i class="fas fa-user"></i> oni toheeb damilare </a>
            </div>
            <h3>blog title goes here.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, illum.</p>
            <a href="#" class="btn"> read more <i class="fas fa-link"></i> </a>
        </div>
    </div> */}



                </div>

            </section>
        </div>
    )
}

export default Blogs