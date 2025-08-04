'use client';

import HeroSection from './components/HeroSection';
import ExperiencesSection from './components/ExperiencesSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

export default function MinimalModernPortfolio() {
	return (
		<div className="min-h-screen bg-black text-white">
			<HeroSection />
			<ExperiencesSection />
			<SkillsSection />
			<ContactSection />
		</div>
	);
}
