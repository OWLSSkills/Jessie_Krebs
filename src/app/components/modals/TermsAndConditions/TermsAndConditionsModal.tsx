"use client";

import { useEffect } from "react";
import styles from "./TermsAndConditionsModal.module.css";

type TermsConditionsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function TermsConditionsModal({ isOpen, onClose }: TermsConditionsModalProps) {
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
        aria-labelledby="terms-conditions-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 id="terms-conditions-title">Terms & Conditions</h2>

          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close terms and conditions"
          >
            ×
          </button>
        </div>

        <div className={styles.content}>
          <section>
            <h3>1. Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you agree to be bound by these
              Terms & Conditions. If you do not agree, please do not use this
              website.
            </p>
          </section>

          <section>
            <h3>2. Use of This Website</h3>
            <p>
              This website is intended to provide information about our courses,
              workshops, and custom experiences. You agree to use this site for
              lawful purposes only and not to misuse or interfere with its
              operation.
            </p>
          </section>

          <section>
            <h3>3. Inquiries & Bookings</h3>
            <p>
              Submitting a form through this website does not constitute a
              confirmed booking.
            </p>
            <p>
              All courses, workshops, and custom experiences are subject to:
            </p>
            <ul>
              <li>Availability</li>
              <li>Review and approval</li>
              <li>Separate agreements or confirmations</li>
            </ul>
            <p>
              We reserve the right to accept or decline any request at our
              discretion.
            </p>
          </section>

          <section>
            <h3>4. Program Information</h3>
            <p>
              We strive to provide accurate and up-to-date information. However,
              we do not guarantee that all descriptions, dates, or details are
              free from errors or omissions.
            </p>
            <p>
              Program content, format, and instructors may change without notice.
            </p>
          </section>

          <section>
            <h3>5. Assumption of Risk</h3>
            <p>
              Our offerings may include outdoor, physical, or experiential
              activities that carry inherent risks.
            </p>
            <p>
              By choosing to participate in any of our programs, you acknowledge
              and accept that:
            </p>
            <ul>
              <li>
                Activities may involve physical exertion, environmental exposure,
                and unpredictable conditions
              </li>
              <li>Participation is voluntary</li>
              <li>
                You are responsible for assessing your own readiness and
                limitations
              </li>
            </ul>
            <p>
              Participation may require signing a separate liability waiver prior
              to the activity.
            </p>
          </section>

          <section>
            <h3>6. Health & Safety</h3>
            <p>
              You are responsible for ensuring that you are physically and
              mentally fit to participate in any activity.
            </p>
            <p>
              You agree to inform us of any relevant conditions or limitations
              that may affect your participation.
            </p>
          </section>

          <section>
            <h3>7. Payments, Cancellations & Refunds</h3>
            <p>
              If applicable, payment terms, cancellation policies, and refund
              conditions will be outlined separately at the time of booking or
              agreement.
            </p>
          </section>

          <section>
            <h3>8. Intellectual Property</h3>
            <p>
              All content on this website—including text, images, videos, and
              materials—is the property of OWLS Skills unless otherwise stated.
            </p>
            <p>
              You may not reproduce, distribute, or use this content without
              prior written permission.
            </p>
          </section>

          <section>
            <h3>9. Third-Party Links</h3>
            <p>
              This website may contain links to third-party websites. We are not
              responsible for the content, policies, or practices of those sites.
            </p>
          </section>

          <section>
            <h3>10. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, we are not liable for any
              direct, indirect, incidental, or consequential damages arising from:
            </p>
            <ul>
              <li>Your use of this website</li>
              <li>Participation in our programs</li>
              <li>Reliance on information provided</li>
            </ul>
          </section>

          <section>
            <h3>11. Privacy</h3>
            <p>Your use of this website is also governed by our Privacy Policy.</p>
          </section>

          <section>
            <h3>12. Changes to These Terms</h3>
            <p>
              We may update these Terms & Conditions at any time. Changes will be
              posted on this page with an updated effective date.
            </p>
          </section>

          <section>
            <h3>13. Governing Law</h3>
            <p>
              These Terms & Conditions are governed by the laws of the United
              States and the applicable state in which the business operates.
            </p>
          </section>

          <section>
            <h3>14. Contact</h3>
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