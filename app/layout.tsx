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
	description: 'Hi, welcome to my portfolio! I am a Software Engineer with strong academic credentials and internship experience in developing scalable, production-grade applications. \nI am proficient in Python, Java, and C# through projects such as chatbot development and console applications. \nI am experienced in writing clean, well-documented code and troubleshooting complex systems while collaborating with cross-functional teams to drive innovative solutions.',
	keywords: [
		'Software Engineer',
		'Clean Code',
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
		'Zoey Guo',
	],
	authors: [{ name: 'Zoey Guo' }],
	creator: 'Zoey Guo',
	openGraph: {
		title: 'Zoey Guo - Portfolio',
		description: 'Software Engineer with strong academic credentials and internship experience in developing scalable, production-grade applications. \nDemonstrated proficiency in Python, Java, and C# through projects such as chatbot development and console applications. \nAdept at writing clean, well-documented code and troubleshooting complex systems while collaborating with cross-functional teams to drive innovative solutions.',
		siteName: 'Zoey Guo - Portfolio',
		locale: 'en_US',
		type: 'website',
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
