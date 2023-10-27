/* eslint-disable react/prop-types */
import Footer from "../Footer";
import Navbar from "../Navbar";
import ScrollToTopButton from "../ScrolledUp";

export default function Layout(props) {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
