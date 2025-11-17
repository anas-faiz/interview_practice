import { useEffect, useState } from "react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);  

  useEffect(() => {
    try {
      function handleScroll() {
        if (window.scrollY > 300) {
          setIsVisible(true)
        }
        else {
          setIsVisible(false)
        }
      }
      window.addEventListener("scroll", handleScroll)

      return () => window.removeEventListener("scroll", handleScroll)
    } catch (error) {
      console.log("Error: " + error.message)
    }
  }, []);

  function scrollToTop() {
    // Implement smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>

      {/* Add some content to enable scrolling */}
      {
        [...Array(50)].map((_, i) => (
          <p key={i}>this is paragraph {i+1}</p>
        ))
      }
      
      <div className="container">
        {/* Show this button only after scrolling down */}
        {isVisible && (
          <button
          className="backtotop-btn"
          onClick={scrollToTop}
          data-testid="back-to-top-btn"
        >
          Back to Top
        </button>)}
      </div>
    </div>
  );
}
export default BackToTop;
