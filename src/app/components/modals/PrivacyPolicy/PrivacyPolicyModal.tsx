"use client";

import { useEffect } from "react";
import styles from "./PrivacyPolicyModal.module.css";

type PrivacyPolicyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-policy-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="privacy-policy-title">Privacy Policy</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close privacy policy"
          >
            ×
          </button>
        </div>

        <div className={styles.content}>
          <section>
            <h3>1. Introduction</h3>
            <p>
              This Privacy Policy explains how we collect, use, and protect your
              information when you submit an inquiry through our website
              regarding courses, workshops, or custom experiences.
            </p>
          </section>

          <section>
            <h3>2. Information We Collect</h3>
            <p>When you fill out our inquiry form, we may collect:</p>

            <h4>Contact & Identification Information:</h4>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Organization or company name, if applicable</li>
              <li>Role or title</li>
            </ul>

            <h4>Event & Planning Details:</h4>
            <ul>
              <li>Type of group, such as company, private group, or other</li>
              <li>Preferred location, such as home, business, training site, or online</li>
              <li>Desired format and duration, such as workshop, retreat, or keynote</li>
              <li>Preferred dates</li>
              <li>Estimated group size</li>
              <li>Goals for the experience</li>
              <li>Any additional details you choose to share</li>
            </ul>
          </section>

          <section>
            <h3>3. How We Use Your Information</h3>
            <p>We use this information to:</p>
            <ul>
              <li>Respond to your inquiry</li>
              <li>Design and propose customized experiences</li>
              <li>Communicate with you about scheduling and logistics</li>
              <li>Improve our offerings based on client needs</li>
            </ul>
            <p>We do not sell or rent your personal information.</p>
          </section>

          <section>
            <h3>4. How We Share Information</h3>
            <p>We may share your information only when necessary with:</p>
            <ul>
              <li>Trusted service providers, such as email platforms, scheduling tools, and website hosting</li>
              <li>Partners or collaborators involved in delivering your requested experience, only when relevant</li>
              <li>Legal authorities, if required by law</li>
            </ul>
          </section>

          <section>
            <h3>5. Sensitive Information</h3>
            <p>
              Some information you provide, such as group goals or context, may
              be considered personal or sensitive. We only collect what you
              voluntarily share and use it solely to better understand and serve
              your request.
            </p>
            <p>
              Please avoid including confidential or highly sensitive personal
              data unless necessary.
            </p>
          </section>

          <section>
            <h3>6. Cookies & Analytics</h3>
            <p>
              Our website may use cookies or analytics tools to understand how
              visitors interact with the site and improve user experience. You
              can manage cookies through your browser settings.
            </p>
          </section>

          <section>
            <h3>7. Data Retention</h3>
            <p>We retain your information only as long as necessary to:</p>
            <ul>
              <li>Respond to your inquiry</li>
              <li>Maintain business records</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h3>8. Your Privacy Rights</h3>
            <p>
              Depending on your location, including under the California Consumer
              Privacy Act, you may have the right to:
            </p>
            <ul>
              <li>Request access to your personal information</li>
              <li>Request deletion of your data</li>
              <li>Ask how your data is being used</li>
            </ul>
            <p>
              To make a request, contact us at{" "}
              <a href="mailto:owlsskills@gmail.com">owlsskills@gmail.com</a>.
            </p>
          </section>

          <section>
            <h3>9. Data Security</h3>
            <p>
              We take reasonable measures to protect your information. However,
              no online transmission is completely secure.
            </p>
          </section>

          <section>
            <h3>10. Children’s Privacy</h3>
            <p>
              Our services are not intended for individuals under 13, and we do
              not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h3>11. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised effective date.
            </p>
          </section>

          <section>
            <h3>12. Contact</h3>
            <p>
              OWLS Skills
              <br />
              <a href="mailto:owlsskills@gmail.com">owlsskills@gmail.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}