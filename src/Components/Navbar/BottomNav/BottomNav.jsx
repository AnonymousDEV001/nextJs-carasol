import Link from "next/link";
import React from "react";

const BottomNav = () => {
  return (
    <div className="header-bottom ">
      <div className="container">
        <div className="header-left">
          <div className="dropdown category-dropdown">
            <Link
              href="#"
              className="dropdown-toggle"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-display="static"
              title="Browse Categories"
            >
              Browse Categories <i className="icon-angle-down"></i>
            </Link>

            <div className="dropdown-menu">
              <nav className="side-nav">
                <ul className="menu-vertical sf-arrows">
                  <li className="item-lead">
                    <Link href="#">Daily offers</Link>
                  </li>
                  <li className="item-lead">
                    <Link href="#">Gift Ideas</Link>
                  </li>
                  <li>
                    <Link href="#">Beds</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div className="header-center">
          <nav className="main-nav">
            <ul className="menu sf-arrows">

              <li className="megamenu-container active">
                <Link href="category.html" className="sf-with-ul">
                  Home
                </Link>

                <div className="megamenu megamenu-md">
                  <div className="row no-gutters">
                    <div className="col-md-8">
                      <div className="menu-col">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="menu-title">Shop with sidebar</div>
                            <ul>
                              <li>
                                <Link href="category-list.html">Shop List</Link>
                              </li>
                              <li>
                                <Link href="category-2cols.html">
                                  Shop Grid 2 Columns
                                </Link>
                              </li>
                            </ul>

                            <div className="menu-title">Shop no sidebar</div>
                            <ul>
                              <li>
                                <Link href="category-boxed.html">
                                  <span>
                                    Shop Boxed No Sidebar
                                    <span className="tip tip-hot">Hot</span>
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="category-fullwidth.html">
                                  Shop Fullwidth No Sidebar
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-6">
                            <div className="menu-title">Product Category</div>
                            <ul>
                              <li>
                                <Link href="product-category-boxed.html">
                                  Product Category Boxed
                                </Link>
                              </li>
                              <li>
                                <Link href="product-category-fullwidth.html">
                                  <span>
                                    Product Category Fullwidth
                                    <span className="tip tip-new">New</span>
                                  </span>
                                </Link>
                              </li>
                            </ul>
                            <div className="menu-title">Shop Pages</div>
                            <ul>
                              <li>
                                <Link href="cart.html">Cart</Link>
                              </li>
                              <li>
                                <Link href="checkout.html">Checkout</Link>
                              </li>
                              <li>
                                <Link href="wishlist.html">Wishlist</Link>
                              </li>
                              <li>
                                <Link href="dashboard.html">My Account</Link>
                              </li>
                              <li>
                                <Link href="#">Lookbook</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="banner banner-overlay">
                        <Link href="category.html" className="banner banner-menu">
                          <img
                            src="assets/images/menu/banner-1.jpg"
                            alt="Banner"
                          />

                          <div className="banner-content banner-content-top">
                            <div className="banner-title text-white">
                              Last <br />
                              Chance
                              <br />
                              <span>
                                <strong>Sale</strong>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="category.html" className="sf-with-ul">
                  Shop
                </Link>

                <div className="megamenu megamenu-md">
                  <div className="row no-gutters">
                    <div className="col-md-8">
                      <div className="menu-col">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="menu-title">Shop with sidebar</div>
                            <ul>
                              <li>
                                <Link href="category-list.html">Shop List</Link>
                              </li>
                              <li>
                                <Link href="category-2cols.html">
                                  Shop Grid 2 Columns
                                </Link>
                              </li>
                            </ul>

                            <div className="menu-title">Shop no sidebar</div>
                            <ul>
                              <li>
                                <Link href="category-boxed.html">
                                  <span>
                                    Shop Boxed No Sidebar
                                    <span className="tip tip-hot">Hot</span>
                                  </span>
                                </Link>
                              </li>
                              <li>
                                <Link href="category-fullwidth.html">
                                  Shop Fullwidth No Sidebar
                                </Link>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-6">
                            <div className="menu-title">Product Category</div>
                            <ul>
                              <li>
                                <Link href="product-category-boxed.html">
                                  Product Category Boxed
                                </Link>
                              </li>
                              <li>
                                <Link href="product-category-fullwidth.html">
                                  <span>
                                    Product Category Fullwidth
                                    <span className="tip tip-new">New</span>
                                  </span>
                                </Link>
                              </li>
                            </ul>
                            <div className="menu-title">Shop Pages</div>
                            <ul>
                              <li>
                                <Link href="cart.html">Cart</Link>
                              </li>
                              <li>
                                <Link href="checkout.html">Checkout</Link>
                              </li>
                              <li>
                                <Link href="wishlist.html">Wishlist</Link>
                              </li>
                              <li>
                                <Link href="dashboard.html">My Account</Link>
                              </li>
                              <li>
                                <Link href="#">Lookbook</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="banner banner-overlay">
                        <Link href="category.html" className="banner banner-menu">
                          <img
                            src="assets/images/menu/banner-1.jpg"
                            alt="Banner"
                          />

                          <div className="banner-content banner-content-top">
                            <div className="banner-title text-white">
                              Last <br />
                              Chance
                              <br />
                              <span>
                                <strong>Sale</strong>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="product.html" className="sf-with-ul">
                  Product
                </Link>

                <div className="megamenu megamenu-sm">
                  <div className="row no-gutters">
                    <div className="col-md-6">
                      <div className="menu-col">
                        <div className="menu-title">Product Details</div>
                        <ul>
                          <li>
                            <Link href="product.html">Default</Link>
                          </li>
                          <li>
                            <Link href="product-centered.html">Centered</Link>
                          </li>
                          <li>
                            <Link href="product-extended.html">
                              <span>
                                Extended Info
                                <span className="tip tip-new">New</span>
                              </span>
                            </Link>
                          </li>
                          <li>
                            <Link href="product-gallery.html">Gallery</Link>
                          </li>
                          <li>
                            <Link href="product-sticky.html">Sticky Info</Link>
                          </li>
                          <li>
                            <Link href="product-sidebar.html">
                              Boxed With Sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="product-fullwidth.html">Full Width</Link>
                          </li>
                          <li>
                            <Link href="product-masonry.html">
                              Masonry Sticky Info
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="banner banner-overlay">
                        <Link href="category.html">
                          <img
                            src="assets/images/menu/banner-2.jpg"
                            alt="Banner"
                          />

                          <div className="banner-content banner-content-bottom">
                            <div className="banner-title text-white">
                              New Trends
                              <br />
                              <span>
                                <strong>spring 2019</strong>
                              </span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link href="#" className="sf-with-ul">
                  Pages
                </Link>

                <ul>
                  <li>
                    <Link href="about.html" className="sf-with-ul">
                      About
                    </Link>

                    <ul>
                      <li>
                        <Link href="about.html">About 01</Link>
                      </li>
                      <li>
                        <Link href="about-2.html">About 02</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="contact.html" className="sf-with-ul">
                      Contact
                    </Link>

                    <ul>
                      <li>
                        <Link href="contact.html">Contact 01</Link>
                      </li>
                      <li>
                        <Link href="contact-2.html">Contact 02</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="login.html">Login</Link>
                  </li>
                  <li>
                    <Link href="faq.html">FAQs</Link>
                  </li>
                  <li>
                    <Link href="404.html">Error 404</Link>
                  </li>
                  <li>
                    <Link href="coming-soon.html">Coming Soon</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="blog.html" className="sf-with-ul">
                  Blog
                </Link>

                <ul>
                  <li>
                    <Link href="blog.html">Classic</Link>
                  </li>
                  <li>
                    <Link href="blog-listing.html">Listing</Link>
                  </li>
                  <li>
                    <Link href="#">Grid</Link>
                    <ul>
                      <li>
                        <Link href="blog-grid-2cols.html">Grid 2 columns</Link>
                      </li>
                      <li>
                        <Link href="blog-grid-3cols.html">Grid 3 columns</Link>
                      </li>
                      <li>
                        <Link href="blog-grid-4cols.html">Grid 4 columns</Link>
                      </li>
                      <li>
                        <Link href="blog-grid-sidebar.html">Grid sidebar</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">Masonry</Link>
                    <ul>
                      <li>
                        <Link href="blog-masonry-2cols.html">Masonry 2 columns</Link>
                      </li>
                      <li>
                        <Link href="blog-masonry-3cols.html">Masonry 3 columns</Link>
                      </li>
                      <li>
                        <Link href="blog-masonry-4cols.html">Masonry 4 columns</Link>
                      </li>
                      <li>
                        <Link href="blog-masonry-sidebar.html">Masonry sidebar</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">Mask</Link>
                    <ul>
                      <li>
                        <Link href="blog-mask-grid.html">Blog mask grid</Link>
                      </li>
                      <li>
                        <Link href="blog-mask-masonry.html">Blog mask masonry</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">Single Post</Link>
                    <ul>
                      <li>
                        <Link href="single.html">Default with sidebar</Link>
                      </li>
                      <li>
                        <Link href="single-fullwidth.html">Fullwidth no sidebar</Link>
                      </li>
                      <li>
                        <Link href="single-fullwidth-sidebar.html">
                          Fullwidth with sidebar
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="elements-list.html" className="sf-with-ul">
                  Elements
                </Link>

                <ul>
                  <li>
                    <Link href="elements-products.html">Products</Link>
                  </li>
                  <li>
                    <Link href="elements-typography.html">Typography</Link>
                  </li>
                  <li>
                    <Link href="elements-titles.html">Titles</Link>
                  </li>
                  <li>
                    <Link href="elements-banners.html">Banners</Link>
                  </li>
                  <li>
                    <Link href="elements-product-category.html">
                      Product Category
                    </Link>
                  </li>
                  <li>
                    <Link href="elements-video-banners.html">Video Banners</Link>
                  </li>
                  <li>
                    <Link href="elements-buttons.html">Buttons</Link>
                  </li>
                  <li>
                    <Link href="elements-accordions.html">Accordions</Link>
                  </li>
                  <li>
                    <Link href="elements-tabs.html">Tabs</Link>
                  </li>
                  <li>
                    <Link href="elements-testimonials.html">Testimonials</Link>
                  </li>
                  <li>
                    <Link href="elements-blog-posts.html">Blog Posts</Link>
                  </li>
                  <li>
                    <Link href="elements-portfolio.html">Portfolio</Link>
                  </li>
                  <li>
                    <Link href="elements-cta.html">Call to Action</Link>
                  </li>
                  <li>
                    <Link href="elements-icon-boxes.html">Icon Boxes</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <i className="la la-lightbulb-o"></i>
          <p>
            Clearance<span className="highlight">&nbsp;Up to 30% Off</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
