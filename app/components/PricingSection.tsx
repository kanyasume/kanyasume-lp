export default function PricingSection() {
  const plans = [
    {
      name: 'Free',
      desc: 'まずはここから。十分使えます。',
      price: '¥0',
      period: 'ずっと無料',
      features: [
        '肝臓リカバリータイマー',
        '居酒屋クイック入力',
        '今月のヒートマップ',
        'ウィジェット対応',
      ],
      featured: false,
    },
    {
      name: 'Premium',
      badge: 'おすすめ',
      desc: '自分の適量を科学的に発見する。',
      price: '¥480',
      priceUnit: ' / 月',
      period: '年払い ¥2,900（約50%OFF）',
      features: [
        '全期間ヒートマップ',
        '飲酒×体調 相関分析',
        'クラウドバックアップ',
        '健康診断レポート出力',
        '広告非表示',
        '限定ウィジェット',
      ],
      featured: true,
    },
    {
      name: 'Lifetime',
      desc: '一度の支払いで永久にプレミアム。',
      price: '¥5,800',
      period: '買い切り',
      features: [
        'プレミアム全機能',
        '将来のアップデートも含む',
        '月額の心配なし',
      ],
      featured: false,
    },
  ];

  return (
    <>
      <style jsx global>{`
        .pricing-section {
          padding: 100px 48px;
          background: var(--bg-warm);
        }
        .pricing-inner {
          max-width: 1000px;
          margin: 0 auto;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .pricing-header h2 {
          font-family: 'Noto Serif JP', serif;
          font-size: clamp(26px, 3.5vw, 36px);
          font-weight: 700;
          margin-bottom: 12px;
        }
        .pricing-header p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .price-card {
          background: var(--bg-white);
          border: 1px solid var(--border-soft);
          border-radius: 20px;
          padding: 36px 28px;
          display: flex;
          flex-direction: column;
          transition: all 0.3s;
        }
        .price-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }
        .price-card.featured {
          background: var(--text-dark);
          color: #fff;
          border-color: transparent;
          transform: scale(1.02);
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.15);
        }
        .price-card.featured .price-name,
        .price-card.featured .price-amount {
          color: #fff;
        }
        .price-card.featured .price-desc,
        .price-card.featured .price-period {
          color: rgba(255, 255, 255, 0.45);
        }
        .price-card.featured .price-amount span {
          color: rgba(255, 255, 255, 0.4);
        }
        .price-card.featured .price-feat {
          color: rgba(255, 255, 255, 0.7);
        }
        .price-card.featured .check-icon {
          background: rgba(122, 140, 110, 0.25);
          color: #a3c490;
        }
        .price-card.featured .price-btn.outline {
          border-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        .price-card.featured .price-btn.outline:hover {
          background: rgba(255, 255, 255, 0.08);
        }

        .price-badge {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: var(--accent-terracotta);
          color: #fff;
          margin-bottom: 16px;
          width: fit-content;
        }
        .price-name {
          font-family: 'Noto Serif JP', serif;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .price-desc {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 20px;
          line-height: 1.6;
        }
        .price-amount {
          font-family: 'Noto Serif JP', serif;
          font-size: 38px;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 4px;
          line-height: 1;
        }
        .price-amount span {
          font-size: 14px;
          font-weight: 400;
          color: var(--text-muted);
        }
        .price-period {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 28px;
        }
        .price-features {
          display: flex;
          flex-direction: column;
          gap: 11px;
          margin-bottom: 28px;
          flex: 1;
        }
        .price-feat {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: var(--text-body);
        }
        .check-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-sage-light);
          color: var(--accent-sage);
          font-size: 11px;
          font-weight: 700;
        }
        .price-btn {
          padding: 14px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          text-align: center;
          transition: all 0.25s;
          width: 100%;
        }
        .price-btn.outline {
          background: transparent;
          border: 1.5px solid var(--border-warm);
          color: var(--text-dark);
        }
        .price-btn.outline:hover {
          background: rgba(0, 0, 0, 0.03);
        }
        .price-btn.filled {
          background: var(--accent-terracotta);
          color: #fff;
          border: none;
        }
        .price-btn.filled:hover {
          background: var(--accent-terracotta-hover);
          box-shadow: 0 4px 16px rgba(196, 120, 94, 0.3);
        }

        @media (max-width: 900px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 380px;
            margin-inline: auto;
          }
          .price-card.featured {
            transform: scale(1);
          }
        }

        @media (max-width: 600px) {
          .pricing-section {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>

      <section className='pricing-section' id='pricing'>
        <div className='pricing-inner'>
          <div className='pricing-header reveal'>
            <h2>
              無料で始めて、
              <br />
              もっと深く知る。
            </h2>
            <p>
              基本機能は無料。より深い分析やバックアップが必要になったらプレミアムへ。
            </p>
          </div>

          <div className='pricing-grid'>
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`price-card ${plan.featured ? 'featured' : ''} reveal`}
              >
                {plan.badge && <div className='price-badge'>{plan.badge}</div>}
                <div className='price-name'>{plan.name}</div>
                <div className='price-desc'>{plan.desc}</div>
                <div className='price-amount'>
                  {plan.price}
                  {plan.priceUnit && <span>{plan.priceUnit}</span>}
                </div>
                <div className='price-period'>{plan.period}</div>
                <div className='price-features'>
                  {plan.features.map((feat, j) => (
                    <div key={j} className='price-feat'>
                      <span className='check-icon'>✓</span>
                      {feat}
                    </div>
                  ))}
                </div>
                <button className='price-btn outline'>
                  {plan.featured ? 'プレミアムを始める' : 'このプランを選ぶ'}
                </button>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '12px',
              color: 'var(--text-muted)',
              marginTop: '28px',
            }}
          >
            ※ プレミアムプランはアプリ内からご購入いただけます
          </p>
        </div>
      </section>
    </>
  );
}
