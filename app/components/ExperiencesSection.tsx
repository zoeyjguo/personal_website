'use client';

import { motion } from 'framer-motion';

const experiences = [
	{
		id: 1,
		company: 'Regeneron Pharmaceuticals',
		positions: [
			{
				title: 'Single Use Manufacturing Intern',
				duration: 'May 2025 - Present',
				description: [
					'Developed a chatbot to assist users in troubleshooting common issues encountered while using the IOPS Manufacturing Execution System (MES).',
					'Leveraged a Retrieval-Augmented Generation (RAG) model to reference MES-verified documentation when formulating responses, ensuring accurate and reliable answers.',
					'Wrote comprehensive technical documentation to support future iterations and improvements, providing a scalable framework for development.'
				],
			}
		],
	},
	{
		id: 2,
		company: 'Khoury College of Computer Sciences',
		positions: [ 
			{
				title: 'Head Teaching Assistant for CS2510',
				duration: 'Jan 2025 - Apr 2025',
				description: [
					'Worked as a Head Teaching Assistant for the class Fundamentals of Computer Science II.',
					'Designed informative PowerPoint presentations for lab sessions to improve students\' understanding of complex concepts.',
					'Wrote comprehensive practice questions to prepare students for upcoming exams.',
					'Refined assignments and exams by providing detailed feedback on their content before release.'
				],
			},
			{
				title: 'Team Lead and Teaching Assistant for CS2500',
				duration: 'Sep 2024 - Dec 2024',
				description: [
					'Worked as a Tutoring Team Lead for the class Fundamentals of Computer Science I.',
					'Reached out and scheduled tutoring sessions for students who would benefit from 1-on-1 help.',
					'Recorded the progress and provided support to other tutors on the team.'
				],
			}
		]
	},
	{
		id: 3,
		company: 'University of Iowa',
		positions: [
			{
				title: 'Programmer Analyst Intern',
				duration: 'Dec 2024 - Jan 2025',
				description: [
					'Created an SFTP service used to copy remote files to specified local locations.',
					'Wrote a service used to decrypt password protected files with in-depth unit testing.',
					'Created models and entity type configurations for specific files stored in the database, allowing these files to be parsed using C# with a .NET framework.'
				]
			},
		{
				title: 'Programmer Analyst Intern',
				duration: "May 2024 - Aug 2024",
				description: [
					"Built console applications in C# with a .NET 8 framework using Visual Studio.",
					"Refactored applications centered on converting file types to another and PDF manipulation, such as splitting pages and embedding text.",
					"Implemented and edited error handling logic to gracefully exit applications and notify users through detailed logs, reports, and automated emails."
				]
			}
		]
	},
	{
		id: 4,
		company: 'Khoury College of Computer Sciences',
		positions: [
			{
				title: 'Teaching Assistant for CS2510',
				duration: 'Jan 2024 - May 2024',
				description: [
					'Assisted a class of 350+ students with assignments and foundational programming concepts, such as function objects, the visitor pattern, mutation, and common algorithms (breadth first search, Kruskal\'s algorithm, and Dijkstra\'s algorithm) covered in CS2510 (Fundamentals of Computer Science II).',
					'Held 5 hours of office hours and supported in leading a lab of 30 people weekly.',
					'Graded and provided extensive feedback on assignments submitted by students.'
				]
			},
			{
				title: 'Teaching Assistant for CS2500',
				duration: 'Sep 2023 - Dec 2023',
				description: [
					'Assisted a class of 500+ students with assignments and foundational programming concepts, such as recursion, accumulators, abstraction, and introductory program design, covered in CS2500 (Fundamentals of Computer Science I).',
					'Held 6 hours of office hours and supported in leading a lab of 30 people weekly.',
					'Graded and provided extensive feedback on assignments submitted by students.'
				]
			}
		]
	}
		// {
	// 	id: 3,
	// 	title: 'Task Management',
	// 	description: 'Collaborative task management tool with real-time updates',
	// 	image: '/code.jpg',
	// },
	// {
	// 	id: 4,
	// 	title: 'Portfolio Generator',
	// 	description: 'Dynamic portfolio generator for developers',
	// 	image: '/laptop.jpg',
	// },
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Experience
			</motion.h2>

			<div className="grid grid-cols-1 gap-10">
				{experiences.map((experience) => (
					<motion.div
						key={experience.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: experience.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl p-6 w-[950px] mx-auto shadow-lg"
					>
						<h3 className="text-xl font-bold mb-2">{experience.company}</h3>
							{experience.positions.map((position, index) => (
								<div  style={{ padding: '12px 0' }} key={index}>
									<h4 className="font-semibold">{position.title}</h4>
									<p className="text-sm" style={{ padding: '4px 0' }}>{position.duration}</p>
									<ul className="text-md list-disc list-inside space-y-1">
										{position.description.map((point, index) => (
											<li key={index}>{point}</li>
										))}
									</ul>
								</div>
							))}
					</motion.div>
				))}
			</div>
		</section>
	);
}
