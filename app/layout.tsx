import type { Metadata } from 'next';
import {
  Noto_Sans_JP,
  Noto_Serif_JP,
  Outfit,
  Playfair_Display,
} from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-noto-sans-jp',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const notoSerifJP = Noto_Serif_JP({
  variable: '--font-noto-serif-jp',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: '肝休め – 休肝日記録と肝臓回復タイマー',
  description:
    'お酒を飲まない時間を、資産に変える。肝臓のリカバリーをリアルタイムで可視化。酔っていても1タップで記録できる、無理せず休める減酒ログアプリ。',
  keywords: [
    '休肝日',
    '減酒',
    'お酒記録',
    '肝臓',
    'アルコール管理',
    '飲酒記録',
    '健康管理',
  ],
  authors: [{ name: '肝休め' }],
  creator: '肝休め',
  publisher: '肝休め',
  metadataBase: new URL('https://kanyasume.bokuno.dev'),
  openGraph: {
    title: '肝休め – 休肝日記録と肝臓回復タイマー',
    description:
      'お酒を飲まない時間を、資産に変える。肝臓のリカバリーをリアルタイムで可視化。酔っていても1タップで記録できる、無理せず休める減酒ログアプリ。',
    url: 'https://kanyasume.bokuno.dev',
    siteName: '肝休め',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: '肝休め - 休肝日記録アプリ',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '肝休め – 休肝日記録と肝臓回復タイマー',
    description:
      'お酒を飲まない時間を、資産に変える。肝臓のリカバリーをリアルタイムで可視化。酔っていても1タップで記録できる、無理せず休める減酒ログアプリ。',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja' className='scroll-smooth'>
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${outfit.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
