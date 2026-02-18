'use client';

import { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import DarkZone from './components/DarkZone';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';

export default function Home() {
  const navRef = useRef<HTMLElement>(null);
  const darkZoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll reveal animation
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((el) => observer.observe(el));

    // Nav dark mode toggle
    const nav = navRef.current;
    const darkZone = darkZoneRef.current;
    if (nav && darkZone) {
      const navObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              nav.classList.add('dark-mode');
            } else {
              nav.classList.remove('dark-mode');
            }
          });
        },
        { threshold: 0, rootMargin: '-60px 0px 0px 0px' },
      );
      navObserver.observe(darkZone);
      return () => navObserver.disconnect();
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* TRUST BAR */
        .trust-bar {
          padding: 80px 48px;
          background: var(--bg-white);
        }
        .trust-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
        }
        .trust-title {
          font-family: 'Noto Serif JP', serif;
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .trust-subtitle {
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .trust-desc {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.8;
        }

        /* STORY SECTION */
        .story-section {
          padding: 100px 48px;
          background: var(--bg-cream);
        }
        .story-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 200px 1fr 240px;
          gap: 48px;
          align-items: center;
        }
        .story-photo-circle {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ddd0c1, #c8b8a4);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 4px solid var(--bg-white);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          overflow: hidden;
          position: relative;
        }
        .story-photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .story-photo-rect {
          aspect-ratio: 4/3;
          border-radius: 12px;
          background: linear-gradient(135deg, #d6c5b0, #c4b39e);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }
        .story-photo-rect img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .story-title {
          font-family: 'Noto Serif JP', serif;
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
        }
        .story-body {
          font-size: 14px;
          color: var(--text-body);
          line-height: 2;
          margin-bottom: 20px;
        }
        .story-signature {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 22px;
          color: var(--text-muted);
        }

        /* STATS BAR */
        .stats-bar {
          padding: 60px 48px;
          background: var(--bg-white);
          border-top: 1px solid var(--border-soft);
          border-bottom: 1px solid var(--border-soft);
        }
        .stats-inner {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
        }
        .stat-accent-line {
          width: 32px;
          height: 3px;
          border-radius: 2px;
          background: var(--accent-terracotta);
          margin-bottom: 16px;
        }
        .stat-number {
          font-family: 'Noto Serif JP', serif;
          font-size: 36px;
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label {
          font-size: 12px;
          color: var(--text-muted);
        }

        /* TRANSITION TO DARK */
        .transition-to-dark {
          height: 160px;
          background: linear-gradient(to bottom, var(--bg-cream), #0f1520);
          position: relative;
        }
        .transition-to-dark::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border-dark-subtle);
        }

        /* TRANSITION TO WARM */
        .transition-to-warm {
          height: 160px;
          background: linear-gradient(
            to bottom,
            var(--bg-deep),
            var(--bg-warm)
          );
          position: relative;
        }

        @media (max-width: 900px) {
          .trust-inner {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .story-inner {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .story-photo-circle {
            width: 160px;
            height: 160px;
            margin: 0 auto;
          }
          .story-photo-rect {
            display: none;
          }
          .stats-inner {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .trust-bar,
          .story-section,
          .stats-bar {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>

      <Navigation ref={navRef} />
      <HeroSection />

      {/* TRUST BAR */}
      <section className='trust-bar'>
        <div className='trust-inner'>
          {[
            {
              icon: '⚗️',
              title: '肝臓リカバリータイマー',
              subtitle: '「あと何時間で酔いが覚める？」を科学的に計算',
              desc: '体重と純アルコール量から、あなた専用のアルコール分解時間をリアルタイムで算出。感覚ではなく、秒単位のカウントダウンで状態を把握できます。',
            },
            {
              icon: '🍺',
              title: '居酒屋クイック入力',
              subtitle: '酔っていても大丈夫。タップだけで自動算出',
              desc: '定番メニューのアイコンをタップするだけで、純アルコール量を自動計算。面倒な入力は一切不要で、誰でも無理なく続けられます。',
            },
            {
              icon: '💰',
              title: '休肝日の資産化',
              subtitle: '浮いたお金・カロリー・時間をすべて可視化',
              desc: '休肝日で浮いたお金、カットしたカロリー、休めた時間を累計で表示。GitHub風ヒートマップで積み上げた休肝日を一目で実感できます。',
            },
          ].map((item, i) => (
            <div key={i} className='trust-item reveal'>
              <div className='trust-title'>
                {item.title} <span>{item.icon}</span>
              </div>
              <div className='trust-subtitle'>{item.subtitle}</div>
              <div className='trust-desc'>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className='story-section' id='about'>
        <div className='story-inner reveal'>
          <div className='story-photo-circle'>
            <img src='/breakfast-image.jpg' alt='健康的な朝食を楽しむ人' />
          </div>
          <div className='story-content'>
            <h2 className='story-title'>
              「つい飲みすぎてしまう」
              <br />
              あなたへ。
            </h2>
            <p className='story-body'>
              「健康診断の数値が気になる」「記録アプリは続かない」——そんな声から生まれたのが『肝休め（かんやすめ）』です。ただ記録するだけのアプリではありません。あなたの身体がアルコールから解放され、肝臓がフルリカバリーするまでの時間をリアルタイムでカウントダウン。毎日の小さな選択が、あなたの体を確実に変えていきます。
            </p>
            <div className='story-signature'>– 肝休めチーム</div>
          </div>
          <div className='story-photo-rect'>
            <img
              src='/toast-image.jpg'
              alt='友人とノンアル飲料で乾杯するシーン'
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className='stats-bar'>
        <div className='stats-inner'>
          {[
            { number: '15h', label: 'ビール3杯（中ジョッキ）の分解時間' },
            { number: '48h', label: '飲酒後、肝臓の回復に必要な時間' },
            { number: '624kcal', label: 'ビール3杯分のカロリー ≒ ラーメン1杯' },
            { number: '週2日', label: '厚労省が推奨する休肝日の目安' },
          ].map((stat, i) => (
            <div key={i} className='stat-item reveal'>
              <div className='stat-accent-line'></div>
              <div className='stat-number'>{stat.number}</div>
              <div className='stat-label'>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSITION TO DARK */}
      <div className='transition-to-dark' />

      {/* DARK ZONE */}
      <DarkZone ref={darkZoneRef} />

      {/* TRANSITION TO WARM */}
      <div className='transition-to-warm' />

      {/* PRICING */}
      <PricingSection />

      {/* CTA & FOOTER */}
      <Footer />
    </>
  );
}
