export default function HeroSection() {
  return (
    <>
      <style jsx global>{`
        .hero {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            160deg,
            #e8d5c0 0%,
            #f0dcc8 30%,
            #d4bca0 60%,
            #c8a882 100%
          );
        }

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          content: '';
          position: absolute;
          inset: 0;
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(250, 247, 242, 0.1) 0%,
            rgba(250, 247, 242, 0) 30%,
            rgba(250, 247, 242, 0.5) 70%,
            var(--bg-cream) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          padding: 160px 48px 80px;
          max-width: 640px;
        }

        .hero-h1 {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          line-height: 1.25;
          letter-spacing: -0.02em;
          margin-bottom: 24px;
        }

        .hero-sub {
          font-size: 15px;
          line-height: 1.9;
          color: var(--text-body);
          margin-bottom: 36px;
          max-width: 440px;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 15px 32px;
          border-radius: 100px;
          background: var(--accent-terracotta);
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s;
          font-family: inherit;
        }

        .btn-primary:hover {
          background: var(--accent-terracotta-hover);
          transform: translateY(-1px);
          box-shadow: 0 8px 24px rgba(196, 120, 94, 0.25);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          padding: 14px 28px;
          border-radius: 100px;
          border: 1.5px solid var(--border-warm);
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(8px);
          color: var(--text-dark);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.25s;
          font-family: inherit;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.8);
          border-color: var(--accent-brown);
        }

        .hero-tags {
          position: absolute;
          right: 6%;
          bottom: 28%;
          z-index: 10;
          display: flex;
          flex-direction: column;
          gap: 10px;
          align-items: flex-end;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.06);
          font-size: 12px;
          font-weight: 500;
          color: var(--text-body);
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
        }

        .tag-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .tag-dot.green {
          background: var(--accent-sage);
        }

        .tag-dot.terracotta {
          background: var(--accent-terracotta);
        }

        .tag-dot.brown {
          background: var(--accent-brown);
        }

        @media (max-width: 900px) {
          .hero-content {
            padding: 140px 24px 60px;
          }
          .hero-tags {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .hero-content {
            padding: 120px 20px 48px;
          }
        }
      `}</style>

      <section className='hero'>
        <div className='hero-bg'></div>
        <img
          src='/hero-image.jpg'
          alt='Hero background'
          className='hero-image'
        />
        <div className='hero-overlay'></div>
        <div className='hero-content'>
          <h1 className='hero-h1'>
            お酒を飲まない時間を、
            <br />
            資産に変える。
          </h1>
          <p className='hero-sub'>
            肝臓のリカバリーをリアルタイムで可視化。
            <br />
            酔っていても1タップで記録できる、
            <br />
            無理せず休める減酒ログアプリ。
          </p>
          <div className='hero-actions'>
            <button className='btn-primary'>無料でダウンロード</button>
            <button className='btn-outline'>月額 ¥480 から</button>
          </div>
        </div>
        <div className='hero-tags'>
          <div className='hero-tag'>
            <span className='tag-dot green'></span>リカバリーを可視化
          </div>
          <div className='hero-tag'>
            <span className='tag-dot terracotta'></span>1タップで記録
          </div>
          <div className='hero-tag'>
            <span className='tag-dot brown'></span>休肝日を資産化
          </div>
        </div>
      </section>
    </>
  );
}
