export default function Footer() {
  return (
    <>
      <style jsx global>{`
        .cta-section {
          padding: 120px 48px;
          background: var(--bg-cream);
          text-align: center;
        }
        .cta-section h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 700;
          margin-bottom: 16px;
          line-height: 1.3;
        }
        .cta-section p {
          font-size: 15px;
          color: var(--text-body);
          margin-bottom: 40px;
          line-height: 1.8;
          max-width: 480px;
          margin-inline: auto;
        }

        footer {
          padding: 48px;
          background: var(--bg-cream);
          border-top: 1px solid var(--border-soft);
        }
        .footer-inner {
          max-width: 900px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-brand {
          font-family: 'Noto Serif JP', serif;
          font-size: 18px;
          font-weight: 700;
        }
        .footer-links {
          display: flex;
          gap: 28px;
        }
        .footer-links a {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 12px;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: var(--text-body);
        }
        .footer-copy {
          font-size: 11px;
          color: var(--text-light);
          width: 100%;
          margin-top: 16px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .cta-section {
            padding-left: 24px;
            padding-right: 24px;
          }
          footer {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (max-width: 600px) {
          .cta-section {
            padding: 80px 20px;
          }
          footer {
            padding: 48px 20px;
          }
        }
      `}</style>

      {/* CTA Section */}
      <section className='cta-section'>
        <h2 className='reveal'>
          今日は一晩、
          <br />
          肝臓を休めてみませんか？
        </h2>
        <p className='reveal'>
          あなたの「休肝日」を、最高の達成感に変えるパートナー。無料で始められます。
        </p>
        <button className='btn-primary reveal'>無料でダウンロード</button>
      </section>

      {/* Footer */}
      <footer>
        <div className='footer-inner'>
          <div className='footer-brand'>肝休め</div>
          <div className='footer-links'>
            <a href='#'>プライバシーポリシー</a>
            <a href='#'>利用規約</a>
            <a href='#'>お問い合わせ</a>
          </div>
          <div className='footer-copy'>© 2025 肝休め. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}
