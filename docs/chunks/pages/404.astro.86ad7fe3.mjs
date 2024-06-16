import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderSlot, f as renderComponent } from '../astro.2717e7ce.mjs';
import 'html-escaper';
/* empty css                         */
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro();
const $$HeadContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeadContent;
  const { canonical } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Reliable junk hauling & removal services in Tucson, AZ. We handle residential & commercial junk, from furniture to debris. Get a clutter-free space! Call now.">\n  <meta name="keywords" content="Junk removal, junk hauling, scrap hauling, cleanout services, clutter removal, construction cleanup, appliance disposal, furniture removal">\n  <meta name="author" content="Clutter Cowboys">\n  <title>Tucson Junk Removal and Hauling Specialists | Clutter Cowboys</title>\n  <meta property="og:image" content="https://cluttercowboys.com/social-card-hd.jpg">\n  <meta property="og:title" content="Tucson Junk Removal and Hauling Specialists | Clutter Cowboys">\n  <meta property="og:description" content="Reliable junk hauling & removal services in Tucson, AZ. We handle residential & commercial junk, from furniture to debris. Get a clutter-free space! Call now.">\n  <meta property="og:image:width" content="1600">\n  <meta property="og:image:height" content="836">\n\n  <link rel="canonical"', '>\n  <link rel="sitemap" href="/sitemap-index.xml">\n\n  <link rel="shortcut icon"', '>\n  <link rel="stylesheet"', '>\n\n  <!-- Google tag (gtag.js) -->\n  <script async src="https://www.googletagmanager.com/gtag/js?id=G-RRBJ4Q5G6B"><\/script>\n  <script>\n    window.dataLayer = window.dataLayer || [];\n\n    function gtag() {\n      dataLayer.push(arguments);\n    }\n    gtag("js", new Date());\n    gtag("config", "G-RRBJ4Q5G6B");\n    gtag("config", "AW-949945401");\n  <\/script>\n  <script>\n    gtag("config", "AW-949945401/J5beCNXO8KAYELmI_MQD", {\n      phone_conversion_number: "520-600-6322",\n    });\n  <\/script>\n\n  <!-- Event snippet for Lead Form Submissions conversion page -->\n  <script>\n    function gtag_report_conversion(url) {\n      var callback = function () {\n        if (typeof url != "undefined") {\n          window.location = url;\n        }\n      };\n      gtag("event", "conversion", {\n        send_to: "AW-949945401/bczkCNmimsoYELmI_MQD",\n        event_callback: callback,\n      });\n      return false;\n    }\n  <\/script>\n\n  <!-- Meta Pixel Code -->\n  <script>\n    !(function (f, b, e, v, n, t, s) {\n      if (f.fbq) return;\n      n = f.fbq = function () {\n        n.callMethod\n          ? n.callMethod.apply(n, arguments)\n          : n.queue.push(arguments);\n      };\n      if (!f._fbq) f._fbq = n;\n      n.push = n;\n      n.loaded = !0;\n      n.version = "2.0";\n      n.queue = [];\n      t = b.createElement(e);\n      t.async = !0;\n      t.src = v;\n      s = b.getElementsByTagName(e)[0];\n      s.parentNode.insertBefore(t, s);\n    })(\n      window,\n      document,\n      "script",\n      "https://connect.facebook.net/en_US/fbevents.js"\n    );\n    fbq("init", "241669498554433");\n    fbq("track", "PageView");\n  <\/script>\n  ', '<noscript>\n    <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=241669498554433&ev=PageView&noscript=1">\n  </noscript>\n  <!-- End Meta Pixel Code -->\n', "</head>"])), addAttribute(canonical || Astro2.request.url, "href"), addAttribute(`${Astro2.site.origin}/favicon.png`, "href"), addAttribute(`${Astro2.site.origin}/css/external.css`, "href"), maybeRenderHead($$result), renderHead($$result));
}, "/Users/gaegeroot/Desktop/ClutterCowboys/src/components/HeadContent.astro");

const $$Astro$2 = createAstro();
const $$MobileNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobileNav;
  return renderTemplate`${maybeRenderHead($$result)}<div class="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
    <div class="offcanvas-header d-lg-none">
        <a href="/">
            <img src="/images/cc-text-logo.png" alt="Clutter Cowboys logo">
        </a>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body ms-lg-auto d-flex flex-column h-100">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="/services">Services</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/about-us">About Us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/contact-us">Contact Us</a>
            </li>

            <!-- <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
          >Dropdown</a
        >
        <ul class="dropdown-menu">
          <li class="nav-item"><a class="dropdown-item" href="#">Action</a></li>
          <li class="dropdown dropdown-submenu dropend">
            <a
              class="dropdown-item dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown">Dropdown</a
            >
            <ul class="dropdown-menu">
              <li class="dropdown dropdown-submenu dropend">
                <a
                  class="dropdown-item dropdown-toggle"
                  href="#"
                  data-bs-toggle="dropdown">Dropdown</a
                >
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a class="dropdown-item" href="#">Action</a>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item" href="#">Another Action</a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="dropdown-item" href="#">Action</a>
              </li>
              <li class="nav-item">
                <a class="dropdown-item" href="#">Another Action</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="dropdown-item" href="#">Another Action</a>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown dropdown-mega">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
          >Mega Menu</a
        >
        <ul class="dropdown-menu mega-menu">
          <li class="mega-menu-content">
            <div class="row gx-0 gx-lg-3">
              <div class="col-lg-6">
                <h6 class="dropdown-header">One</h6>
                <div class="row gx-0">
                  <div class="col-lg-6">
                    <ul class="list-unstyled">
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul class="list-unstyled">
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                      <li><a class="dropdown-item" href="#">Link</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <h6 class="dropdown-header">Two</h6>
                <ul class="list-unstyled">
                  <li><a class="dropdown-item" href="#">Link</a></li>
                  <li><a class="dropdown-item" href="#">Link</a></li>
                  <li><a class="dropdown-item" href="#">Link</a></li>
                </ul>
              </div>
              <div class="col-lg-3">
                <h6 class="dropdown-header">Three</h6>
                <ul class="list-unstyled">
                  <li><a class="dropdown-item" href="#">Link</a></li>
                  <li><a class="dropdown-item" href="#">Link</a></li>
                  <li><a class="dropdown-item" href="#">Link</a></li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
          >Dropdown Large</a
        >
        <div class="dropdown-menu dropdown-lg">
          <div class="dropdown-lg-content">
            <div>
              <h6 class="dropdown-header">One</h6>
              <ul class="list-unstyled">
                <li><a class="dropdown-item" href="#">Link</a></li>
                <li><a class="dropdown-item" href="#">Link</a></li>
                <li><a class="dropdown-item" href="#">Another Link</a></li>
              </ul>
            </div>
            <div>
              <h6 class="dropdown-header">Two</h6>
              <ul class="list-unstyled">
                <li><a class="dropdown-item" href="#">Link</a></li>
                <li><a class="dropdown-item" href="#">Link</a></li>
                <li><a class="dropdown-item" href="#">Another Link</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li> -->
        </ul>
        <!-- /.navbar-nav -->
        <div class="offcanvas-footer d-lg-none">
            <div>
                <a href="mailto:hello@cluttercowboys.com" class="link-inverse">hello@cluttercowboys.com</a>
                <br><a href="tel:520-600-6322">520-600-6322</a><br>
                <nav class="nav social social-white mt-4">
                    <a href="https://www.facebook.com/cluttercowboys"><i class="uil uil-facebook-f"></i></a>
                    <a href="https://www.instagram.com/cluttercowboys/"><i class="uil uil-instagram"></i></a>
                    <a href="https://www.youtube.com/channel/UCp1LzimXXDmzqPkrzY3aGRQ"><i class="uil uil-youtube"></i></a>
                </nav>
                <!-- /.social -->
            </div>
        </div>
        <!-- /.offcanvas-footer -->
    </div>
    <!-- /.offcanvas-body -->
</div>`;
}, "/Users/gaegeroot/Desktop/ClutterCowboys/src/components/MobileNav.astro");

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$DefaultPageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DefaultPageLayout;
  const { canonical } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en">\n  ', "\n\n  ", '<body>\n    <div class="content-wrapper">\n      <header class="wrapper mb-2">\n        <div class="bg-primary text-white fw-bold fs-15">\n          <div class="container d-md-flex flex-md-row d-none d-md-block">\n            <div class="d-flex flex-row align-items-center">\n              <div class="icon text-white fs-22 mt-1 me-2">\n                <i class="uil uil-location-pin-alt"></i>\n              </div>\n              <address class="mb-0">Tucson, Arizona</address>\n            </div>\n            <div class="d-flex flex-row align-items-center me-6 ms-auto">\n              <div class="icon text-white fs-22 mt-1 me-2">\n                <i class="uil uil-phone-volume"></i>\n              </div>\n              <a href="tel:520-600-6322" class="mb-0 text-white link-white hover">520-600-6322</a>\n            </div>\n            <div class="d-flex flex-row align-items-center">\n              <div class="icon text-white fs-22 mt-1 me-2">\n                <i class="uil uil-message"></i>\n              </div>\n              <p class="mb-0">\n                <a href="mailto:hello@cluttercowboys.com" class="link-white hover">hello@cluttercowboys.com</a>\n              </p>\n            </div>\n          </div>\n          <!-- /.container -->\n        </div>\n        <nav class="navbar navbar-expand-lg classic transparent navbar-light">\n          <div class="container flex-lg-row flex-nowrap align-items-center">\n            <div class="navbar-brand w-100 py-3">\n              <a href="/">\n                <img src="/images/cc-text-logo.png" alt="Clutter Cowboys logo">\n              </a>\n            </div>\n            ', '\n            <!-- /.navbar-collapse -->\n            <div class="navbar-other ms-lg-4">\n              <ul class="navbar-nav flex-row align-items-center ms-auto">\n                <li class="nav-item">\n                  <a href="tel:520-600-6322" class="btn btn-sm btn-primary rounded-pill text-white">520-600-6322</a>\n                </li>\n                <li class="nav-item d-lg-none">\n                  <button class="hamburger offcanvas-nav-btn"><span></span></button>\n                </li>\n              </ul>\n              <!-- /.navbar-nav -->\n            </div>\n            <!-- /.navbar-other -->\n          </div>\n          <!-- /.container -->\n        </nav>\n        <!-- /.navbar -->\n      </header>\n      ', '\n\n      <section class="wrapper bg-light">\n        <div class="map">\n          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d432351.8145904084!2d-111.29188605104093!3d32.15708361784303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8923941036283a09%3A0x7efdef30ad58c8e8!2sClutter%20Cowboys!5e0!3m2!1sen!2sus!4v1686327651864!5m2!1sen!2sus" style="width:100%; height: 500px; border:0" allowfullscreen></iframe>\n        </div>\n        <!-- /.map -->\n      </section>\n    </div>\n    <!-- /.content-wrapper -->\n    <footer class="bg-navy text-inverse">\n      <div class="container pt-15 pt-md-10 pb-13 pb-md-15">\n        <div class="d-lg-flex flex-row align-items-lg-center">\n          <h3 class="display-4 mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25 text-white">\n            Give us a call today to handle all your junk hauling needs.\n          </h3>\n          <a href="tel:520-600-6322" class="btn btn-primary btn-lg rounded-pill mb-0 btn-icon btn-icon-start text-white"><i class="uil uil-phone"></i>520-600-6322</a>\n        </div>\n        <!--/div -->\n        <hr class="mt-11 mb-12">\n        <div class="row gy-6 gy-lg-0">\n          <div class="col-md-4 col-lg-3">\n            <div class="widget">\n              <img class="mb-4" src="/logo_200.png" alt="Clutter Cowboys Logo">\n              <p class="mb-4">\n                Clutter Cowboys \xA9 2023. <br class="d-none d-lg-block">All\n                rights reserved.\n              </p>\n            </div>\n            <!-- /.widget -->\n          </div>\n          <!-- /column -->\n          <div class="col-md-4 col-lg-3">\n            <div class="widget">\n              <h4 class="widget-title text-white mb-3">Areas We Service</h4>\n              <ul class="unordered-list bullet-primary">\n                <li>Central Tucson</li>\n                <li>Oro Valley</li>\n                <li>Marana</li>\n                <li>Catalina Foothills</li>\n                <li>South Tucson</li>\n                <li>Corona de Tucson</li>\n                <li>Vail</li>\n              </ul>\n            </div>\n            <!-- /.widget -->\n          </div>\n          <!-- /column -->\n          <div class="col-md-4 col-lg-3">\n            <div class="widget">\n              <h4 class="widget-title text-white mb-3">Important Links</h4>\n              <ul class="list-unstyled mb-0">\n                <li><a href="/services">Services</a></li>\n                <li><a href="/contact-us">Contact Us</a></li>\n                <li><a href="/terms-of-use">Terms of Use</a></li>\n                <li><a href="/privacy-policy">Privacy Policy</a></li>\n              </ul>\n            </div>\n            <!-- /.widget -->\n          </div>\n          <!-- /column -->\n          <div class="col-md-12 col-lg-3">\n            <div class="widget">\n              <h4 class="widget-title text-white mb-3">Get in Touch</h4>\n              <address class="pe-xl-15 pe-xxl-17">Sunny Tucson, AZ</address>\n              <a href="mailto:#">hello@cluttercowboys.com</a><br><a href="tel:520-600-6322">520-600-6322</a>\n            </div>\n            <!-- /.widget -->\n          </div>\n          <!-- /column -->\n        </div>\n        <!--/.row -->\n      </div>\n      <!-- /.container -->\n    </footer>\n    <div class="progress-wrap">\n      <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">\n        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>\n      </svg>\n    </div>\n\n    <script', "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n    <script", "><\/script>\n  </body>\n</html>"])), renderComponent($$result, "HeadContent", $$HeadContent, { "canonical": canonical }), maybeRenderHead($$result), renderComponent($$result, "MobileNav", $$MobileNav, {}), renderSlot($$result, $$slots["default"]), addAttribute(`${Astro2.site.origin}/scripts/vendor/bootstrap.bundle.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/headhesive.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/imagesloaded.pkgd.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/isotope.pkgd.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/scrollCue.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/smoothscroll.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/svg-inject.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/vendor/swiper-bundle.min.js`, "src"), addAttribute(`${Astro2.site.origin}/scripts/theme.js`, "src"));
}, "/Users/gaegeroot/Desktop/ClutterCowboys/src/layouts/DefaultPageLayout.astro");

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "DefaultPageLayout", $$DefaultPageLayout, {}, { "default": ($$result2) => renderTemplate`
    ${maybeRenderHead($$result2)}<section class="wrapper bg-light">
      <div class="container pt-12 pt-md-14 pb-14 pb-md-16">
        <div class="row">
          <div class="col-lg-9 col-xl-8 mx-auto">
            <figure class="mb-10"><img class="img-fluid" src="/images/illustrations/404.png" alt=""></figure>
          </div>
          <!-- /column -->
          <div class="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
            <h1 class="mb-3">Oops! Page Not Found.</h1>
            <p class="lead mb-7 px-md-12 px-lg-5 px-xl-7">The page you are looking for is not available or has been moved. Try a different page or go to homepage with the button below.</p>
            <a href="/" class="btn btn-primary rounded-pill">Go to Homepage</a>
          </div>
          <!-- /column -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </section>
` })}`;
}, "/Users/gaegeroot/Desktop/ClutterCowboys/src/pages/404.astro");

const $$file = "/Users/gaegeroot/Desktop/ClutterCowboys/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$DefaultPageLayout as $, _404 as _, $$HeadContent as a };
