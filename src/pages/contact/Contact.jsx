import '../contact/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { useForm, ValidationError } from '@formspree/react';



function Contact() {
  
  const [state, handleSubmit] = useForm("mgeqzqea");
  if (state.succeeded) {
      return <p className='sub'>Thanks for your submission!!!</p>;
  }

  return (
    <div>
      <section class="contact">

        <h1 class="heading"> contact <span>me</span> </h1>

        <div class="row">

          <div class="info-container">

            <h1>get in touch</h1>

            <p>contact me through :-</p>

            <div class="box-container">

              <div class="box">
                <FontAwesomeIcon icon={faMap} className="icon"></FontAwesomeIcon>
                <div class="info">
                  <h3>address :</h3>
                  <p>1b peter ajuebon street, command
                    ipaja, lagos nigeria</p>
                </div>
              </div>

              <div class="box">
                <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
                <div class="info">
                  <h3>email :</h3>
                  <p>toheeboni@gmail.com</p>
                </div>
              </div>

              <div class="box">
              <FontAwesomeIcon icon={faPhone} className="icon"></FontAwesomeIcon>
                <div class="info">
                  <h3>number :</h3>
                  <p>(+234) 09 589 679 99</p>
                </div>
              </div>

            </div>

            <div class="share">
              <a href="https://github.com/codeOT"><FontAwesomeIcon icon={faGithub} className="icon"></FontAwesomeIcon></a>  
              <a href="https://www.linkedin.com/in/oni-toheeb-damilare-51819622b"><FontAwesomeIcon icon={faLinkedin} className="icon"></FontAwesomeIcon></a>
             </div>

          </div>

          <form method="post" onSubmit={handleSubmit}>

            <div class="inputBox">
              <input type="text" name="name" id="fullName" placeholder="Name" required />
                <input type="email" name="email" id="email_id" placeholder="Email address" required />
                </div>



                <textarea placeholder="your message" name="message" id="message" cols="30" rows="10" required></textarea>

                <input type="submit" value="send message" class="btn" disabled={state.submitting} />
                <ValidationError errors={state.errors} />
                </form>

            </div>

          </section>
        </div>
        )
}

        export default Contact