<template>
  <div>
      <!-- Preloader   open annimation-->
    <div class="preloader">
      <div class="loader">
        <div class="loader-outter"></div>
        <div class="loader-inner"></div>

        <div class="indicator">
          <svg width="16px" height="12px">
            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
      <!-- Preloader   open annimation-->
    <!-- Slider Area -->
    <section class="slider">
  <div class="hero-slider  " >


        <div class="single-slider"     :style="{ backgroundImage: 'url(img/arts/sliders/slider1.jpeg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    We Provide <span>Security</span> Services That You Can
                    <span>Trust!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

        <div class="single-slider"     :style="{ backgroundImage: 'url(img/arts/sliders/slider2.jpeg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    We Provide <span>Security</span> Services That You Can
                    <span>Trust!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search  editicon"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

        <div class="single-slider"     :style="{ backgroundImage: 'url(img/arts/sliders/slider3.jpeg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    {{ $t("We Provide") }} <span>{{ $t("Security") }}</span> {{ $t("Services That You Can") }}
                    <span>{{ $t("Trust") }}!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search  editicon"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

                <!-- End Single Slider -->

        <div class="single-slider"     :style="{ backgroundImage: 'url(img/arts/sliders/slider4.jpeg)' }">

          <div class="container">
            <div class="row">
              <div class="col-lg-7">
                <div class="text">
                  <h1>
                    {{ $t("We Provide") }} <span>{{ $t("Security") }}</span> {{ $t("Services That You Can") }}
                    <span>{{ $t("Trust") }}!</span>
                  </h1>
                  <p>
                  vdsdfvsdfvsdfvda advcdavda adcvdav
                  </p>
                  <div class="button">
                    <nuxt-link to="/search/agent" class="btn">
                      <i class="fa fa-search  editicon"></i> {{ $t("Find An Agent") }}
                    </nuxt-link>
                    <a href="#" class="btn primary">{{ $t("About Us") }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Single Slider -->

      </div>
    </section>
    <!--/ End Slider Area -->


 <!-- Start Schedule Area -->
    <section class="schedule">
      <div class="container">
        <div class="schedule-inner">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
              <!-- single-schedule -->
              <div class="single-schedule first">
                <div class="inner">
                  <div class="icon">
                    <i class="icofont icofont-building"></i>
                  </div>
                  <div class="single-content">
                    <!-- span>Arts</!-->
                    <h4>Build and Buy!</h4>
                    <p>
                        Come on in and build to your heart's desire with a selection of our excellent quality.
                    </p>
                    <p>
                    The average cost to build a brick or stone wall is $5,016, though a typical range is between $2,236 and $8,068. These walls have several uses inside and outside of your home. But before choosing which material you’d like, let’s look at the costs and factors outlined in this guide. 
                    </p>

                    <!-- a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></!-->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
              <!-- single-schedule -->
              <div class="single-schedule middle">
                <div class="inner">
                  <div class="icon">
                    <i class="icofont-prescription"></i>
                  </div>
                  <div class="single-content">
                    <!-- span>Fusce Porttitor</!-->
                    <h4>Brick or Stone Wall Fence Cost per Square Foot</h4>
                    <p>
                      Brick walls cost $10 to $45 per square foot based on thickness and type, while stone walls typically cost $25 to $80 per square foot depending on their thickness and style. Cinder block walls cost $9 to $12 per square foot, while the block cost per linear foot for traditional blocks is $6 to $8. 
                    </p>

                    <h4>Brick Project Costs</h4>

                    <p>
                    <table>
                    <tr>
                    <th>Material</th>
                    <th>Per Square Foot</th>
                    <th>Per Square Meter</th>
                    </tr>
                    <tr>
                    <td>Brick</td>
                    <td>$27–$45</td>
                    <td>$290–$485</td>
                    </tr>
                    <tr>
                    <td>Brick Veneer</td>
                    <td>$10–$30</td>
                    <td>$108–$325</td>
                    </tr>
                    <tr>
                    <td>Mini Brick Veneer Strips</td>
                    <td>$5–$15</td>
                    <td>$55–$160</td>
                    </tr>
                    <tr>
                    <td>Hollow Brick</td>
                    <td>$25–$45</td>
                    <td>$270–$485</td>
                    </tr>
                  </table>
                    </p>

                    <!-- a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></!-->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-12 col-12">
              <!-- single-schedule -->
              <div class="single-schedule last">
                <div class="inner">
                  <div class="icon">
                    <i class="icofont-ui-clock"></i>
                  </div>
                  <div class="single-content">
                    <!-- span>Donec luctus</!-->
                    <h4>Brick and Stone Installation Cost Factors </h4>
                    <ul class="time-sidual">
                      <li class="day"><i class="service-title">Location </i><span>The location where you want your brick or stone wall installed will play a role in the project’s final price. If your land is uneven, difficult to navigate, or more complex to work with than most properties, you’ll pay more in labor fees. </span></li>
                      <li class="day"><i class="service-title">Building Permits </i><span>You’ll need a permit to build a brick or stone wall on your property. But the price will depend on its location, type, and size. On average, building permits cost $100 to $500. </span></li>
                      <li class="day"><i class="service-title">Land Survey</i><span>When building a wall around your property line, you need to know your land’s exact layout to avoid legal or neighborly trouble. Most homeowners spend $350 to $700 on the cost of land surveyor fees. </span></li>
                      <li class="day"><i class="service-title">Drainage Solution</i>  <span>Another factor that will impact your project’s cost is a drainage solution. Your brick or stone wall needs proper drainage to avoid erosions, flooding, or soil-related issues. Drainage solutions cost $2,000 to $5,800 to install.  </span></li>
                      <li class="day"><i class="service-title">Footing and Foundation</i> <span>The actual price you can expect depends on the size and weight of your wall. On average, though, concrete footers can cost $15 to $55 per linear foot. But to ensure your wall’s structural integrity, you may need to hire an engineer. Structural engineer’s rates average $500. To avoid your wall from collapsing under its weight, you’ll need to install a foundation or concrete footer.   </span></li>
                    </ul>
                    <!-- a href="#">LEARN MORE<i class="fa fa-long-arrow-right"></i></!-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--/End Start schedule Area -->

    <!-- Start Feautes -->
    <section class="Feautes section">
      <div class="container">
        <div class="rowpub">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>We Are Always Ready to Help You</h2>
              <img src="img/section-img.png" alt="#" />
              <p>
                We quickly respond to changing resource requirements and employ
                state-of-the-art systems and technologies so we can easily adapt to any
                 situation.
              </p>
            </div>
          </div>
        </div>
        <div class="rowpub">
          <div class="col-lg-4 col-12">
            <!-- Start Single features -->
            <div class="single-features">
              <div class="signle-icon">
                <i class="icofont-handshake-deal"></i>
              </div>
              <h3>Hand-check</h3>
              <p>
                Homeowners use HomeAdvisor to find pros for home projects..
              </p>
            </div>
            <!-- End Single features -->
          </div>
          <div class="col-lg-4 col-12">
            <!-- Start Single features -->
            <div class="single-features">
              <div class="signle-icon">
                <i class="icofont-notebook"></i>
              </div>
              <h3>Project</h3>
              <p>
                When their projects are done, they fill out a short cost survey.
              </p>
            </div>
            <!-- End Single features -->
          </div>
          <div class="col-lg-4 col-12">
            <!-- Start Single features -->
            <div class="single-features last">
              <div class="signle-icon">
                <i class="icofont-money-bag"></i>
              </div>
              <h3>Costs</h3>
              <p>
                We compile the data and report costs back to you.
              </p>
            </div>
            <!-- End Single features -->
          </div>
        </div>
      </div>
    </section>
    <!--/ End Feautes -->

    <!-- Start Fun-facts -->
    <div id="fun-facts" class="fun-facts section overlay">
      <div class="container">
        <div class="rowexperience">
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Fun -->
            <div class="single-fun">
              <i class="icofont-building-alt"></i>
              <div class="content">
                <span class="counter">3468</span>
                <p>Branches</p>
              </div>
            </div>
            <!-- End Single Fun -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Fun -->
            <div class="single-fun">
              <i class="icofont-worker"></i>
              <div class="content">
                <span class="counter">557</span>
                <p>Specialist Workers</p>
              </div>
            </div>
            <!-- End Single Fun -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Fun -->
            <div class="single-fun">
              <i class="icofont-simple-smile"></i>
              <div class="content">
                <span class="counter">4379</span>
                <p>Happy Client</p>
              </div>
            </div>
            <!-- End Single Fun -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Start Single Fun -->
            <div class="single-fun">
              <i class="icofont icofont-table"></i>
              <div class="content">
                <span class="counter">32</span>
                <p>{{ $t("Years of Experience") }}</p>
              </div>
            </div>
            <!-- End Single Fun -->
          </div>
        </div>
      </div>
    </div>
    <!--/ End Fun-facts -->

    <!-- Start Why choose -->
    <section class="why-choose section">
      <div class="container">
        <div class="rowpub">
          <div class="col-lg-12">
            <div class="section-title-one">
              <h2>We Offer Different Services To Improve Your Satisfaction</h2>
              <img src="img/section-img.png" alt="#" />
            </div>
          </div>
        </div>
        <div class="rowpub">
          <div class="col-lg-6 col-12">
            <!-- Start Choose Left -->
            <div class="choose-left">
              <h3>{{ $t("Who We Are") }}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pharetra
                antege vel est lobortis, a commodo magna rhoncus. In quis nisi non emet
                quam pharetra commodo.
              </p>
              <p>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul class="list">
                    <li><i class="fa fa-caret-right"></i>Maecenas vitae luctus nibh.</li>
                    <li><i class="fa fa-caret-right"></i>Duis massa massa.</li>
                    <li><i class="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul class="list">
                    <li><i class="fa fa-caret-right"></i>Maecenas vitae luctus nibh.</li>
                    <li><i class="fa fa-caret-right"></i>Duis massa massa.</li>
                    <li><i class="fa fa-caret-right"></i>Aliquam feugiat interdum.</li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End Choose Left -->
          </div>
          <div class="col-lg-6 col-12">
            <!-- Start Choose Rights -->
            <div class="choose-right">
              <div class="video-image">
                <!-- Video Animation -->
                <div class="promo-video">
                  <div class="waves-block">
                    <div class="waves wave-1"></div>
                    <div class="waves wave-2"></div>
                    <div class="waves wave-3"></div>
                  </div>
                </div>
                <!--/ End Video Animation -->
                <a
                  href="https://www.youtube.com/watch?v=RFVXy6CRVR4"
                  class="video video-popup mfp-iframe"
                  ><i class="fa fa-play"></i
                ></a>
              </div>
            </div>
            <!-- End Choose Rights -->
          </div>
        </div>
      </div>
    </section>
    <!--/ End Why choose -->





    <app-sales-boxes />
 
    <app-featured-products />








    <!-- Start service -->
    <section class="services section">
      <div class="container">
        <div class="rowpub">
          <div class="col-lg-12">
            <div class="section-title-two">
              <h2>Stone Project Costs</h2>
              <img src="img/section-img.png" alt="#" />

            </div>
          </div>
        </div>
        <div class="rowpub">
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
                            <i class="icofont-worker"></i>
              <h4><a href="service-details.html">Rock Wall Cost</a></h4>
              <p>
                Homeowners typically pay $20 to $30 per square foot to install a rock wall. However, the type of stone you want for your wall will impact the actual price you’ll pay. For a rock wall with natural stone tiles, stone workers charge $25 to $50+ per square foot, while stone veneer averages $10 to $25 per square foot.  
              </p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
                            <i class="icofont-worker"></i>
              <h4><a href="service-details.html">Fieldstone Fence or Dry Stack Stone Wall Cost</a></h4>
              <p>
                Installing a fieldstone fence or dry stack stone wall costs $20 to $60 per square foot; factors such as size and stone type will give you a more accurate estimate. 
              </p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
                            <i class="icofont-worker"></i>
              <h4><a href="service-details.html">DIY Brick & Stone Wall Construction vs. Hire a Pro</a></h4>
              <p>
              You can save money on labor costs when building a brick or stone wall, but there isn’t a quick fix for a DIY, and it often leads to removing and replacing the wall. So, this project is better left to the brick and stone wall builders near you.
              </p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
                           <i class="icofont-worker"></i>
              <h4><a href="service-details.html">Accent Wall Cost</a></h4>
              <p>
                It’ll cost $4,000 to $8,000 to install a stone accent wall in your home. Unless your home can support the weight of real stones, your contractor will use stone veneers. If you do want to use real stone, you’ll need to modify your home to handle the load capacity. 
              </p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
                            <i class="icofont-worker"></i>
              <h4><a href="service-details.html">Pillars</a></h4>
              <p>
                Installing stone pillars will cost $1,300 to $3,000 per pillar and can reach up to $5,000 each for solid natural stone. Factors such as stone and frame type, structural integrity, and project size will impact your final cost. 
              </p>
            </div>
            <!-- End Single Service -->
          </div>
          <div class="col-lg-4 col-md-6 col-12">
            <!-- Start Single Service -->
            <div class="single-service">
                            <i class="icofont-worker"></i>
              <h4><a href="service-details.html">Labor Costs</a></h4>
              <p>
                    Masons charge anywhere from $70 to $110 per hour for labor. Carpenters and other general contractors or less experienced masons might charge $30 to $50 per hour. Hourly rates also vary from place to place. Depending on materials, about 60% to 80% of stone wall costs come from labor, especially if you source stones locally.

                    Natural Stone: $15 to $30+ per square foot in labor.

                    Stone Veneer: $10 to $15 per square foot in labor.
              </p>
            </div>
            <!-- End Single Service -->
          </div>
        </div>
      </div>
    </section>
    <!--/ End service -->



 
    <!-- Start clients -->
    <div class="clients overlay">
      <div class="container">
        <div class="rowpub">
          <div class="col-lg-12 col-md-12 col-12">
            <div class="owl-carousel clients-slider">
              <div class="single-clients">
                <img src="img/client1.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client2.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client3.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client4.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client5.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client1.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client2.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client3.png" alt="#" />
              </div>
              <div class="single-clients">
                <img src="img/client4.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/Ens clients -->

    <!-- Start Appointment -->
    <section class="appointment">
      <div class="container">
        <div class="rowpub">
          <div class="col-lg-12">
            <div class="section-title-appointment">
              <h2>We Are Always Ready to Help You. Book An Appointment</h2>
              <img src="img/section-img.png" alt="#" />
            </div>
          </div>
        </div>
        <div class="rowpub">
          <div class="col-lg-6 col-md-12 col-12">
            <form class="form" action="#">
              <div class="row">
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <input name="name" type="text" placeholder="Name" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <input name="email" type="email" placeholder="Email" />
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <input name="phone" type="text" placeholder="Phone" />
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                  <div class="form-group">
                    <input type="text" placeholder="Date" id="datepicker" />
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-12">
                  <div class="form-group">
                    <textarea
                      name="message"
                      placeholder="Write Your Message Here....."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="rowpub">
                <div class="col-lg-5 col-md-4 col-12">
                  <div class="form-group">
                    <div class="button">
                      <button type="submit" class="btn">Book An Appointment</button>
                    </div>
                  </div>
                </div>
                <div class="col-lg-7 col-md-8 col-12">

                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-6 col-md-12">
            <div class="appointment-image">
              <img src="img/contact-img.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Appointment -->

    <!-- Start Newsletter Area -->
    <section class="newsletter section">
      <div class="container">
        <div class="rowpub">
          <div class="col-lg-6 col-12">
            <!-- Start Newsletter Form -->
            <!-- div class="subscribe-text">
              <h6>Sign up for newsletter</h6>
              <p class="">
                Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br />
                homero alterum.
              </p>
            </!-->
            <!-- End Newsletter Form -->
          </div>
          <div class="col-lg-6 col-12">
            <!-- Start Newsletter Form -->
            <div class="subscribe-form">
              <form
                action="mail/mail.php"
                method="get"
                target="_blank"
                class="newsletter-inner"
              >
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  class="common-input"
                  onfocus="this.placeholder = ''"
                  onblur="this.placeholder = 'Your email address'"
                  required=""
                  type="email"
                />
                <button class="btn">Subscribe</button>
              </form>
            </div>
            <!-- End Newsletter Form -->
          </div>
        </div>
      </div>
    </section>
    <!-- /End Newsletter Area -->

    <!-- Footer Area -->
    <footer id="footer" class="footer">
      <!-- Footer Top -->
      <div class="footer-top">
        <div class="container">
          <div class="rowpub">
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-footer">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor sit am consectetur adipisicing elit do eiusmod tempor
                  incididunt ut labore dolore magna.
                </p>
                <!-- Social -->
                <ul class="social">
                  <li>
                    <a href="#"><i class="icofont-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-google-plus"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-twitter"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-vimeo"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="icofont-pinterest"></i></a>
                  </li>
                </ul>
                <!-- End Social -->
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-footer f-link">
                <h2>Quick Links</h2>
                <div class="rowpub">
                  <div class="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>About Us</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>Our
                          Cases</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>Other
                          Links</a
                        >
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6 col-md-6 col-12">
                    <ul>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i
                          >Consuling</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>Finance</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i
                          >Testimonials</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-caret-right" aria-hidden="true"></i>Contact
                          Us</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-footer">
                <h2>Open Hours</h2>
                <p>
                  Lorem ipsum dolor sit ame consectetur adipisicing elit do eiusmod tempor
                  incididunt.
                </p>
                <ul class="time-sidual">
                  <li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
                  <li class="day">Saturday <span>9.00-18.30</span></li>
                  <li class="day">Monday - Thusday <span>9.00-15.00</span></li>
                </ul>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-12">
              <div class="single-footer">
                <h2>Newsletter</h2>
                <p>
                  subscribe to our newsletter to get allour news in your inbox.. Lorem
                  ipsum dolor sit amet, consectetur adipisicing elit,
                </p>
                <form
                  action="mail/mail.php"
                  method="get"
                  target="_blank"
                  class="newsletter-inner"
                >
                  <input
                    name="email"
                    placeholder="Email Address"
                    class="common-input"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Your email address'"
                    required=""
                    type="email"
                  />
                  <button class="button">
                    <i class="icofont icofont-paper-plane"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/ End Footer Top -->
      <!-- Copyright -->
      <div class="copyright">
        <div class="container">
          <div class="rowpub">
            <div class="col-lg-12 col-md-12 col-12">
              <div class="copyright-content">
                <p>
                  © Copyright 2021 | All Rights Reserved by
                  <a href="https://www.wpthemesgrid.com" target="_blank">FELLAZ-ARTS</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--/ End Copyright -->
    </footer>
    <!--/ End Footer Area -->

    <div class="owl-controls">
      <div class="owl-nav">
        <div class="owl-prev" style="">
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div class="owl-next" style="">
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </div>
      </div>
      <div class="owl-dots" style="display: none"></div>
    </div>
  </div>

</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import AppTextlockup from "~/components/AppTextlockup.vue";
import AppSalesBoxes from "~/components/AppSalesBoxes.vue";
import AppFeaturedProducts from "~/components/AppFeaturedProducts.vue";
import ToolsjqueryMixin from "~/mixins/ToolsjqueryMixin";
import ToolsmenuNavMixin from "~/mixins/ToolsmenuNavMixin";
import { mapGetters } from 'vuex'
export default {
    data() {
    return {

    };
  },
  mixins: [ToolsjqueryMixin, ToolsmenuNavMixin],
  components: {
    AppTextlockup,
    AppSalesBoxes,
    AppFeaturedProducts
  },

  computed: {
    ...mapGetters({ 
                      cartCount: 'cartstore/cartCount',
                      user: "auth/authUser",
                      isAuth: "auth/isAuthenticated",
                      isAdmin: "auth/isAdmin",
                      userAuthority: "auth/userAuthority",
                  }),
  },
  mounted: async function  () {
        if(this.user){
         await  this.$store
            .dispatch("cartstore/fetchCartByClientId",this.user.id).then((cart)=>{
                  this.l_cart = [... cart];
            });
    }
    /* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/
    /*=======================================
[Start Activation Code]
=========================================
* Sticky Header JS
* Search JS
* Mobile Menu JS
* Hero Slider JS
* Testimonial Slider JS
* Portfolio Slider JS
* Clients Slider JS
* Single Portfolio Slider JS
* Accordion JS
* Nice Select JS
* Date Picker JS
* Counter Up JS
* Checkbox JS
* Right Bar JS
* Video Popup JS
* Wow JS
* Scroll Up JS
* Animate Scroll JS
* Stellar JS
* Google Maps JS
* Preloader JS
=========================================
[End Activation Code]
=========================================*/
    (function ($) {
      "use strict";
      $(document).on("ready", function () {
        jQuery(window).on("scroll", function () {
          if ($(this).scrollTop() > 200) {
            $("#header .header-inner").addClass("sticky");
          } else {
            $("#header .header-inner").removeClass("sticky");
          }
        });

        /*====================================
    Sticky Header JS
  ======================================*/
        jQuery(window).on("scroll", function () {
          if ($(this).scrollTop() > 100) {
            $(".header").addClass("sticky");
          } else {
            $(".header").removeClass("sticky");
          }
        });

        $(".pro-features .get-pro").on("click", function () {
          $(".pro-features").toggleClass("active");
        });

        /*====================================
    Search JS
  ======================================*/
        $(".search a").on("click", function () {
          $(".search-top").toggleClass("active");
        });

        /*====================================
    Mobile Menu
  ======================================*/
        $(".menu").slicknav({
          prependTo: ".mobile-nav",
          duration: 300,
          closeOnClick: true,
        });

        /*===============================
    Hero Slider JS   here    wiwo
  =================================*/
        $(".hero-slider").owlCarousel({
          loop: true,
          autoplay: true,
          smartSpeed: 500,
          autoplayTimeout: 3500,
          singleItem: true,
          autoplayHoverPause: true,
          items: 1,
          nav: true,
          navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>',
          ],
          dots: false,
        });

        /*===============================
    Testimonial Slider JS
  =================================*/
        $(".testimonial-slider").owlCarousel({
          items: 3,
          autoplay: true,
          autoplayTimeout: 4500,
          smartSpeed: 300,
          autoplayHoverPause: true,
          loop: true,
          merge: true,
          nav: false,
          dots: true,
          responsive: {
            1: {
              items: 1,
            },
            300: {
              items: 1,
            },
            480: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1170: {
              items: 3,
            },
          },
        });

        /*===============================
    Portfolio Slider JS
  =================================*/
        $(".portfolio-slider").owlCarousel({
          autoplay: true,
          autoplayTimeout: 4000,
          margin: 15,
          smartSpeed: 300,
          autoplayHoverPause: true,
          loop: true,
          nav: true,
          dots: false,
          responsive: {
            300: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 2,
            },
            1170: {
              items: 4,
            },
          },
        });

        /*=====================================
    Counter Up JS
  ======================================*/
        $(".counter").counterUp({
          delay: 20,
          time: 2000,
        });

        /*===============================
    Clients Slider JS
  =================================*/
        $(".clients-slider").owlCarousel({
          items: 5,
          autoplay: true,
          autoplayTimeout: 3500,
          margin: 15,
          smartSpeed: 400,
          autoplayHoverPause: true,
          loop: true,
          nav: false,
          dots: false,
          responsive: {
            300: {
              items: 1,
            },
            480: {
              items: 2,
            },
            768: {
              items: 3,
            },
            1170: {
              items: 5,
            },
          },
        });

        /*====================================
    Single Portfolio Slider JS
  ======================================*/
        $(".pf-details-slider").owlCarousel({
          items: 1,
          autoplay: false,
          autoplayTimeout: 5000,
          smartSpeed: 400,
          autoplayHoverPause: true,
          loop: true,
          merge: true,
          nav: true,
          dots: false,
          navText: [
            '<i class="icofont-rounded-left"></i>',
            '<i class="icofont-rounded-right"></i>',
          ],
        });

        /*===================
    Accordion JS
  =====================*/
        $(".accordion > li:eq(0) a").addClass("active").next().slideDown();
        $(".accordion a").on("click", function (j) {
          var dropDown = $(this).closest("li").find("p");
          $(this).closest(".accordion").find("p").not(dropDown).slideUp(300);
          if ($(this).hasClass("active")) {
            $(this).removeClass("active");
          } else {
            $(this).closest(".accordion").find("a.active").removeClass("active");
            $(this).addClass("active");
          }
          dropDown.stop(false, true).slideToggle(300);
          j.preventDefault();
        });

        /*====================================
    Nice Select JS
  ======================================*/
        $("select").niceSelect();

        /*===============================
    Checkbox JS
  =================================*/
        $('input[type="checkbox"]').change(function () {
          if ($(this).is(":checked")) {
            $(this).parent("label").addClass("checked");
          } else {
            $(this).parent("label").removeClass("checked");
          }
        });

        /*===============================
    Right Bar JS
  =================================*/
        $(".right-bar .bar").on("click", function () {
          $(".sidebar-menu").addClass("active");
        });
        $(".sidebar-menu .cross").on("click", function () {
          $(".sidebar-menu").removeClass("active");
        });

        /*=====================
    Video Popup JS
  =======================*/
        $(".video-popup").magnificPopup({
          type: "video",
        });

        /*===================
    Scroll Up JS
  =====================*/
        $.scrollUp({
          scrollText: '<span><i class="fa fa-angle-up"></i></span>',
          easingType: "easeInOutExpo",
          scrollSpeed: 900,
          animation: "fade",
        });

        /*=======================
    Animate Scroll JS
  =========================*/
        $(".scroll").on("click", function (e) {
          var anchor = $(this);
          $("html, body")
            .stop()
            .animate(
              {
                scrollTop: $(anchor.attr("href")).offset().top - 100,
              },
              1000
            );
          e.preventDefault();
        });
      });

      /*====================
  Preloader JS
======================*/
      $(window).on("load", function () {
        $(".preloader").addClass("preloader-deactivate");
      });
    })(jQuery);

    $(".preloader").addClass("preloader-deactivate");
  },
};
</script>

<style scoped lang="scss">



.button {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #e1e7ed;
    }
.section-title h2 {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin-top: 18%;
    margin-bottom: 24px;
    position: relative;
    color: #4a4d6e !important ;
}
.section-title-one h2 {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 8%;
    margin-left: 18%;
    position: relative;
    color: #181c46 !important;
}
.section-title-two h2 {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 8%;
    margin-left: 40%;
    position: relative;
    color: #181c46 !important;
        font-size: 32px !important;
    font-weight: 600 !important;
    text-transform: capitalize !important;
    margin-bottom: 8% !important;
    margin-left: 40% !important;
}
.section-title-appointment h2 {
    font-size: 32px;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 5%;
    margin-left: 22%;
    position: relative;
    color: #f3f3f7 !important ;
}
.service-title{
  font-size: 18px;
  font-weight: 800;
}
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-top:-5%!important;
    margin-left: 31.5%!important;
}
.rowexperience {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-top:-5%!important;
   /* margin-left: 31.5%!important;*/
}
.rowpub {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin-top: -5%!important;

}
div.schedule-inner{
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 1%!important;
    margin-left: -49.2%!important;
}

.slider .owl-carousel .owl-nav div {
  height: 50px;
  width: 50px;
  line-height: 50px;
  text-align: center;
  background: #38308b;
  color: #fff;
  font-size: 26px;
  position: absolute;
  margin: 0;
  transition: all 0.4s ease;
  padding: 0;
  border-radius: 50%;
}

.owl-theme .owl-nav [class*="owl-"] {
  color: #fff;
  font-size: 14px;
  margin: 5px;
  padding: 4px 7px;
  background: #d6d6d6;
  display: inline-block;
  cursor: pointer;
  border-radius: 3px;
}

.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.owl-carousel .owl-nav .owl-prev,
.owl-carousel .owl-nav .owl-next,
.owl-carousel .owl-dot {
  cursor: pointer;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}

.hero-body {
  position: relative;
}
.hero-img {
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.user-avatar {
  display: inline-block;
}
.is-black {
  background-color: black;
}
.title {
  font-weight: bold;
  font-size: 45px;
}
.subtitle {
  /*font-weight: bold;*/
  font-size: 25px;
}
.author-name {
  font-size: 20px;
  font-weight: bold;
}
// hero

// Home page
.links {
  padding-top: 15px;
}

#my-strictly-unique-vue-upload-multiple-image {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.avatarpics {
  margin-top: -70px;
  padding-bottom: 20px;
}
.avatarpics img {
  height: 288px;
  width: 158px;
  margin-top: 88px;
  padding: 5px;
  background: #fff;
  border-radius: 10%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

.columns {
  margin-left: 40%;
  /* margin-right: -0.75rem; */
  margin-top: -0.75rem;
}

.slider1 {
  background-image: url("/img/slider.jpg");
}
.slider2 {
  background-image: url("/img/slider2.jpg");
}
.slider3 {
  background-image: url("/img/slider3.jpg");
}
.imagescontainer {
  margin-left: 18%;
}
/***********  sttepper end **********************/
@media (max-width: 767px) {
  .columns {
    margin-left: 20%;
    /* margin-right: -0.75rem; */
    margin-top: -0.75rem;
  }
}
/***********  sttepper end **********************/
@media (max-width: 600px) {
  .columns {
    margin-left: 0%;
    /* margin-right: -0.75rem; */
    margin-top: -0.75rem;
  }
}

.icon-arrow {
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 284.929 284.929'><path d='M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441		L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z'/></svg>");
}
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

html,
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-family: "Roboto", sans-serif;
}
* {
  box-sizing: border-box;
}
body {
  background-color: #fafbfc;
  padding-top: 113px;
  overflow-x: hidden;
  &.display_menu {
    overflow-y: hidden;
  }
}
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
}
.wrap {
  max-width: 1024px;
  min-width: 320px;
}
header {
  display: flex;
  z-index: 1;
  padding: 10px 0;
  background-color: #ffffff;
  position: fixed;
  width: 100%;
  top: 0;
  justify-content: center;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  transition: 0.33s;
}
header .wrap {
  padding: 0 2%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
header img {
  width: 100px;
}
header #menu {
  display: flex;
  flex-direction: row;
}
header #menu li {
  position: relative;
  user-select: none;
  margin-left: 20px;
  i {
    width: 12px;
    height: 12px;
    background-color: #3e3a37;
  }
  a {
    color: #3e3a37;
    cursor: pointer;
    font-size: 1.15em;
    border: none;
    border-bottom: 2px solid #ffffff;
    transition: 0.15s;
    background: none;
    &:hover {
      border-bottom-color: #41b883;
      color: #41b883;
      i {
        background-color: #41b883;
      }
    }
  }
}
header .drop_menu {
  position: absolute;
  display: block;
  top: 149%;
  transform: scaleY(0);
  width: auto;
  transform-origin: top;
  background-color: #ffffff;
  transition: 0.25s;
  padding-bottom: 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  a {
    margin-left: 20px;
    display: block;
    transition: 0.45s;
    opacity: 0;
    margin-right: 20px;
    padding: 10px 0 0 0;
  }
}

header .drop_menu.display {
  transform: scaleY(1);
  a {
    opacity: 1;
  }
}
header #hamburger {
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  left: 3%;
  top: 30px;
  display: none;
  transform: translateY(-50%);
}
header #hamburger span {
  height: 2px;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #3e3a37;
  display: block;
  transition: 0.33s;
  &:nth-child(1) {
    width: 12px;
  }
  &:nth-child(2) {
    width: 24px;
  }
  &:nth-child(3) {
    width: 12px;
  }
}
.display_menu header #hamburger {
  span:nth-child(1) {
    transform: rotate(45deg) translate(2px, 1px);
  }
  span:nth-child(2) {
    transform: rotate(-45deg);
  }
  span:nth-child(3) {
    transform: rotate(45deg) translate(6px, -9px);
  }
}
#background {
  content: "";
  display: block;
  width: 100vw;
  height: 200vh;
  padding: 5%;
  background-color: #41b883;
  h3 {
    margin: 0;
    margin-bottom: 1%;
    font-size: 1.5em;
    text-align: center;
    color: #ffffff;
    i {
      width: 13px;
      height: 20px;
      background-color: #ffffff;
    }
  }
  button {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    padding: 5px 10px;
    font-size: 1.3em;
    border: none;
    background-color: #435466;
    color: #ffffff;
  }
}
#loader {
  display: block;
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 3;
  margin-left: -25px;
  margin-top: -25px;
  animation: spin 1s infinite linear;
  span {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    border-width: 0px 0px 10px 10px;
    border-style: solid;
    border-color: transparent;
    &:nth-child(0) {
      border-left-color: #41b883;
    }
    &:nth-child(1) {
      transform: rotate(-40deg);
      border-left-color: #41b883;
    }
    &:nth-child(2) {
      transform: rotate(-80deg);
      border-left-color: #41b883;
    }
    &:nth-child(3) {
      transform: rotate(-130deg);
      border-left-color: #435466;
    }
    &:nth-child(4) {
      transform: rotate(-170deg);
      border-left-color: #435466;
    }
    &:nth-child(5) {
      transform: rotate(-210deg);
      border-left-color: #435466;
    }
    &:nth-child(6) {
      transform: rotate(-250deg);
      border-left-color: #3e3a37;
    }
    &:nth-child(7) {
      transform: rotate(-280deg);
      border-left-color: #3e3a37;
    }
    &:nth-child(8) {
      transform: rotate(-320deg);
      border-left-color: #3e3a37;
    }
    &:nth-child(9) {
      transform: rotate(-360deg);
      border-left-color: #41b883;
    }
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
#overlay {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: #3e3a37;
  opacity: 0.5;
}
@media screen and (max-width: 660px) {
  body {
    padding-top: 70px;
  }
  header .wrap {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
  }
  header img {
    width: 50px;
  }
  header #hamburger {
    display: block;
  }
  header #menu {
    width: 100%;
    display: block;
    height: 0;
    transform-origin: 50% 0;
    transition: 0.33s ease;
    flex-direction: column;
  }
  .display_menu header #menu {
    height: calc(100vh - 64px);
    li {
      height: calc((100vh - 113px) / 8);
      border-bottom: 1px solid #dad9d7;
      transition: 0.25s ease;
      opacity: 1;
      display: block;
      a {
      }
    }
  }
  header #menu li {
    height: 0;
    opacity: 0;
    margin-left: 0;
    transition: 0.25s ease;
    a {
      left: 0;
      line-height: calc((100vh - 113px) / 8);
      padding-left: 20px;
      border: none;
      height: 100%;
      width: 100%;
      display: block;
      &:hover {
        color: #ffffff;
        background-color: #41b883;
        i {
          background-color: #ffffff;
        }
      }
    }
    i {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      background-color: #3e3a37;
    }
  }
  header .drop_menu {
    top: calc((100vh - 113px) / 8);
    box-shadow: none;
    left: 0;
    padding-bottom: 0;
    width: 100%;
    a {
      width: 100%;
      padding: 0 !important;
      padding-left: 40px !important;
      margin: 0;
      border-bottom: 1px solid #dad9d7 !important;
    }
  }
}
@media screen and(max-width: 660px) and(max-height: 500px) {
  .display_menu header {
    max-height: 100vh;
    overflow-y: scroll;
  }
  .display_menu header #menu {
    li {
      height: calc((100vh - 113px) / 4);
    }
  }
  header #menu li {
    a {
      line-height: calc((100vh - 113px) / 4);
    }
  }
  header .drop_menu {
    top: calc((100vh - 113px) / 4);
  }
}
i {
  vertical-align: middle;
  display: inline-block;
  background-repeat: no-repeat;
}

/***** Responsive */
/* =====================================
Template Name: 	Mediplus.
Author Name: Naimur Rahman
Website: http://wpthemesgrid.com/
Description: Mediplus - Doctor HTML Template.
Version:	1.1
========================================*/
/* Tablet Screen */
@media only screen and (min-width: 768px) and (max-width: 991px) {
  /* Header Sticky */
  .section {
    padding: 70px 0px;
  }
  .section-title {
    margin-bottom: 35px;
    padding: 0px 80px;
  }
  .section-title h2 {
    font-size: 25px;
    margin-bottom: 12px;
  }
  .section-title p {
    font-size: 13px;
  }
  .btn {
    padding: 11px 20px;
    font-weight: 400;
    font-size: 13px;
  }
  .breadcrumbs {
    padding: 60px 0;
  }
  .breadcrumbs h2 {
    font-size: 32px;
    font-weight: 600;
  }
  .breadcrumbs .bread-list {
    margin-top: 5px;
  }
  .breadcrumbs ul li a {
    font-size: 14px;
    font-weight: 400;
  }
  .pagination {
    margin: 30px 0 0 0;
  }
  #scrollUp {
    bottom: 55px;
  }
  .header .top-link li a {
    font-size: 13px;
  }
  .header .top-contact li a {
    font-size: 13px;
  }
  .header .top-contact li {
    display: inline-block;
    margin-right: 25px;
    color: #2c2d3f;
    font-size: 13px;
  }
  .header .header-inner .get-quote {
    margin-top: 12px;
    display: none;
    margin: 0;
  }
  .header .nav li a {
    font-size: 13px;
    font-weight: 500;
    padding: 20px 4px;
  }
  .header .nav li .dropdown {
    width: 200px;
    left: -20px;
    top: 65px;
  }
  .header .nav li .dropdown li a {
    padding: 10px 15px;
    font-size: 13px;
  }
  .header .search-form {
    top: 64px;
  }
  .header .search-form input {
    width: 260px;
    height: 45px;
    line-height: 45px;
  }
  .header .search-form button {
    height: 45px;
    line-height: 45px;
  }
  .header.style2 .single-widget {
    margin-right: 18px;
    padding-left: 36px;
  }
  .header.style2 .get-quote .btn {
    color: #fff;
    padding: 10px 18px;
    font-size: 12px;
  }
  .header.style2 .single-widget.button {
    margin: 0;
    padding: 0;
  }
  .header.style2 .single-widget h4 {
    font-size: 13px;
    font-weight: 500;
  }
  .header.style2 .single-widget p {
    margin-bottom: 0;
    text-transform: capitalize;
    font-size: 13px;
  }
  .header.style2 .single-widget i {
    top: 50%;
    height: 25px;
    width: 25px;
    line-height: 25px;
    font-size: 13px;
    margin-top: -12.5px;
  }
  .header.style2 .right-bar {
    padding-top: 15px;
  }
  .slider .single-slider {
    height: 380px;
  }
  .schedule {
    background: #fff;
    margin: 0;
    padding: 0;
    height: auto;
    padding: 70px 0;
    border-bottom: 1px solid #eee;
  }
  .schedule .schedule-inner {
    transform: none;
  }
  .schedule .single-schedule.last {
    margin-top: 30px;
  }
  .slider .single-slider {
    position: relative;
  }
  .slider .single-slider:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
  }
  .slider .single-slider h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
  }
  .slider .single-slider .text {
    margin-top: 80px;
  }
  .slider.index2 .single-slider .text {
    margin-top: 80px;
  }
  .slider .owl-carousel .owl-nav div {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
  }
  .Feautes.index2 {
    padding-top: 70px;
  }
  .Feautes .single-features::before {
    display: none;
  }
  .Feautes .single-features {
    text-align: center;
    position: relative;
    padding: 10px 155px;
    margin: 10px 0;
  }
  .fun-facts.section {
    padding: 70px 0;
  }
  .fun-facts .single-fun {
    margin: 20px 0;
  }
  .why-choose .choose-right {
    height: 350px;
    margin-top: 30px;
  }
  .services .single-service h4 {
    margin-bottom: 12px;
  }
  .services-details-img h2 {
    font-size: 24px;
  }
  .service-details-inner-left {
    height: 400px;
    margin-bottom: 30px;
  }
  .service-details-inner {
    width: 100%;
    margin: 0;
  }
  .service-details-inner h2 {
    font-size: 24px;
  }
  .appointment .appointment-image {
    margin-top: 20px;
  }
  .call-action .content {
    padding: 0;
    padding: 70px 0;
  }
  .call-action .content h2 {
    font-size: 28px;
    line-height: 40px;
  }
  .services .single-service {
    margin: 15px 0;
  }
  .testimonials {
    padding-bottom: 100px;
  }
  .testimonials .owl-dots {
    transform: translateX(-18%);
  }
  .departments .department-tab .nav li {
    margin-right: 30px;
  }
  .departments .department-tab .nav li a {
    color: #fff;
    margin-top: 0px;
    padding: 0 3px 12px 3px;
  }
  .departments .department-tab .nav li a i {
    font-size: 38px;
  }
  .departments .department-tab .nav li .first {
    padding-top: 6px;
    font-size: 14px;
  }
  .departments .department-tab .nav li .second {
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    margin-top: 0px;
  }
  .departments .department-tab .tab-pane .department-left h3 {
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .departments .department-tab .tab-pane .department-left .p1 {
    margin-bottom: 12px;
  }
  .departments .department-tab .tab-pane .department-left p {
    margin-bottom: 15px;
  }
  .departments .department-right {
    margin-top: 30px;
  }

  .departments .department-right img {
    height: 100%;
    width: 100%;
  }
  .appointment.single-page {
    padding: 70px 0;
  }
  .appointment.single-page .work-hour {
    margin-top: 30px;
  }
  .blog .single-news {
    margin: 15px 0;
  }
  .news-single .single-main {
    margin-top: 0;
  }
  .newsletter .subscribe-text {
    text-align: center;
    margin-bottom: 25px;
  }
  .newsletter .subscribe-form {
    text-align: center;
  }
  .contact-us #myMap {
    height: 400px;
  }
  .contact-us .contact-us-form h2 {
    font-size: 28px;
  }
  .contact-us .single-info {
    margin: 10px 0;
  }
  .about-image {
    height: 400px;
  }
  .about-content h2 {
    line-height: 32px;
    font-size: 25px;
  }
  .about-content {
    padding-bottom: 0;
  }
  .our-mission-content {
    margin-left: 50px;
    padding-top: 0px;
  }
  .our-mission-content h2 {
    line-height: 32px;
    font-size: 25px;
  }
  .our-mission-image {
    height: 400px;
  }
  .doctor-details-area .doctor-details-right {
    padding-left: 0;
    padding-top: 40px;
  }
  .doctor-details-item .doctor-name .name {
    font-size: 24px;
  }
  .doctor-details-item .doctor-name .deg {
    font-size: 19px;
    margin: 5px 0 5px 0;
  }
  .doctor-details-item .doctor-name .degree {
    font-size: 14px;
  }
  .login .login-left {
    height: 400px;
  }
  .register .register-left {
    height: 400px;
  }
  .pf-details .date ul li {
    margin-right: 25px;
    font-size: 13px;
  }
  .pf-details .body-text h3 {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-top: 30px;
  }
  .doctor-calendar-table table thead tr th {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td h3 {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td span.time {
    font-size: 14px;
  }
  .footer .single-footer {
    margin: 20px 0;
  }
  .footer .single-footer h2 {
    padding-bottom: 20px;
  }
  .footer .footer-top {
    padding: 65px 0px;
  }
}
/* Mobile Screen */
@media only screen and (max-width: 767px) {
  .header.sticky {
  }
  .header.sticky .header-bottom {
    position: absolute;
    z-index: 999;
    top: initial;
    left: 0;
    bottom: initial;
  }
  .header .header-inner {
    width: 100%;
    z-index: 333;
    position: absolute;
    position: relative;
    padding-bottom: 20px;
    background: #fff;
  }
  .slicknav_menu {
    display: block;
  }
  .slicknav_menu {
    display: block;
    background: transparent;
    padding: 0;
  }
  .slicknav_btn {
    background: transparent;
    padding: 0;
    margin-top: -30px;
  }
  .slicknav_menu .slicknav_icon-bar {
    box-shadow: none;
  }
  .slicknav_menu {
    display: block;
  }
  .slicknav_menu {
    display: block;
    background: transparent;
    padding: 0;
  }
  .slicknav_btn {
    background: transparent;
    padding: 0;
    margin-top: 28px;
  }
  .slicknav_menu .slicknav_icon-bar {
    box-shadow: none;
  }
  .slicknav_nav {
    clear: both;
    color: #2c2d3f;
    margin: 0;
    font-size: 0.875em;
    background: transparent;
  }
  .slicknav_nav li {
  }
  .slicknav_nav li a {
    color: #2c2d3f;
    transition: all 0.4s ease;
    background: none;
    padding: 4px 10px;
  }
  .slicknav_nav .slicknav_item a,
  .slicknav_nav .slicknav_parent-link a {
    padding: 0 10px;
    background: transparent;
  }
  .slicknav_nav li a i {
    display: none;
    margin: 0;
  }
  .slicknav_nav li:hover a {
    color: #38308b;
  }
  .slicknav_nav li .dropdown li a {
    color: #2c2d3f;
    background: transparent;
  }
  .slicknav_nav li .dropdown li a:hover {
    color: #38308b;
  }
  .slicknav_nav li .slicknav_item {
    background: transparent;
  }
  .slicknav_nav .slicknav_row,
  .slicknav_nav a {
    padding: 0;
    margin: 0;
    padding: 6px 0;
    font-weight: 400;
  }
  .slicknav_menu .slicknav_icon-bar {
    background-color: #38308b;
    box-shadow: none;
    text-shadow: none;
  }
  .slicknav_nav .slicknav_arrow {
    color: #2c2d3f;
  }
  .slicknav_nav li:hover .slicknav_arrow {
    color: #38308b;
  }
  .slicknav_menu .slicknav_icon-bar {
    display: block;
    width: 25px;
    height: 3px;
    -webkit-border-radius: 1px;
    -moz-border-radius: 1px;
    border-radius: 1px;
    -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
  .header .main-menu {
    display: none;
  }
  .header .widget-main {
    float: right;
    display: none;
  }
  .header.style2 .slicknav_btn {
    margin-top: 18px;
  }
  .header .slicknav_nav {
    margin-top: 65px;
  }
  .header.style2 .slicknav_nav {
    margin-top: 60px;
  }
  .header.style2 .header-inner {
    display: none;
  }
  .header.style2 .main-menu {
    display: none;
  }
  .header .header-inner .get-quote {
    margin: 0;
    padding: 0;
  }
  .header .header-inner .get-quote .btn {
    color: #fff;
    display: none;
    margin: 0;
    padding: 0;
  }
  .section {
    padding: 50px 0px;
  }
  .section-title {
    margin-bottom: 30px;
    padding: 0px 20px;
  }
  .section-title h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  .section-title p {
    font-size: 13px;
  }

  .breadcrumbs {
    padding: 60px 0;
  }
  .breadcrumbs h2 {
    font-size: 32px;
    font-weight: 600;
  }
  .breadcrumbs .bread-list {
    margin-top: 10px;
  }
  .breadcrumbs ul li {
    font-size: 14px;
    font-weight: 400;
  }
  .breadcrumbs ul li a {
    font-size: 14px;
    font-weight: 400;
  }
  .btn {
    padding: 11px 20px;
    font-weight: 400;
    font-size: 13px;
  }
  .header .top-link {
    float: none;
    text-align: center;
    margin-bottom: 10px;
  }
  .header .top-contact {
    float: none;
    text-align: center;
  }
  .slider .single-slider {
    height: 380px;
  }
  .schedule {
    background: #fff;
    margin: 0;
    padding: 0;
    height: auto;
    padding: 50px 0;
    border-bottom: 1px solid #eee;
  }
  .schedule .schedule-inner {
    transform: none;
  }
  .schedule .single-schedule {
    margin: 15px 0;
  }
  .slider .single-slider {
    position: relative;
  }
  .slider .single-slider:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
  }
  .slider .single-slider h1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
  }
  .slider .single-slider .text {
    margin-top: 80px;
  }
  .slider.index2 .single-slider .text {
    margin-top: 80px;
  }
  .slider .owl-carousel .owl-nav div {
    height: 40px;
    width: 40px;
    line-height: 40px;
    border-radius: 4px;
  }
  .Feautes.index2 {
    padding-top: 50px;
  }
  .Feautes .single-features .signle-icon i {
    font-size: 42px;
    left: 50%;
    margin-left: -40px;
    height: 80px;
    width: 80px;
    line-height: 80px;
  }
  .Feautes .single-features::before {
    display: none;
  }
  .Feautes .single-features {
    text-align: center;
    position: relative;
    padding: 0px;
    margin: 15px 0;
  }
  .Feautes .single-features h3 {
    padding-top: 105px;
    font-size: 20px;
  }
  .fun-facts.section {
    padding: 70px 0;
  }
  .fun-facts .single-fun {
    margin: 0;
    margin: 15px 0;
    position: relative;
  }
  .fun-facts .single-fun {
    margin: 35px 0;
    padding-top: 60px;
    text-align: center;
  }
  .fun-facts .single-fun i {
    left: 50%;
    margin-left: -35px;
    top: 0;
    position: absolute;
  }
  .fun-facts .single-fun .content {
    padding: 0;
  }
  .why-choose .choose-right {
    height: 350px;
    margin-top: 30px;
  }
  .call-action .content {
    padding: 0;
    padding: 70px 0;
  }
  .call-action .content h2 {
    font-size: 28px;
    line-height: 40px;
  }
  .appointment .appointment-image {
    margin-top: 20px;
  }
  .services .single-service {
    margin: 20px 0;
  }
  .services .single-service h4 {
    margin-bottom: 15px;
  }
  .services .single-service h4 {
    margin-bottom: 10px;
  }
  .services-details-img h2 {
    font-size: 22px;
  }
  .service-details-inner-left {
    height: 300px;
    margin-bottom: 20px;
  }
  .service-details-inner {
    width: 100%;
    margin: 0;
  }
  .services-details-img {
    margin-bottom: 30px;
  }
  .service-details-inner h2 {
    font-size: 24px;
  }
  .testimonials {
    padding-bottom: 100px;
  }
  .testimonials .owl-dots {
    transform: translateX(-18%);
  }
  .departments .department-tab .nav li {
    margin: 0px 10px;
  }
  .departments .department-tab .nav li a {
    color: #fff;
    margin-top: 10px;
    padding: 0 3px 12px 3px;
  }
  .departments .department-tab .nav li a i {
    font-size: 38px;
  }
  .departments .department-tab .nav li .first {
    padding-top: 6px;
    font-size: 14px;
  }
  .departments .department-tab .nav li .second {
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    margin-top: 0px;
  }
  .departments .department-tab .tab-pane .department-left h3 {
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .departments .department-tab .tab-pane .department-left .p1 {
    margin-bottom: 12px;
  }
  .departments .department-tab .tab-pane .department-left p {
    margin-bottom: 15px;
  }
  .departments .department-right {
    margin-top: 30px;
  }

  .departments .department-right img {
    height: 100%;
    width: 100%;
  }
  .appointment.single-page {
    padding: 50px 0;
  }
  .appointment.single-page .work-hour {
    margin-top: 30px;
  }
  .blog .single-news {
    margin: 15px 0;
  }
  .news-single .single-main {
    margin-top: 0px;
  }
  .news-single .single-main {
    padding: 15px;
  }
  .news-single .news-title {
    font-size: 20px;
    font-weight: 500;
  }
  .news-single .news-title a {
    font-size: 20px;
    font-weight: 500;
  }
  .news-single .meta-right {
    float: none;
    display: inline-block;
    margin-top: -6px;
    margin-left: 56px;
    float: left;
  }
  .news-single .image-gallery .single-image {
    margin: 10px 0;
  }
  .news-single .image-gallery {
    margin-bottom: 10px;
  }
  .news-single .social-share li {
    float: left;
    display: inline-block;
    margin: 5px;
  }
  .news-single .prev-next {
    float: none;
    text-align: center;
    display: inline-block;
  }
  .news-single .prev-next li {
    margin-top: 10px;
  }
  .news-single .single-comments.left .main {
    margin-left: 0px;
  }
  .news-single .single-comments .main {
    padding-left: 100px;
    position: relative;
    margin-left: 100px;
    margin: 0;
  }
  .news-single .single-comments .body {
    float: none;
    width: 100%;
  }
  .news-single .single-comments img {
    position: absolute;
    left: 0;
    top: 0;
  }
  .news-single .blog-comments {
    padding: 15px;
  }
  .news-single .comments-form {
    padding: 15px;
  }
  .main-sidebar .single-widget {
    padding: 20px;
  }
  .newsletter .subscribe-text {
    text-align: center;
    margin-bottom: 25px;
  }
  .newsletter .subscribe-form {
    text-align: center;
  }
  .newsletter .common-input {
    height: 50px;
    width: 100%;
    margin: 0;
  }
  .newsletter .btn {
    height: 50px;
    line-height: 50px;
    width: 100%;
    margin: 0;
    margin-top: 14px;
  }
  .error-page .error-inner h1 {
    font-size: 80px;
  }
  .error-page .error-inner h1 span {
    font-size: 17px;
  }
  .error-page .search-form input {
    width: 100%;
    display: block;
  }
  .error-page .search-form .btn {
    top: 0;
    width: 100%;
    display: block;
    margin-top: 15px;
  }
  .mail-seccess .success-inner h1 {
    font-size: 80px;
  }
  .mail-seccess .success-inner h1 span {
    font-size: 17px;
  }
  .about-image {
    height: 300px;
  }
  .about-content h2 {
    line-height: 32px;
    font-size: 20px;
  }
  .about-content {
    padding-bottom: 0;
    width: 100%;
    padding: 0;
    padding: 35px;
  }
  .our-mission-content {
    padding-bottom: 0;
    width: 100%;
    padding: 0;
    padding: 35px;
  }
  .our-mission-content h2 {
    line-height: 32px;
    font-size: 25px;
  }
  .our-mission-image {
    height: 300px;
  }
  .contact-us #myMap {
    height: 300px;
  }
  .contact-us .contact-us-form h2 {
    font-size: 25px;
  }
  .contact-us .single-info {
    margin: 10px 0;
  }
  .contact-us .contact-us-form {
    padding: 30px 30px;
  }
  .doctor-details-area .doctor-details-right {
    padding-left: 0;
    padding-top: 30px;
  }
  .doctor-details-item .doctor-details-contact {
    padding: 30px;
  }
  .doctor-details-item .doctor-name .name {
    font-size: 20px;
  }
  .doctor-details-item .doctor-name .deg {
    font-size: 18px;
    margin: 5px 0 5px 0;
  }
  .doctor-details-item .doctor-name .degree {
    font-size: 14px;
  }
  .doctor-details-item .doctor-details-biography h3 {
    font-size: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .doctor-details-area .doctor-details-left .social li {
    display: inline-block;
    margin-right: 5px;
  }
  .doctor-details-item .doctor-details-contact h3 {
    margin-bottom: 20px;
  }
  .doctor-details-item .doctor-details-work h3 {
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
  .login .login-left {
    height: 300px;
  }
  .login .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .login .form {
    margin-top: -25px;
  }
  .register .register-left {
    height: 300px;
  }
  .register .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .register .form {
    margin-top: -25px;
  }
  .contact-us .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .contact-us .form {
    margin-top: -25px;
  }
  .pf-details .date ul li {
    margin-right: 25px;
    font-size: 13px;
  }
  .pf-details .date ul li {
    margin-right: 25px;
    font-size: 13px;
    display: block;
    text-align: left;
    margin-bottom: 8px;
  }
  .pf-details .date ul li:last-child {
    margin-bottom: 0;
  }
  .pf-details .body-text h3 {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-top: 30px;
  }
  .pf-details .image-slider .owl-nav {
    display: none;
  }
  .doctor-calendar-table table thead tr th {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td h3 {
    font-size: 14px;
  }
  .doctor-calendar-table table tbody tr td span.time {
    font-size: 14px;
  }
  .footer .single-footer {
    margin: 15px 0;
  }
  .footer .single-footer h2 {
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
  .footer .footer-top {
    padding: 50px 0px 60px 0;
  }
  .footer .single-footer.f-link ul {
    margin-bottom: 12px;
  }
  .footer .single-footer.f-link ul li a {
    display: inline-block;
  }
  .footer .copyright {
    padding: 20px 0;
  }
}
/* Mobile Screen */
@media only screen and (max-width: 450px) {
  .section {
    padding: 50px 0px;
  }
  .section-title {
    margin-bottom: 30px;
    padding: 0px 20px;
  }
  .section-title h2 {
    font-size: 22px;
    margin-bottom: 10px;
  }
  .section-title p {
    font-size: 13px;
  }
  .btn {
    padding: 11px 20px;
    font-weight: 400;
    font-size: 13px;
  }
  .header .top-link {
    float: none;
    text-align: center;
    margin-bottom: 10px;
  }
  .header .top-contact {
    float: none;
    text-align: center;
  }
  .slider .single-slider {
    height: 380px;
  }
  .schedule {
    background: #fff;
    margin: 0;
    padding: 0;
    height: auto;
    padding: 50px 0;
    border-bottom: 1px solid #eee;
  }
  .schedule .schedule-inner {
    transform: none;
  }
  .schedule .single-schedule {
    margin: 15px 0;
  }
  .slider .single-slider {
    position: relative;
  }
  .slider .single-slider:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    opacity: 0.5;
  }
  .slider .single-slider h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
  }
  .slider .single-slider p {
    font-size: 13px;
  }
  .slider .single-slider .text {
    margin-top: 20px;
  }
  .slider .single-slider .button .btn {
    margin: 0;
    width: 100%;
    margin-bottom: 10px;
  }
  .slider .single-slider .button .btn:last-child {
    margin-bottom: 0;
  }
  .slider .owl-carousel .owl-nav {
    display: none;
  }
  .Feautes .single-features .signle-icon i {
    font-size: 42px;
    left: 50%;
    margin-left: -40px;
    height: 80px;
    width: 80px;
    line-height: 80px;
  }
  .Feautes .single-features::before {
    display: none;
  }
  .Feautes .single-features {
    text-align: center;
    position: relative;
    padding: 0px;
    margin: 15px 0;
  }
  .Feautes .single-features h3 {
    padding-top: 105px;
    font-size: 20px;
  }
  .fun-facts.section {
    padding: 70px 0;
  }
  .fun-facts .single-fun {
    margin: 0;
    margin: 15px 0;
    position: relative;
  }
  .fun-facts .single-fun {
    margin: 35px 0;
    padding-top: 60px;
    text-align: center;
  }
  .fun-facts .single-fun i {
    left: 50%;
    margin-left: -35px;
    top: 0;
    position: absolute;
  }
  .fun-facts .single-fun .content {
    padding: 0;
  }
  .why-choose .choose-right {
    height: 350px;
    margin-top: 30px;
  }
  .call-action .content {
    padding: 0;
    padding: 70px 0;
  }
  .call-action .content h2 {
    font-size: 28px;
    line-height: 40px;
  }
  .services .single-service {
    margin: 20px 0;
  }
  .services .single-service h4 {
    margin-bottom: 15px;
  }
  .services-details-img blockquote {
    padding: 25px;
  }
  .services-details-img blockquote i {
    display: none;
  }
  .testimonials {
    padding-bottom: 100px;
  }
  .testimonials .owl-dots {
    transform: translateX(-18%);
  }
  .departments .department-tab .nav li {
    margin: 0px 10px;
  }
  .departments .department-tab .nav li a {
    color: #fff;
    margin-top: 10px;
    padding: 0 3px 12px 3px;
  }
  .departments .department-tab .nav li a i {
    font-size: 38px;
  }
  .departments .department-tab .nav li .first {
    padding-top: 6px;
    font-size: 14px;
  }
  .departments .department-tab .nav li .second {
    font-size: 13px;
    font-weight: 400;
    color: #868686;
    margin-top: 0px;
  }
  .departments .department-tab .tab-pane .department-left h3 {
    font-size: 22px;
    padding-bottom: 12px;
    margin-bottom: 20px;
  }
  .departments .department-tab .tab-pane .department-left .p1 {
    margin-bottom: 12px;
  }
  .departments .department-tab .tab-pane .department-left p {
    margin-bottom: 15px;
  }
  .departments .department-right {
    margin-top: 30px;
  }

  .departments .department-right img {
    height: 100%;
    width: 100%;
  }
  .appointment.single-page .appointment-inner {
    padding: 25px;
  }
  .blog .single-news {
    margin: 15px 0;
  }
  .newsletter .subscribe-text {
    text-align: center;
    margin-bottom: 25px;
  }
  .newsletter .subscribe-form {
    text-align: center;
  }
  .our-mission-content {
    padding-top: 0;
  }
  .our-vision-area {
    padding-bottom: 45px;
  }
  .our-mission-content ul li {
    -ms-flex: 0 0 50%;
    -webkit-box-flex: 100%;
    flex: 100%;
    max-width: 100%;
    margin: 5px 0;
  }
  .login .login-form {
    padding: 30px 30px;
  }
  .login .login-form h2 {
    font-size: 26px;
  }
  .login .login-form .lost-pass {
    margin-left: 0;
    display: block;
    margin-top: -10px;
  }
  .login .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .register .register-form {
    padding: 30px 30px;
  }
  .register .register-form h2 {
    font-size: 26px;
  }
  .register .register-form .terms {
    margin: 0;
    display: block;
    margin-top: -10px;
  }
  .register .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .contact-us .form .btn {
    height: 50px;
    line-height: 50px;
    padding: 0;
    padding: 0px 20px;
  }
  .footer .single-footer {
    margin: 20px 0;
  }
  .footer .single-footer h2 {
    padding-bottom: 20px;
  }
  .footer .footer-top {
    padding: 65px 0px;
  }
}
/*************** */

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #585b5b;
}
</style>
