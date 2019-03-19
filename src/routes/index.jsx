import AboutUsPage from "views/AboutUsPage/AboutUsPage.jsx";
import BlogPostPage from "views/BlogPostPage/BlogPostPage.jsx";
import BlogPostsPage from "views/BlogPostsPage/BlogPostsPage.jsx";
import ComponentsPage from "views/ComponentsPage/ComponentsPage.jsx";
import ContactUsPage from "views/ContactUsPage/ContactUsPage.jsx";
import EcommercePage from "views/EcommercePage/EcommercePage.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import PresentationPage from "views/PresentationPage/PresentationPage.jsx";
import PricingPage from "views/PricingPage/PricingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import ProductPage from "views/ProductPage/ProductPage.jsx";
import SectionsPage from "views/SectionsPage/SectionsPage.jsx";
import ShoppingCartPage from "views/ShoppingCartPage/ShoppingCartPage.jsx";
import SignupPage from "views/SignupPage/SignupPage.jsx";

var indexRoutes = [
  { path: "/about-us", name: "AboutUsPage", component: AboutUsPage },
  { path: "/blog-post", name: "BlogPostPage", component: BlogPostPage },
  { path: "/blog-posts", name: "BlogPostsPage", component: BlogPostsPage },
  { path: "/components", name: "Components", component: ComponentsPage },
  { path: "/contact-us", name: "ContactUsPage", component: ContactUsPage },
  { path: "/ecommerce-page", name: "EcommercePage", component: EcommercePage },
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/pricing", name: "PricingPage", component: PricingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/product-page", name: "ProductPage", component: ProductPage },
  { path: "/sections", name: "SectionsPage", component: SectionsPage },
  {
    path: "/shopping-cart-page",
    name: "ShoppingCartPage",
    component: ShoppingCartPage
  },
  { path: "/signup-page", name: "SignupPage", component: SignupPage },
  { path: "/", name: "PresentationPage", component: PresentationPage }
];

export default indexRoutes;
