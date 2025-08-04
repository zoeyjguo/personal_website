import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Zoey Guo',
	description:
		'Welcome to my portfolio! I am a passionate software developer with a focus on clean, minimal, and effective solutions. I believe in the power of simplicity and thoughtful design to create impactful digital experiences.',
	keywords: [
		'Software Developer',
		'Clean Code',
		'Minimal Design',
		'Modern Development',
		'Web Development',
		'User Experience',
		'Design Systems',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Performance',
		'Accessibility',
		'Minimalist Portfolio',
		'Zoey Guo',
	],
	authors: [{ name: 'Zoey Guo' }],
	creator: 'Zoey Guo',
	openGraph: {
		title: 'Zoey Guo - Software Developer Portfolio',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		url: 'https://your-domain.com',
		siteName: 'Zoey Guo - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Zoey Guo - Modern Minimal Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Zoey Guo - Software Developer',
		description: 'Passionate software developer creating clean, minimal, and effective digital solutions. Explore my work and development philosophy.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
