import AboutImg from '../assets/img/aiub.jpg';

function About()
{
    return (
        <div>
            
    {/* <!-- ======= About Section ======= --> */}
    <section id="about" class="about">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <img src={AboutImg} class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>American International University-Bangladesh</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
            </p>
            <div class="row">
              <div class="col-md-6">
                <i class="bx bx-receipt"></i>
                <h4>Admission Going On</h4>
                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
              </div>
              <div class="col-md-6">
                <i class="bx bx-cube-alt"></i>
                <h4>Important</h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    {/* <!-- End About Section --> */}
        </div>
    )
}

export default About;