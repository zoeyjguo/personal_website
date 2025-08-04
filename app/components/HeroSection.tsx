'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="h-screen flex items-center justify-center relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.7),rgba(0,0,0,1))]" />
			</div>
			<div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-20 px-6">
				<div className="relative z-10 text-left">
					<motion.h1
						initial={{ y: 50 }}
						animate={{ y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-4xl md:text-7xl font-bold mb-6 pb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
					>
						Hi, I&apos;m Zoey
					</motion.h1>
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-gray-300 mb-8 px-4 md:px-0 max-w-3xl mx-auto"
					>
						I’m a fourth-year student at Northeastern University majoring in B.S. Computer Science with a concentration in artificial intelligence (AI). In my freetime, I enjoy playing videogames, listening to music, and creating art and designs.<br /> <br />
						I am extremely passionate about promoting mental health awareness and diversity. I enjoy engaging in meaningful conversations about topics that are often considered uncomfortable, as honest and transparent discussions are crucial steps toward understanding and healing. <br /> <br />
						I am most interested in careers focused on data analysis, software engineering, and machine learning. I hope to add to this list of interests based on future experiences I encounter during my academic and career path. <br />
					</motion.p>
				</div>

				<div className="relative z-40 text-right">
					<motion.p
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-lg md:text-xl text-gray-300 mb-8 px-4 md:px-0 max-w-3xl mx-auto"
					>
					<Image
						src="/headshot.jpg"
						alt="Zoey Guo Headshot"
						width={400}
						height={0}
						className="h-auto rounded-2xl object-cover"
					/>
					</motion.p>
				</div>
			</div>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</motion.section>
	);
}
