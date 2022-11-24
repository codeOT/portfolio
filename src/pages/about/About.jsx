import cv from '../../assets/Oni Toheeb Damilare CV .pdf'
import '../about/About.css'
import html from '../../assets/icon-1.png'
import cs from '../../assets/icon-2.png'
import js from '../../assets/icon-3.png'
import r from '../../assets/icon-6.png'
import boot from '../../assets/icon-7.png'
import tailwind from '../../assets/tailwind.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div>
      <section className="about">

        <h1 className="heading"> about <span>me</span> </h1>

        <div className="row">

          <div className="info-container">

            <h1>personal info</h1>

            <div className="box-container">

              <div className="box">
                <h3> <span>name : </span> oni toheeb damilare </h3>

                <h3> <span>email : </span> toheeboni@gmail.com </h3>
                <h3> <span>address : </span> 1b peter ajuebon street, ipaja
                  command, lagos nigeria.</h3>
              </div>

              <div className="box">
                <h3> <span>freelance : </span> available </h3>
                <h3> <span>skill : </span> front-end </h3>
                <h3> <span>experience : </span> 1 year + </h3>
                <h3> <span>language : </span> English, Yoruba, Pidgin </h3>
              </div>

            </div>

            <a href={cv} className="btn" download> download resume <FontAwesomeIcon icon={faDownload} className='icon' ></FontAwesomeIcon> </a>

          </div>

          <div className="count-container">

            <div className="box">
              <h3>1+</h3>
              <p>years of experience</p>
            </div>

            <div className="box">
              <h3>10+</h3>
              <p>project completed</p>
            </div>

          </div>

        </div>
      </section>

      <section className="skills">

        <h1 className="heading"> <span>my</span> skills </h1>

        <div className="box-container">
          <div className="box">
            <img src={html} alt="" />
              <h3>HTML 5</h3>
          </div>
          <div className="box">
            <img src={cs} alt="" />
              <h3>CSS 3</h3>
          </div>
          <div className="box">
            <img src={boot} alt="" />
              <h3>Bootstrap 5</h3>
          </div>
          <div className="box">
            <img src={js} alt="" />
              <h3>Javascript</h3>
          </div>

          <div className="box">
            <img src={r} alt="" />
              <h3>react.js</h3>
          </div>

          <div className="box">
            <img src={tailwind} alt="" />
              <h3>TailWind CSS</h3>
          </div>
        </div>

      </section>


      <section className="education">

        <h1 className="heading"> <span>my</span> education </h1>

        <div className="box-container">

          <div className="box">
            <FontAwesomeIcon icon={faGraduationCap} className='icon'></FontAwesomeIcon>
            <span>2017 - 2018</span>
            <h3>Musaroq Computer Traning Center</h3>
            <p>COMPUTER ENGINEERING</p>
          </div>

          <div className="box">
          <FontAwesomeIcon icon={faGraduationCap} className='icon'></FontAwesomeIcon>
            <span>2018 - present</span>
            <h3>Olusegun Agagu State University of Science And Technology</h3>
            <p>BACHELOR OF TECHNOLOGY / COMPUTER SCIENCE</p>
          </div>

          <div className="box">
          <FontAwesomeIcon icon={faGraduationCap} className='icon'></FontAwesomeIcon>
            <span>2022 january - present</span>
            <h3>720 degree innovation hub</h3>
            <p>front-end development intern</p>
          </div>


        </div>

      </section>

    </div>
  )
}

export default About