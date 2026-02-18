'use client';

import { forwardRef } from 'react';

const Navigation = forwardRef<HTMLElement>((props, ref) => {
  return (
    <>
      <style jsx global>{`
        .nav-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 18px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(250, 247, 242, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-soft);
          transition: all 0.4s;
        }

        .nav-bar.dark-mode {
          background: rgba(5, 10, 24, 0.85);
          border-bottom-color: var(--border-dark-subtle);
        }

        .nav-logo {
          font-family: 'Noto Serif JP', serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--text-dark);
          transition: color 0.4s;
          letter-spacing: -0.02em;
        }

        .nav-bar.dark-mode .nav-logo {
          color: var(--text-glow);
        }

        .nav-links {
          display: flex;
          gap: 36px;
          align-items: center;
        }

        .nav-links a {
          color: var(--text-body);
          text-decoration: none;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: var(--text-dark);
        }

        .nav-bar.dark-mode .nav-links a {
          color: var(--text-glow-secondary);
        }

        .nav-bar.dark-mode .nav-links a:hover {
          color: var(--text-glow);
        }

        .nav-cta {
          padding: 10px 28px;
          border-radius: 100px;
          border: 1.5px solid var(--text-dark);
          background: none;
          color: var(--text-dark);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          font-family: inherit;
          transition: all 0.3s;
        }

        .nav-cta:hover {
          background: var(--text-dark);
          color: var(--bg-cream);
        }

        .nav-bar.dark-mode .nav-cta {
          border-color: rgba(200, 220, 255, 0.2);
          color: var(--text-glow);
        }

        .nav-bar.dark-mode .nav-cta:hover {
          background: var(--text-glow);
          color: var(--bg-deep);
        }

        @media (max-width: 900px) {
          .nav-bar {
            padding: 14px 24px;
          }
          .nav-links a:not(:last-child) {
            display: none;
          }
        }
      `}</style>

      <nav ref={ref} className='nav-bar'>
        <div className='nav-logo'>肝休め</div>
        <div className='nav-links'>
          <a href='#features'>機能</a>
          <a href='#pricing'>料金</a>
          <a href='#about'>私たちについて</a>
          <button className='nav-cta'>無料ダウンロード</button>
        </div>
      </nav>
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
