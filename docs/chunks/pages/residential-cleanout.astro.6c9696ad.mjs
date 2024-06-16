import { c as createAstro, a as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro.2717e7ce.mjs';
import 'html-escaper';
import { $ as $$DefaultPageLayout } from './404.astro.86ad7fe3.mjs';
/* empty css                         */
const $$Astro = createAstro();
const $$ResidentialCleanout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ResidentialCleanout;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$DefaultPageLayout, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead($$result2)}<section class="wrapper bg-soft-primary">
    <div class="container pt-10 pt-md-14 pb-14 pb-md-0">
      <div class="row gx-md-8 gx-lg-12 gy-3 gy-lg-0 mb-13">
        <div class="col-lg-6">
          <h1 class="display-1 fs-66 lh-xxs mb-0">
            Tucson's Residential Cleanout Experts
          </h1>
        </div>
        <!-- /column -->
        <div class="col-lg-6">
          <p class="lead fs-25 my-3">
            Full House was a great show. A house full of lots of useless junk isn't that great. Give Clutter Cowboys a call to see how we can help you clean out your house and get you your space back. We're no strangers to hard work so we're down to tackle any house cleanout project you can throw at us.
          </p>
          <a href="#" class="more hover">Learn More</a>
        </div>
        <!-- /column -->
      </div>
      <!-- /.row -->
      <div class="position-relative">
        <div class="shape bg-dot primary rellax w-17 h-21" data-rellax-speed="1" style="top: -2.5rem; right: -2.7rem;">
        </div>
        <div class="rounded mb-md-n20 video-wrapper bg-overlay ratio ratio-16x9">
          <video poster="/images/services-poster.jpg" autoplay loop playsinline muted>
            <source src="/videos/moving-stuff.mp4" type="video/mp4">
            <source src="/videos/moving-stuff.webm" type="video/webm">
          </video>
        </div>
      </div>
    </div>
    <!-- /.container -->
  </section>
  <section class="wrapper bg-light" id="estimate-job">
    <div class="container py-10 pt-md-23">
      <div class="card bg-soft-primary mb-14">
        <div class="card-body p-10 p-xl-12">
          <div class="row">
            <div class="col-lg-8 mx-auto text-center">
              <h3 class="fs-30 text-uppercase text-primary mb-3">
                Want a quick estimate before calling?
              </h3>
              <p class="lead mb-10">
                <b>Imagine all your junk as <span class="underline-3 style-3">refrigerator-sized</span> piles. Then change the number below.</b>
              </p>
              <h4 class="display-6 mb-0 user-select-none">
                Your <i id="decrease_pile" class="uil uil-minus-circle fs-28 me-1 text-primary text-opacity-50 cursor-pointer"></i><span id="pile_number" class="underline-3 style-2 fs-40">6</span><i id="increase_pile" class="uil uil-plus-circle fs-28 ms-1 text-primary cursor-pointer"></i> piles will cost between <span id="lower_estimate" class="underline-3 style-2">$231</span> and <span id="upper_estimate" class="underline-3 style-2">$363</span>.
              </h4>
            </div>
            <!-- /column -->
          </div>
          <div class="d-flex align-items-center justify-content-center mt-12 main-cta-action">
            <span><a href="tel:520-600-6322" class="btn btn-xl btn-primary rounded-pill btn-icon btn-icon-start text-white me-4 my-2"><i class="uil uil-phone"></i>Call now</a></span>
            <span>for a <b>no-obligation, in-person</b> estimate (we never charge just
              to come out)</span>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>

    <section class="wrapper image-wrapper bg-image bg-overlay" data-image-src="/images/tucson.jpg">
      <div class="container py-15 py-md-17">
        <h2 class="display-3 mb-2 text-center text-white">
          People really like us
        </h2>
        <p class="lead fs-20 text-white text-center">
          (Probably because we do amazing work)
        </p>
        <div class="swiper-container dots-closer dots-light dots-light-75" data-margin="0" data-dots="true" data-items-xl="3" data-items-md="2" data-items-xs="1">
          <div class="swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="item-inner">
                  <div class="card border-0 bg-white-900">
                    <div class="card-body">
                      <span class="ratings five mb-3"></span>
                      <blockquote class="border-0 mb-0">
                        <p>
                          “I recently used Clutter Cowboys after my kitchen
                          remodel, and they were awesome! The people on the
                          phone were super nice, and the crew was punctual and
                          efficient. They got everything loaded onto their truck
                          in no time and didn't damage any of my stuff. Clutter
                          Cowboys is definitely the way to go for junk removal -
                          fair prices and a cool team. I'll use them again for
                          sure!”
                        </p>
                        <div class="blockquote-details">
                          <div class="info p-0">
                            <h5 class="mb-0">Adrian</h5>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <div class="item-inner">
                  <div class="card border-0 bg-white-900">
                    <div class="card-body">
                      <span class="ratings five mb-3"></span>
                      <blockquote class="border-0 mb-0">
                        <p>
                          ““I recently had the pleasure of working with Clutter
                          Cowboys in Tucson to clear out my cafe for a remodel,
                          and I couldn't be more impressed. Their team was
                          incredibly professional, courteous, and efficient.
                          They took care of all the junk, leaving my place
                          spotless. I highly recommend their services!”
                        </p>
                        <div class="blockquote-details">
                          <div class="info p-0">
                            <h5 class="mb-0">Tim</h5>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <div class="item-inner">
                  <div class="card border-0 bg-white-900">
                    <div class="card-body">
                      <span class="ratings five mb-3"></span>
                      <blockquote class="border-0 mb-0">
                        <p>
                          ““Making a big move is already stressful enough
                          without having to deal with all of the junk that's
                          definitely not going with us. Clutter Cowboys came out
                          quickly to handle it for us so we could focus on all
                          the other stuff that mattered.”
                        </p>
                        <div class="blockquote-details">
                          <div class="info p-0">
                            <h5 class="mb-0">Jackie</h5>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <div class="item-inner">
                  <div class="card border-0 bg-white-900">
                    <div class="card-body">
                      <span class="ratings five mb-3"></span>
                      <blockquote class="border-0 mb-0">
                        <p>
                          ““Top-notch service from Clutter Cowboys! They tackled
                          my garage cleanout with impressive speed and
                          professionalism. Friendly team, efficient work, and a
                          clutter-free garage. Highly recommend! 👍”
                        </p>
                        <div class="blockquote-details">
                          <div class="info p-0">
                            <h5 class="mb-0">Imaan</h5>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <div class="item-inner">
                  <div class="card border-0 bg-white-900">
                    <div class="card-body">
                      <span class="ratings five mb-3"></span>
                      <blockquote class="border-0 mb-0">
                        <p>
                          “Do yourself a favor and call these guys immediately.
                          My only regret is not calling them any sooner. Gaege
                          and Darrin were incredibly accommodating, courteous,
                          and professional. They went above and beyond to help
                          me out when I was in a tight spot and needing to be
                          out of my office on a holiday weekend with no real
                          plan in place. I called them on Saturday evening and
                          the job was done by 4 PM the next day. It was all so
                          easy and beyond affordable. Call them now and save
                          yourself the time and stress.”
                        </p>
                        <div class="blockquote-details">
                          <div class="info p-0">
                            <h5 class="mb-0">Zaira</h5>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
              <div class="swiper-slide">
                <div class="item-inner">
                  <div class="card border-0 bg-white-900">
                    <div class="card-body">
                      <span class="ratings five mb-3"></span>
                      <blockquote class="border-0 mb-0">
                        <p>
                          “Excellent job. Very reliable. Quick service and very
                          reasonably priced. I highly recommend.”
                        </p>
                        <div class="blockquote-details">
                          <div class="info p-0">
                            <h5 class="mb-0">Geno</h5>
                          </div>
                        </div>
                      </blockquote>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
                </div>
                <!-- /.item-inner -->
              </div>
              <!--/.swiper-slide -->
            </div>
            <!--/.swiper-wrapper -->
          </div>
          <!-- /.swiper -->
        </div>
        <!-- /.swiper-container -->
      </div>
      <!-- /.container -->
    </section>
  </section>
` })}`;
}, "/Users/gaegeroot/Desktop/ClutterCowboys/src/pages/services/residential-cleanout.astro");

const $$file = "/Users/gaegeroot/Desktop/ClutterCowboys/src/pages/services/residential-cleanout.astro";
const $$url = "/services/residential-cleanout";

export { $$ResidentialCleanout as default, $$file as file, $$url as url };
