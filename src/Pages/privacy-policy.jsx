import React from "react";
import "../Stylesheets/index.scss";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>
        Privacy Policy{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          color="#000000"
          fill="none"
        >
          <path
            d="M7 14.9999C5.34315 14.9999 4 16.343 4 17.9999C4 19.6567 5.34315 20.9999 7 20.9999C8.65685 20.9999 10 19.6567 10 17.9999C10 16.343 8.65685 14.9999 7 14.9999Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17 14.9999C15.3431 14.9999 14 16.343 14 17.9999C14 19.6567 15.3431 20.9999 17 20.9999C18.6569 20.9999 20 19.6567 20 17.9999C20 16.343 18.6569 14.9999 17 14.9999Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 17H10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22 12.9999C19.5434 11.7724 15.9734 10.9999 12 10.9999C8.02658 10.9999 4.45659 11.7724 2 12.9999"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 11.4999L17.9425 4.71233C17.7268 3.32807 16.2232 2.578 15.0093 3.24907L14.3943 3.58903C12.9019 4.414 11.0981 4.414 9.60574 3.58903L8.99074 3.24907C7.77676 2.578 6.27318 3.32808 6.05751 4.71233L5 11.4999"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </h1>
      <div className="block">
        <p className="effective-date">
          <strong>Effective date:</strong> 5 January 2025
        </p>
        <p>
          This Privacy Policy outlines the data we collect, why we collect it,
          how it’s handled, and your rights regarding your data. We are
          committed to safeguarding your privacy and will never sell your data.
        </p>
      </div>
      <div className="block transparency">
        <h3>
          Transparency and Data Collection{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8.02593 15.6067C8.00876 15.4067 8 15.2044 8 15C8 11.134 11.134 8 15 8C15.2867 8 15.5693 8.01723 15.8469 8.05071M18.9969 9.25251C20.8121 10.5172 22 12.6199 22 15C22 18.866 18.866 22 15 22C12.6199 22 10.5172 20.8121 9.25251 18.9969"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.5 2.5L15.5 11.5M2.5 6.5L11.5 15.5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </h3>
        <h4>What We Don’t See</h4>
        <p>
          We respect your privacy by not accessing or monitoring the content you
          add to your to-do items or notes. For instance, we will never know you
          wrote “Create a productivity app,” but we hope you stay productive and
          enjoy your plans.
        </p>
        <h4>No Data Selling</h4>
        <p>
          We do not sell your data to third parties or use it for targeted
          marketing purposes. Your information is yours, and we intend to keep
          it that way.
        </p>
        <h4>Data for Better Service</h4>
        <p>
          The data we collect is strictly to improve your experience. For
          example, aggregate data helps us understand which features you find
          most useful and which may need improvement.
        </p>
      </div>
      <div className="block data">
        <h3>
          Personal Data We Collect{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <ellipse
              cx="12"
              cy="5"
              rx="8"
              ry="3"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M20 12C20 13.6569 16.4183 15 12 15C7.58172 15 4 13.6569 4 12"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M20 5V19C20 20.6569 16.4183 22 12 22C7.58172 22 4 20.6569 4 19V5"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M8 8V10"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M8 15V17"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </h3>
        <h4>Tasks, Notes, and Subtasks</h4>
        <p>
          The content of your tasks, notes, and subtasks remains private. In our
          beta version, all data is securely stored in your browser’s local
          storage, meaning it is only accessible to you. In the future, we plan
          to move storage to a secure Service Provider to enable multi-device
          access. When this change occurs, we will notify you.
        </p>
        <h4>Website Interactions</h4>
        <p>
          When you browse our website, we collect information automatically
          shared by your browser, such as your operating system, browser
          version, the pages you visit, and referring websites. This data is
          used for statistical purposes, testing designs, and improving our
          services.
        </p>
      </div>
      <div className="block">
        <h3>Compliance with Google APIs</h3>
        <p>
          Our use and transfer of information received through Google APIs
          adhere to the{" "}
          <a href="https://developers.google.com/terms/api-services-user-data-policy">
            Google API Services User Data Policy
          </a>
          , including Limited Use requirements.
        </p>
      </div>
      <div className="block">
        <p>We collect and analyze aggregate data to:</p>
        <ul>
          <li>Improve our product and services.</li>
          <li>Protect against fraud and enhance security.</li>
          <li>Communicate with you regarding bugs, support, or updates.</li>
          <li>Send product updates or marketing (if opted in).</li>
        </ul>
      </div>
      <div className="block">
        <h3>Data Storage and Protection</h3>
        <p>
          In the current beta version, all your data is stored in your browser’s
          local storage, ensuring only you can access it. Once we transition to
          storing data with a secure Service Provider, you’ll be able to access
          your data across multiple devices, and we’ll notify you before this
          change.
        </p>
      </div>
      <div className="block">
        <h3>Policy Changes</h3>
        <p>
          We’re continually improving our services, and this Privacy Policy may
          change over time. If we make significant updates, we’ll notify you
          through our app, website, or email. If you’ve opted out of email
          notifications or haven’t provided an email, the updated policy will
          still apply, and it’s your responsibility to review it.
        </p>
        <p>
          By using our services, you agree to the practices outlined in this
          Privacy Policy. If you have questions, feel free to reach out.
        </p>
      </div>
      <div className="block contact">
        <h3>Contact Us</h3>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="4"
              ry="10"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M2 12H22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <a href="https://maskmanlucifer.github.io/intent-site/">
            https://maskmanlucifer.github.io/intent-site/
          </a>
        </p>
        <p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="#000000"
            fill="none"
          >
            <path
              d="M2 5L8.91302 8.92462C11.4387 10.3585 12.5613 10.3585 15.087 8.92462L22 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 19.5C10.0337 19.4939 9.56682 19.485 9.09883 19.4732C5.95033 19.3941 4.37608 19.3545 3.24496 18.2184C2.11383 17.0823 2.08114 15.5487 2.01577 12.4814C1.99475 11.4951 1.99474 10.5147 2.01576 9.52843C2.08114 6.46113 2.11382 4.92748 3.24495 3.79139C4.37608 2.6553 5.95033 2.61573 9.09882 2.53658C11.0393 2.4878 12.9607 2.48781 14.9012 2.53659C18.0497 2.61574 19.6239 2.65532 20.755 3.79141C21.8862 4.92749 21.9189 6.46114 21.9842 9.52844C21.9939 9.98251 21.9991 10.1965 21.9999 10.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17ZM19 17V17.5C19 18.3284 19.6716 19 20.5 19C21.3284 19 22 18.3284 22 17.5V17C22 14.5147 19.9853 12.5 17.5 12.5C15.0147 12.5 13 14.5147 13 17C13 19.4853 15.0147 21.5 17.5 21.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          <a href="mailto:brightpixellabs@gmail.com">
            brightpixellabs@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
