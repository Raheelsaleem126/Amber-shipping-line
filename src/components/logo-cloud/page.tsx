

import Marquee from "react-fast-marquee";
export default function LogoCloud() {
	return (
		<>
			<div className="section-logo-cloud container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
				<div className="container">
					<h5 className="text-500 mb-5 text-center">Trusted by great companies</h5>
					<div className="carouselTicker carouselTicker-right">
						<ul className="carouselTicker__list pb-4">
							<Marquee direction="right">
								<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img className="filter-invert" src="/assets/img/partners/partner1.png" alt="infinia" />
								</li>
								<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/img/partners/partner2.png" alt="infinia" />
								</li>
								<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/img/partners/partner3.png" alt="infinia" />
								</li>
								<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
									<img src="/assets/img/partners/partner4(1).png" alt="infinia" />
								</li>
							<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
											<img className="filter-invert" src="/assets/img/partners/partner5.png" alt="infinia" />
										</li>
										<li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
											<img className="filter-invert" src="/assets/img/partners/partner6.png" alt="infinia" />
										</li>
										{/* <li className="carouselTicker__item bg-white py-3 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2">
											<img className="filter-invert" src="/assets/img/partners/partner7.png" alt="infinia" />
										</li> */}
							</Marquee>
						</ul>
					</div>
					
				</div>
			</div>

		</>
	)
}
