"use client";
import Layout from "@/components/layout/Layout";

export default function PrivacyPolicy() {
  return (
    <>
      <Layout
        pageTitle="Privacy Policy"
        pageTitleDesc="Last Modified: January 2025"
      >
        <div className="container">
          <div className="page-content inner boxed">
            <p>
              At <strong>Olymp Trade App</strong>, we respect your privacy and
              are committed to protecting your personal and financial
              information. This Privacy Policy explains how we collect, use, and
              safeguard your data when you use our trading application and
              related services.
            </p>

            <h3>1. Information We Collect</h3>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Name, email address,
                phone number, date of birth, identification documents (for
                KYC/AML compliance).
              </li>
              <li>
                <strong>Financial Information:</strong> Bank account details,
                payment method, transaction history, wallet addresses.
              </li>
              <li>
                <strong>Technical Information:</strong> Device type, IP address,
                browser type, operating system, app usage statistics.
              </li>
              <li>
                <strong>Cookies and Tracking Data:</strong> Used to improve
                experience and enhance security.
              </li>
            </ul>

            <h3>2. How We Use Your Information</h3>
            <ul>
              <li>To provide and maintain our trading and wallet services.</li>
              <li>To process transactions securely and efficiently.</li>
              <li>
                To comply with legal, regulatory, and anti-money laundering
                (AML) obligations.
              </li>
              <li>To verify identity and prevent fraud.</li>
              <li>To personalize user experience and app functionality.</li>
              <li>
                To send important notifications, updates, and promotional
                offers.
              </li>
            </ul>

            <h3>3. Data Security</h3>
            <p>
              We use industry-standard encryption and security measures to
              protect your personal and financial data from unauthorized access,
              disclosure, or alteration. However, please note that no method of
              transmission over the Internet or electronic storage is 100%
              secure.
            </p>

            <h3>4. Data Sharing and Disclosure</h3>
            <p>
              We do not sell or rent your data. We may share information only:
            </p>
            <ul>
              <li>
                With financial institutions and payment processors to complete
                transactions.
              </li>
              <li>
                With regulators, tax authorities, or law enforcement if required
                by law.
              </li>
              <li>
                With third-party providers (e.g., cloud hosting, analytics, KYC
                verification) under strict confidentiality agreements.
              </li>
              <li>In connection with business transfers such as mergers.</li>
            </ul>

            <h3>5. International Data Transfers</h3>
            <p>
              Your information may be transferred and stored on servers located
              in different jurisdictions. We ensure appropriate safeguards are
              in place in compliance with applicable data protection laws.
            </p>

            <h3>6. Your Rights</h3>
            <p>
              Depending on your jurisdiction, you may have the right to access,
              update, delete, or restrict the processing of your personal
              information. To exercise your rights, contact us at:
            </p>
            <p>
              📧 Email: support@olymptrade.com <br />
              🌍 Website: https://www.olymp-trade.app
            </p>

            <h3>7. Retention of Data</h3>
            <p>
              We retain your personal and financial information only for as long
              as necessary to fulfill the purposes outlined in this policy and
              comply with legal and regulatory requirements.
            </p>

            <h3>8. Children’s Privacy</h3>
            <p>
              Our services are not directed to individuals under the age of 18.
              We do not knowingly collect data from minors. If we discover that
              we have collected personal information from a minor, we will take
              steps to delete it immediately.
            </p>

            <h3>9. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page with a revised “Last Modified” date.
            </p>

            <h3>10. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <p>
              📧 Email: support@olymptrade.com <br />
              🏢 Address: [Insert company registered office address]
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
