import react ,{Component} from 'react';

import Clients1 from '../assets/img/clients/client-1.png';
import Clients2 from '../assets/img/clients/client-2.png';
import Clients3 from '../assets/img/clients/client-3.png';
import Clients4 from '../assets/img/clients/client-4.png';
import Clients5 from '../assets/img/clients/client-5.png';
import Clients6 from '../assets/img/clients/client-6.png';


function Clients()
{
    return (
        <div>
            {/* <!-- ======= Clients Section ======= --> */}
    <section id="clients" class="clients section-bg">
      <div class="container">

        <div class="row">

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Clients1} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Clients2} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Clients3} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Clients4} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Clients5} class="img-fluid" alt=""/>
          </div>

          <div class="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
            <img src={Clients6} class="img-fluid" alt=""/>
          </div>

        </div>

      </div>
    </section>

    {/* end */}
        </div>
    )
}

export default Clients;