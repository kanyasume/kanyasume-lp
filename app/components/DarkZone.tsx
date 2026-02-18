'use client';

import { forwardRef } from 'react';

const DarkZone = forwardRef<HTMLDivElement>((props, ref) => {
  const features = [
    {
      icon: '⏱️',
      title: '肝臓リカバリータイマー',
      desc: '純アルコール量と体重から分解時間をリアルタイム計算。回復率がパーセンテージで上昇していく様子を、美しいオーブアニメーションで表示。',
      colorClass: 'fd-purple',
      iconClass: 'purple',
    },
    {
      icon: '🍺',
      title: '居酒屋クイック入力',
      desc: 'お酒アイコンをタップして杯数をカウントするだけ。酔った状態でも正確に記録できる、シンプルなUI。',
      colorClass: 'fd-cyan',
      iconClass: 'cyan',
    },
    {
      icon: '📊',
      title: 'GitHub風ヒートマップ',
      desc: '365日の飲酒パターンをドットマップで可視化。休肝日が緑に染まる快感が、習慣改善のモチベーションに。',
      colorClass: 'fd-green',
      iconClass: 'green',
    },
    {
      icon: '📱',
      title: 'ウィジェット常時表示',
      desc: 'ホーム画面のウィジェットで回復状況をいつでも確認。アプリを開かなくても自分の状態が一目でわかります。',
      colorClass: 'fd-purple',
      iconClass: 'magenta',
    },
    {
      icon: '🔬',
      title: '体調×飲酒 相関分析',
      desc: '飲酒量と体調の関係をグラフで分析。「適量」を科学的に発見。プレミアム機能。',
      colorClass: 'fd-cyan',
      iconClass: 'orange',
    },
    {
      icon: '🏥',
      title: '健康診断レポート出力',
      desc: 'γ-GTPの変化を医師に見せるためのPDFレポート生成。データに基づく健康管理を実現。',
      colorClass: 'fd-green',
      iconClass: 'blue',
    },
  ];

  return (
    <>
      <style jsx global>{`
        .dark-zone {
          background: var(--bg-deep);
          color: var(--text-glow);
          position: relative;
          overflow: hidden;
        }
        .dark-zone-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(0, 212, 255, 0.015) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(0, 212, 255, 0.015) 1px,
              transparent 1px
            );
          background-size: 60px 60px;
        }
        .dark-zone-glow-1 {
          position: absolute;
          width: 700px;
          height: 700px;
          top: -200px;
          right: -200px;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.06) 0%,
            transparent 60%
          );
          pointer-events: none;
        }
        .dark-zone-glow-2 {
          position: absolute;
          width: 500px;
          height: 500px;
          bottom: -100px;
          left: -100px;
          background: radial-gradient(
            circle,
            rgba(0, 212, 255, 0.04) 0%,
            transparent 60%
          );
          pointer-events: none;
        }

        .features-dark {
          position: relative;
          z-index: 2;
          padding: 100px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }
        .features-dark-header {
          text-align: center;
          margin-bottom: 64px;
        }
        .section-tag-dark {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--cyan-soft);
          margin-bottom: 14px;
        }
        .features-dark-header h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 700;
          line-height: 1.3;
          color: var(--text-glow);
        }
        .features-dark-header p {
          font-size: 14px;
          color: var(--text-glow-secondary);
          margin-top: 14px;
          max-width: 480px;
          margin-inline: auto;
          line-height: 1.7;
        }

        .features-dark-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .fd-card {
          background: var(--bg-card-dark);
          border: 1px solid var(--border-dark-subtle);
          border-radius: 20px;
          padding: 32px 26px;
          backdrop-filter: blur(16px);
          transition: all 0.35s;
          cursor: default;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 240px;
        }
        .fd-card::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.35s;
        }
        .fd-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-4px);
        }
        .fd-card:hover::before {
          opacity: 1;
        }
        .fd-card.fd-purple::before {
          background: radial-gradient(
            circle at 50% 0%,
            rgba(139, 92, 246, 0.08) 0%,
            transparent 60%
          );
        }
        .fd-card.fd-cyan::before {
          background: radial-gradient(
            circle at 50% 0%,
            rgba(0, 212, 255, 0.06) 0%,
            transparent 60%
          );
        }
        .fd-card.fd-green::before {
          background: radial-gradient(
            circle at 50% 0%,
            rgba(34, 211, 167, 0.06) 0%,
            transparent 60%
          );
        }

        .fd-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          font-size: 22px;
          position: relative;
          z-index: 1;
        }
        .fd-icon.purple {
          background: var(--purple-dim);
        }
        .fd-icon.cyan {
          background: var(--cyan-dim);
        }
        .fd-icon.green {
          background: var(--green-dim);
        }
        .fd-icon.magenta {
          background: rgba(192, 38, 211, 0.1);
        }
        .fd-icon.orange {
          background: rgba(245, 158, 11, 0.1);
        }
        .fd-icon.blue {
          background: rgba(59, 130, 246, 0.1);
        }

        .fd-title {
          font-family: 'Noto Serif JP', serif;
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
          position: relative;
          z-index: 1;
          color: var(--text-glow);
        }
        .fd-desc {
          font-size: 13px;
          color: var(--text-glow-secondary);
          line-height: 1.8;
          position: relative;
          z-index: 1;
          margin-top: auto;
        }

        .app-preview-dark {
          position: relative;
          z-index: 2;
          padding: 80px 48px 120px;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .app-preview-text h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.3;
          color: var(--text-glow);
        }
        .app-preview-text p {
          font-size: 14px;
          color: var(--text-glow-secondary);
          line-height: 2;
          margin-bottom: 16px;
        }
        .app-features-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 28px;
        }
        .app-feat-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text-glow-secondary);
        }
        .app-feat-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--purple-bright);
          flex-shrink: 0;
        }

        .app-phone-area {
          display: flex;
          justify-content: center;
        }

        .phone-mockup-dark {
          width: 280px;
          height: 580px;
          background: var(--bg-mid);
          border-radius: 40px;
          border: 2px solid rgba(200, 220, 255, 0.08);
          position: relative;
          overflow: hidden;
          box-shadow:
            0 40px 100px rgba(0, 0, 0, 0.5),
            0 0 80px rgba(139, 92, 246, 0.1),
            0 0 160px rgba(139, 92, 246, 0.04);
          transform: perspective(1200px) rotateY(-6deg) rotateX(2deg);
          transition: transform 0.5s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .phone-mockup-dark:hover {
          transform: perspective(1200px) rotateY(-2deg) rotateX(1deg);
        }

        .phone-placeholder {
          text-align: center;
          color: var(--text-glow-tertiary);
          font-size: 12px;
          padding: 0 32px;
        }

        @media (max-width: 900px) {
          .features-dark {
            padding-left: 24px;
            padding-right: 24px;
          }
          .features-dark-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
            margin-inline: auto;
          }
          .app-preview-dark {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
            padding-left: 24px;
            padding-right: 24px;
          }
          .app-features-list {
            align-items: center;
          }
          .phone-mockup-dark {
            transform: none;
          }
          .phone-mockup-dark:hover {
            transform: none;
          }
        }

        @media (max-width: 600px) {
          .features-dark,
          .app-preview-dark {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>

      <div ref={ref} className='dark-zone' id='features'>
        <div className='dark-zone-grid-bg'></div>
        <div className='dark-zone-glow-1'></div>
        <div className='dark-zone-glow-2'></div>

        {/* Features */}
        <div className='features-dark'>
          <div className='features-dark-header reveal'>
            <div className='section-tag-dark'>Features</div>
            <h2>肝休めが選ばれる理由</h2>
            <p>アプリの中に広がる、あなた専用のリカバリー空間。</p>
          </div>

          <div className='features-dark-grid'>
            {features.map((feat, i) => (
              <div key={i} className={`fd-card ${feat.colorClass} reveal`}>
                <div className={`fd-icon ${feat.iconClass}`}>{feat.icon}</div>
                <h3 className='fd-title'>{feat.title}</h3>
                <p className='fd-desc'>{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App Preview Section */}
        <div className='app-preview-dark'>
          <div className='app-preview-text reveal'>
            <h2>
              回復を眺めて、
              <br />
              習慣が変わる。
            </h2>
            <p>
              飲んだ翌朝、肝休めを開くと肝臓の回復率がリアルタイムで上昇。フルリカバリーに近づく度に「次も休肝しよう」と自然に思える体験を設計しました。
            </p>
            <div className='app-features-list'>
              <div className='app-feat-item'>
                <div className='app-feat-dot' />
                リアルタイム回復率表示
              </div>
              <div className='app-feat-item'>
                <div className='app-feat-dot' />
                完了予定時刻の自動計算
              </div>
              <div className='app-feat-item'>
                <div className='app-feat-dot' />
                摂取アルコール量の記録
              </div>
              <div className='app-feat-item'>
                <div className='app-feat-dot' />
                週間ログの一覧表示
              </div>
            </div>
          </div>
          <div className='app-phone-area reveal'>
            <div className='phone-mockup-dark'>
              <div className='phone-placeholder'>
                📱 アプリモックアップ
                <br />
                リカバリーオーブ画面
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

DarkZone.displayName = 'DarkZone';

export default DarkZone;
