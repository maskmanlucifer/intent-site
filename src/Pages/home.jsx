/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import "../Stylesheets/index.scss";
import Logo from "../assets/logo.png";

const LandingPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://ik.imagekit.io/dnz8iqrsyc/Screenshot%202025-05-18%20at%206.51.48%E2%80%AFAM.png",
    "https://ik.imagekit.io/dnz8iqrsyc/Screenshot%202025-05-18%20at%207.25.52%E2%80%AFAM.png",
    "https://ik.imagekit.io/dnz8iqrsyc/Screenshot%202025-05-18%20at%207.23.53%E2%80%AFAM.png",
    "https://ik.imagekit.io/dnz8iqrsyc/Screenshot%202025-05-18%20at%207.26.52%E2%80%AFAM.png",
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="home-page">
      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <img src={Logo} alt="Intent Logo" className="logo-icon" />
              Intent
            </div>

            <a
              href="https://chromewebstore.google.com/detail/bapldbpdhjohehmbpjchkadkbjndhjdd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-extension"
            >
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_45_85)">
                  <path
                    d="M12.0003 17.9998C15.3141 17.9998 18.0005 15.3133 18.0005 11.9994C18.0005 8.68551 15.3141 5.99902 12.0003 5.99902C8.68636 5.99902 6 8.68551 6 11.9994C6 15.3133 8.68636 17.9998 12.0003 17.9998Z"
                    fill="white"
                  />
                  <path
                    d="M6.80392 15.0009L1.60833 6.00183C0.554771 7.82593 6.63524e-05 9.89528 5.9523e-09 12.0018C-6.63405e-05 14.1083 0.554508 16.1777 1.60795 18.0018C2.66133 19.826 4.1764 21.3407 6.00082 22.3936C7.82524 23.4465 9.8947 24.0005 12.0012 23.9999L17.1967 15.0009V14.9995C16.6705 15.9121 15.9132 16.67 15.0011 17.197C14.089 17.724 13.0542 18.0015 12.0008 18.0017C10.9474 18.0018 9.91248 17.7246 9.00021 17.1979C8.08794 16.6712 7.33046 15.9135 6.80392 15.0011V15.0009Z"
                    fill="#229342"
                  />
                  <path
                    d="M17.1961 15.0006L12.0007 23.9996C14.1071 23.9999 16.1765 23.4456 18.0008 22.3924C19.8251 21.3393 21.3399 19.8243 22.393 18C23.446 16.1756 24.0003 14.1062 23.9999 11.9997C23.9995 9.89326 23.4446 7.82399 22.3909 6H11.9998L11.9985 6.00088C13.0519 6.00038 14.0869 6.27725 14.9994 6.80365C15.9118 7.33007 16.6696 8.08748 17.1964 8.99968C17.7232 9.91191 18.0006 10.9468 18.0006 12.0002C18.0005 13.0536 17.7231 14.0885 17.1963 15.0007L17.1961 15.0006Z"
                    fill="#FBC116"
                  />
                  <path
                    d="M12.0002 16.751C14.6237 16.751 16.7505 14.6242 16.7505 12.0006C16.7505 9.37698 14.6237 7.25037 12.0002 7.25037C9.37674 7.25037 7.25 9.37711 7.25 12.0006C7.25 14.6241 9.37674 16.751 12.0002 16.751Z"
                    fill="#1A73E8"
                  />
                  <path
                    d="M12.0003 6.00038H22.3914C21.3384 4.17596 19.8237 2.66091 17.9995 1.60756C16.1753 0.554276 14.1059 -0.000159884 11.9995 3.45846e-08C9.89301 0.000105044 7.82373 0.554848 5.99971 1.60844C4.17564 2.66199 2.66111 4.17721 1.6084 6.00176L6.80399 15.0008L6.80537 15.0016C6.27823 14.0895 6.00053 13.0548 6.00019 12.0013C5.99986 10.9479 6.27691 9.91295 6.80348 9.00057C7.32999 8.08812 8.08752 7.33044 8.99985 6.80375C9.91218 6.27705 10.9471 5.99993 12.0006 6.00025L12.0003 6.00038Z"
                    fill="#E33B2E"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_85">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Get the Extension
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="tag">Boost Your Productivity</div>
          <h1>Your All-in-One Productivity Hub</h1>
          <p>
            Manage tasks, focus deeply, take breaks, and save inspirations — all
            from your new tab.
          </p>
          <div className="cta-group">
            <a
              href="https://chromewebstore.google.com/detail/bapldbpdhjohehmbpjchkadkbjndhjdd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Add to Chrome
            </a>
            <a
              className="btn btn-secondary"
              onClick={() => {
                const featuresSection = document.getElementById("features");
                if (featuresSection) {
                  featuresSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              What intent offers
            </a>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="demo">
        <div className="container">
          <div className="browser-mockup">
            <div className="browser-bar">
              <div className="browser-dots">
                <div className="browser-dot dot-red" />
                <div className="browser-dot dot-yellow" />
                <div className="browser-dot dot-green" />
              </div>
              <div className="search-bar">chrome://newtab</div>
            </div>
            <div className="browser-content">
              <img
                src={images[currentImageIndex]}
                alt="Carousel"
                className="carousel-image"
              />
            </div>
          </div>
          <div className="carousel-controls">
                <button onClick={handlePrev} className="carousel-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.765 4.045C7.83899 3.97798 7.89885 3.89687 7.94108 3.80642C7.98331 3.71597 8.00705 3.618 8.01093 3.51826C8.01481 3.41851 7.99873 3.31899 7.96365 3.22554C7.92856 3.13208 7.87518 3.04657 7.80662 2.97402C7.73806 2.90147 7.6557 2.84333 7.56438 2.80302C7.47306 2.7627 7.37462 2.74103 7.27481 2.73925C7.175 2.73748 7.07585 2.75565 6.98315 2.7927C6.89046 2.82974 6.8061 2.88492 6.735 2.955L2.237 7.203C2.16206 7.2729 2.10228 7.35747 2.06138 7.45144C2.02048 7.54541 1.99932 7.64679 1.99923 7.74928C1.99914 7.85177 2.0201 7.95318 2.06083 8.04723C2.10157 8.14127 2.16119 8.22595 2.236 8.29599L6.735 12.546C6.87968 12.6826 7.07269 12.7561 7.27157 12.7504C7.47045 12.7447 7.65892 12.6602 7.7955 12.5155C7.93209 12.3708 8.00561 12.1778 7.99989 11.9789C7.99417 11.78 7.90968 11.5916 7.765 11.455L4.636 8.5H13.25C13.4489 8.5 13.6397 8.42098 13.7803 8.28032C13.921 8.13967 14 7.94891 14 7.75C14 7.55108 13.921 7.36032 13.7803 7.21967C13.6397 7.07901 13.4489 7 13.25 7H4.636L7.765 4.045Z"
                      fill="black"
                    />
                  </svg>
                </button>
                <button onClick={handleNext} className="carousel-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.235 4.045C8.16102 3.97798 8.10116 3.89687 8.05893 3.80642C8.0167 3.71597 7.99295 3.618 7.98907 3.51826C7.9852 3.41851 8.00127 3.31899 8.03636 3.22554C8.07144 3.13208 8.12483 3.04657 8.19339 2.97402C8.26195 2.90147 8.3443 2.84333 8.43562 2.80302C8.52694 2.7627 8.62539 2.74103 8.72519 2.73925C8.825 2.73748 8.92416 2.75565 9.01685 2.7927C9.10954 2.82974 9.19391 2.88492 9.265 2.955L13.765 7.205C13.8391 7.27509 13.8982 7.35958 13.9386 7.45329C13.9789 7.547 13.9998 7.64796 13.9998 7.75C13.9998 7.85203 13.9789 7.95299 13.9386 8.0467C13.8982 8.14041 13.8391 8.2249 13.765 8.295L9.265 12.545C9.11961 12.6767 8.9284 12.7462 8.73237 12.7386C8.53635 12.731 8.35111 12.6468 8.21637 12.5043C8.08163 12.3617 8.00813 12.172 8.01161 11.9758C8.01509 11.7797 8.09529 11.5927 8.235 11.455L11.364 8.5H2.75C2.55109 8.5 2.36032 8.42098 2.21967 8.28032C2.07902 8.13967 2 7.94891 2 7.75C2 7.55108 2.07902 7.36032 2.21967 7.21967C2.36032 7.07901 2.55109 7 2.75 7H11.364L8.235 4.045Z"
                      fill="black"
                    />
                  </svg>
                </button>
              </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2 className="section-title">Everything you need, in one place</h2>
          <p className="section-subtitle">
            Designed to help you stay focused and productive
          </p>
          <div className="features-grid">
            {features.map((feature, i) => (
              <div key={i} className={`feature-card feature-card-${i}`}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">Ready to transform your productivity?</h2>
            <p className="cta-subtitle">
              Join users who have improved their focus and efficiency with Intent.
            </p>
            <a
              href="https://chromewebstore.google.com/detail/bapldbpdhjohehmbpjchkadkbjndhjdd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Add to Chrome — It's Free
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={Logo} alt="Intent Logo" className="logo-icon" />
                Intent
              </div>
            </div>
            <div className="footer-links">
              <a
                href="https://github.com/maskmanlucifer/intent"
                className="footer-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <span className="footer-built-by">
                Built by{" "}
                <a
                  href="https://maskmanlucifer.github.io/lucifer/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  maskmanlucifer
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// You can define this array outside to keep your JSX clean
const features = [
  {
    title: "Manage To-Do's",
    description:
      "Create, organize, and track your tasks directly in your new tab.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M19 2H5C3.89543 2 3 2.89543 3 4V20.1994C3 21.3008 4.14741 22.0266 5.14262 21.5548L7.16507 20.5959C7.69479 20.3447 8.30803 20.3386 8.84263 20.5792L11.1793 21.6307C11.7012 21.8655 12.2988 21.8655 12.8207 21.6307L15.1574 20.5792C15.692 20.3386 16.3052 20.3447 16.8349 20.5959L18.8574 21.5548C19.8526 22.0266 21 21.3008 21 20.1994V4C21 2.89543 20.1046 2 19 2Z"
          fill="#28303F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.25 7C7.25 6.58579 7.58579 6.25 8 6.25H12C12.4142 6.25 12.75 6.58579 12.75 7C12.75 7.41421 12.4142 7.75 12 7.75H8C7.58579 7.75 7.25 7.41421 7.25 7ZM7.25 11C7.25 10.5858 7.58579 10.25 8 10.25H16C16.4142 10.25 16.75 10.5858 16.75 11C16.75 11.4142 16.4142 11.75 16 11.75H8C7.58579 11.75 7.25 11.4142 7.25 11ZM7.25 15C7.25 14.5858 7.58579 14.25 8 14.25H16C16.4142 14.25 16.75 14.5858 16.75 15C16.75 15.4142 16.4142 15.75 16 15.75H8C7.58579 15.75 7.25 15.4142 7.25 15Z"
          fill="#28303F"
        />
      </svg>
    ),
  },
  {
    title: "Focus Mode with Music",
    description:
      "Boost your productivity with built-in music widget and focus mode.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.4" cx="12" cy="12" r="10" fill="#28303F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12Z"
          fill="#28303F"
        />
        <circle cx="12" cy="12" r="1" fill="#28303F" />
      </svg>
    ),
  },
  {
    title: "Daily Calendar",
    description:
      "See your schedule at a glance and never miss important events.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M3 9H21V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V9Z"
          fill="#28303F"
        />
        <path
          d="M17 3.5H7C4.79086 3.5 3 5.29086 3 7.5V9H21V7.5C21 5.29086 19.2091 3.5 17 3.5Z"
          fill="#28303F"
        />
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1.25C8.41421 1.25 8.75 1.58579 8.75 2V5C8.75 5.41421 8.41421 5.75 8 5.75C7.58579 5.75 7.25 5.41421 7.25 5V2C7.25 1.58579 7.58579 1.25 8 1.25ZM16 1.25C16.4142 1.25 16.75 1.58579 16.75 2V5C16.75 5.41421 16.4142 5.75 16 5.75C15.5858 5.75 15.25 5.41421 15.25 5V2C15.25 1.58579 15.5858 1.25 16 1.25Z"
          fill="#28303F"
        />
      </svg>
    ),
  },
  {
    title: "Break Reminders",
    description:
      "Gentle notifications to take breaks and maintain your wellbeing.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.71505 17.4174C7.03681 17.6783 7.08619 18.1506 6.82534 18.4723L3.58263 22.4723C3.32178 22.7941 2.84948 22.8435 2.52772 22.5826C2.20596 22.3218 2.15657 21.8495 2.41742 21.5277L5.66014 17.5277C5.92098 17.206 6.39328 17.1566 6.71505 17.4174ZM17.2848 17.4174C17.6066 17.1566 18.0789 17.2059 18.3397 17.5277L21.5826 21.5277C21.8435 21.8495 21.7941 22.3218 21.4723 22.5826C21.1506 22.8435 20.6783 22.7941 20.4174 22.4723L17.1746 18.4723C16.9137 18.1506 16.9631 17.6783 17.2848 17.4174Z"
          fill="#28303F"
        />
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.88383 1.6997C8.04979 2.07921 7.87667 2.5214 7.49715 2.68736C5.50681 3.55772 3.81588 4.98821 2.62463 6.77986C2.39529 7.12478 1.92975 7.21849 1.58482 6.98915C1.2399 6.75981 1.14619 6.29427 1.37553 5.94934C2.72454 3.92041 4.63941 2.29988 6.89617 1.31302C7.27568 1.14706 7.71787 1.32018 7.88383 1.6997ZM16.1163 1.6997C16.2823 1.32018 16.7245 1.14706 17.104 1.31302C19.3607 2.29988 21.2756 3.92041 22.6246 5.94934C22.854 6.29427 22.7603 6.75981 22.4153 6.98915C22.0704 7.21849 21.6049 7.12478 21.3755 6.77985C20.1843 4.98821 18.4934 3.55772 16.503 2.68736C16.1235 2.5214 15.9504 2.07921 16.1163 1.6997Z"
          fill="#28303F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C16.9706 22 21 17.9706 21 13C21 8.02944 16.9706 4 12 4C7.02944 4 3 8.02944 3 13C3 17.9706 7.02944 22 12 22ZM12.4995 8.97205C12.4995 8.59215 12.1637 8.28418 11.7495 8.28418C11.3353 8.28418 10.9995 8.59215 10.9995 8.97205V13.5579C10.9995 13.7879 11.1248 14.0026 11.3335 14.1302L14.3335 15.9645C14.6781 16.1753 15.1438 16.0899 15.3735 15.7738C15.6033 15.4577 15.5102 15.0306 15.1655 14.8199L12.4995 13.1897V8.97205Z"
          fill="#28303F"
        />
      </svg>
    ),
  },
  {
    title: "Save Links & Inspiration",
    description: "Bookmark important resources and inspirational content.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M4 19.4915V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4L20 19.4915C20 20.7409 18.562 21.4427 17.5771 20.674L13.2305 16.7167C12.5073 16.1522 11.4927 16.1522 10.7695 16.7167L6.42289 20.674C5.43797 21.4427 4 20.7409 4 19.4915Z"
          fill="#28303F"
        />
        <path
          d="M6 2H18C19.1046 2 20 2.89543 20 4V7H4V4C4 2.89543 4.89543 2 6 2Z"
          fill="#28303F"
        />
      </svg>
    ),
  },
  {
    title: "Shortcut Support",
    description:
      "Enhance productivity with shortcut support and a clean, minimal UI.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 2 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.4"
          d="M14.5 7H9.5C6.21252 7 4.56878 7 3.46243 7.90796C3.25989 8.07418 3.07418 8.25989 2.90796 8.46243C2 9.56878 2 11.2125 2 14.5C2 17.7875 2 19.4312 2.90796 20.5376C3.07418 20.7401 3.25989 20.9258 3.46243 21.092C4.56878 22 6.21252 22 9.5 22H14.5C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.4312 7 17.7875 7 14.5 7Z"
          fill="#155dfc"
        />
        <path
          d="M14.5 7H9.5C6.21252 7 4.56878 7 3.46243 7.90796C3.25989 8.07418 3.07418 8.25989 2.90796 8.46243C2 9.56878 2 11.2125 2 14.5C2 17.7875 2 19.4312 2.90796 20.5376C3.07418 20.7401 3.25989 20.9258 3.46243 21.092C4.56878 22 6.21252 22 9.5 22H14.5C17.7875 22 19.4312 22 20.5376 21.092C20.7401 20.9258 20.9258 20.7401 21.092 20.5376C22 19.4312 22 17.7875 22 14.5C22 11.2125 22 9.56878 21.092 8.46243C20.9258 8.25989 20.7401 8.07418 20.5376 7.90796C19.4312 7 17.7875 7 14.5 7Z"
          stroke="#1447e6"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7 12L8 12"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 12L12.5 12"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12L17 12"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 17L17 17"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default LandingPage;
