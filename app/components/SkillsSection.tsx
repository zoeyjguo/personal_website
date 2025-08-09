'use client';

import { motion } from 'framer-motion';

const sections = ['Programming Languages', 'Frameworks & Software', 'IDEs & Tools'];
const skills = ['Python, HTML, CSS, TypeScript, JavaScript, Java, C#, SQL, Bash', 
				'React, Angular, Next.js, Node.js, Express.js, Flask, Git, .NET 8, JUnit, MSTest', 
				'Visual Studio Code, Visual Studio, Git, Docker, Jupyter Notebook, Jira, IntelliJ IDEA, Eclipse IDE'];

export default function SkillsSection() {
	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-black to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
				>
					Skills & Technologies
				</motion.h2>

				<div className="grid md:grid-cols-3 gap-8">
				{sections.map((section, index) => (
					<motion.div
						key={section}
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.1 }}
						whileHover={{ scale: 1.05 }}
							className="bg-white/5 rounded-xl p-6 text-center hover:bg-white/10 transition-colors"
						>
							<h3 className="text-lg font-semibold">{section}</h3>
							<h3 className="text-md">{skills[index]}</h3>
					</motion.div>
				))}
				</div>
			</div>
		</section>
	);
}
