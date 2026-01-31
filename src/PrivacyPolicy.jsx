import React from 'react';
import { Book, Shield, Brain, Lock, Eye, Trash2 } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="container">
      <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <Book size={48} className="primary-icon" style={{ color: '#bb86fc' }} />
          <h1 className="gradient-text">Resona</h1>
        </div>
        <p style={{ fontSize: '1.25rem' }}>Privacy Policy for Resona AI EPUB Reader</p>
        <div style={{ padding: '0.5rem 1rem', borderRadius: '50px', background: 'rgba(255,255,255,0.05)', display: 'inline-block', fontSize: '0.75rem', fontWeight: 'bold', color: '#03dac6', border: '1px solid rgba(3,218,198,0.2)' }}>
          PEGI 3 - SUITABLE FOR ALL AGES
        </div>
      </header>

      <section className="glass-card">
        <p>
          At <strong>Resona</strong>, we believe that your reading experience should be private, safe, and empowering. This Privacy Policy explains how we handle your information when you use our AI EPUB Reader.
        </p>

        <h2><Shield size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> 1. Data Collection</h2>
        <p>
          Resona is designed to be privacy-first. We do not collect personal data like your name, email address, or phone number.
        </p>
        <ul>
          <li><strong>Local Storage:</strong> Your books, reading progress, and preferences are stored locally on your device.</li>
          <li><strong>No Tracking:</strong> We do not use third-party analytics or tracking cookies.</li>
        </ul>

        <h2><Brain size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> 2. AI Processing</h2>
        <p>
          Resona uses AI to enhance your reading experience (e.g., summaries, translations).
        </p>
        <ul>
          <li><strong>On-Device First:</strong> Whenever possible, AI processing happens directly on your device.</li>
          <li><strong>Secure Requests:</strong> If a cloud-based AI model is required, we send only the necessary text snippets via encrypted channels. We do not store these snippets on our servers.</li>
        </ul>

        <h2><Lock size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> 3. Children's Privacy (PEGI 3)</h2>
        <p>
          Resona is rated PEGI 3 and is safe for children. We do not collect any information from children or any other users. The app does not contain social features or advertisements.
        </p>

        <h2><Eye size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> 4. Your Rights</h2>
        <p>
          Since we don't collect your data, you are always in full control:
        </p>
        <ul>
          <li><strong>Access:</strong> All your data is on your device.</li>
          <li><strong>Portability:</strong> You can export your library at any time.</li>
        </ul>

        <h2><Trash2 size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> 5. Data Deletion</h2>
        <p>
          Deleting the app or clearing the app data will permanently remove all your local files and settings. We have no way to recover this data for you.
        </p>

        <footer style={{ marginTop: '2rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
          <p>© 2026 Resona AI. Built for Readers.</p>
          <p style={{ fontSize: '0.75rem' }}>Last updated: February 1, 2026</p>
        </footer>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
