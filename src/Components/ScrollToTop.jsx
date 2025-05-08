import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GoArrowUp } from "react-icons/go";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // button visible when page is scroll-down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-12 h-12 inline-flex justify-center items-center text-center bg-gradient-to-tl from-lime-500 to-lime-500 shadow-lg shadow-transparent hover:shadow-lime-700/50 border border-transparent text-white text-xl font-medium rounded-full focus:outline-none focus:shadow-lime-700/50"
          aria-label="Scroll to top"
        >
          <GoArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
