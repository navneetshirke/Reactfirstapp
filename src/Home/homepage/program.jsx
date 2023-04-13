import React from 'react'
import Header from "./index_header";

export default function program() {
	return (
		<div>

			<Header />

			<section id="portfolio" className="portfolio mt-15">
				<div className="container" data-aos="fade-up">
					<div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
						
						<div className="col-lg-4 col-md-6 portfolio-item filter-card">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Card 1</h4>
								<p>Card</p>
								<a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-card">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Card 1</h4>
								<p>Card</p>
								<a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
							</div>
						</div>

						<div className="col-lg-4 col-md-6 portfolio-item filter-card">
							<div className="portfolio-img"><img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" /></div>
							<div className="portfolio-info">
								<h4>Card 1</h4>
								<p>Card</p>
								<a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus" /></a>
								<a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link" /></a>
							</div>
						</div>
						
					</div>
				</div>
			</section>

		</div>
	)
}