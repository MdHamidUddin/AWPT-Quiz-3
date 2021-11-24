import Portfolio1 from '../assets/img/portfolio/portfolio-1.jpg';
import Portfolio2 from '../assets/img/portfolio/portfolio-2.jpg';
import Portfolio3 from '../assets/img/portfolio/portfolio-3.jpg';
import Portfolio4 from '../assets/img/portfolio/portfolio-4.jpg';
import Portfolio5 from '../assets/img/portfolio/portfolio-5.jpg';
import Portfolio6 from '../assets/img/portfolio/portfolio-6.jpg';
import Portfolio7 from '../assets/img/portfolio/portfolio-7.jpg';
import Portfolio8 from '../assets/img/portfolio/portfolio-8.jpg';
import Portfolio9 from '../assets/img/portfolio/portfolio-9.jpg';




function Portfolio()
{
    return(
        <div>
                {/* <!-- ======= Portfolio Section ======= --> */}
    <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" class="filter-active">All</li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
          <img src={Portfolio1} class="img-fluid" alt=""/>
            
            <div class="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href={Portfolio1} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
             <img src={Portfolio2} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href={Portfolio2} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={Portfolio3} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href={Portfolio3} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={Portfolio4} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href={Portfolio4} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={Portfolio5} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href={Portfolio5} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={Portfolio6} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href={Portfolio6} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={Portfolio7} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href={Portfolio7} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={Portfolio8} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href={Portfolio8} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Card 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={Portfolio9} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href={Portfolio9} data-gallery="portfolioGallery" class="portfolio-lightbox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox details-link" title="Portfolio Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* <!-- End Portfolio Section --> */}

        </div>
    )
}

export default Portfolio;