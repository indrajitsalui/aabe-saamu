import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Privacy Policy</h1>
      <p>
        We, <strong>AMESABU</strong>, value the trust placed in us by you and
        therefore, we follow the highest standards of privacy guidelines to
        protect the information shared by you with us.
      </p>

      <p>
        This Privacy Policy ("Privacy Policy") governs the use of Personal
        Information shared with or collected by AMESABU from the users or
        subscribers of our services.
      </p>

      <p>
        By viewing or browsing our content or using our services on AMESABU, you
        consent to the collection, storage, processing, and transfer of your
        Personal Information or Sensitive Personal Data in accordance with this
        Privacy Policy. If you do not agree, please do not use AMESABU. Continued
        use implies agreement to the terms herein.
      </p>

      <p>
        This Privacy Policy should be read along with our
        {' '}
        <a href="/terms-and-conditions" target="_blank" rel="noopener noreferrer">
          Terms of Use
        </a>.
      </p>

      <h2>1. Collection and Use of Personal Information</h2>
      <p>We collect:</p>
      <ul>
        <li>
          Personal data such as name, mobile number, email, address, IP address,
          zip code, age, gender, and occupation.
        </li>
        <li>Usage and log data, including cookies and browser/device info.</li>
        <li>Data via third-party logins (e.g., Google, Facebook).</li>
        <li>
          Payment information through our third-party gateway providers (we do not
          store any financial details directly).
        </li>
      </ul>

      <h2>2. User Consent</h2>
      <p>
        By using AMESABU, you provide explicit consent for us to collect, store,
        and process your data for lawful purposes associated with our services.
      </p>

      <h2>3. Sharing with Third Parties</h2>
      <p>We may share your information:</p>
      <ul>
        <li>
          With group companies, affiliates, and partners under strict
          confidentiality.
        </li>
        <li>To comply with legal obligations or requests by authorities.</li>
        <li>For marketing and service improvements.</li>
      </ul>

      <h2>4. Security</h2>
      <p>
        We employ reasonable administrative and technical safeguards to protect
        your data. However, no method of transmission is 100% secure, and we
        disclaim liability for any breach beyond our control.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You may request deletion of your personal data by contacting us at{' '}
        <a href="mailto:amesabuofc@gmail.com">amesabuofc@gmail.com</a>.
      </p>
      <p>
        To unsubscribe from promotional emails, please write to us with the
        subject <strong>"Unsubscribe"</strong>.
      </p>

      <h2>6. Policy Updates</h2>
      <p>
        We may update this Privacy Policy from time to time without prior notice.
        Continued use of AMESABU constitutes your agreement to any such updates.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        If you have any questions or grievances, please contact us at{' '}
        <a href="mailto:amesabuofc@gmail.com">amesabuofc@gmail.com</a>.
      </p>
    </div>
  
  );
};

export default PrivacyPolicy;
