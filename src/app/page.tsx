"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import CyclopsHero from '@/components/sections/layouts/hero/CyclopsHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import MinimalNavbar from '@/components/navigation/MinimalNavbar';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <MinimalNavbar
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={40}
        buttonText="Contact"
        onButtonClick={() => {
          const element = document.getElementById('cta');
          if (element) {
            window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
          }
        }}
        className="bg-white shadow"
      />
      <section id="hero" className="bg-white py-20">
        <CyclopsHero
          title="Welcome to Your Brand"
          subtitle="Your trusted partner in building amazing solutions."
          primaryButtonText="Get Started"
          onPrimaryButtonClick={() => {
            const element = document.getElementById('cta');
            if (element) {
              window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }
          }}
          secondaryButtonText="Learn More"
          onSecondaryButtonClick={() => {
            const element = document.getElementById('about');
            if (element) {
              window.scrollTo({ top: element.offsetTop, behavior: 'smooth' });
            }
          }}
        />
      </section>
      <section id="about" className="bg-f8fbff py-20">
        <MinimalAbout description="At Your Brand, we believe in delivering results that not only meet but exceed expectations. Our team of experienced professionals is dedicated to providing you with the best service possible." />
      </section>
      <section id="services" className="bg-gradient-to-b from-f8fbff to-white py-20">
        <SimpleKPIBento
          items={[
            { value: 'Amazing Feature 1', description: 'Short description of feature 1' },
            { value: 'Amazing Feature 2', description: 'Short description of feature 2' },
            { value: 'Amazing Feature 3', description: 'Short description of feature 3' }
          ]}
          className="max-w-7xl mx-auto"
          gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6"
          itemClassName="p-4 border border-gray-300 rounded-lg"
          valueClassName="font-bold text-xl"
          descriptionClassName="text-gray-700"
        />
      </section>
      <section id="terms" className="bg-white py-20">
        <BentoFAQ items={[{ title: 'Terms of Service', content: 'Brief summary of the terms of service. Click to read the full text.' }]} />
      </section>
      <section id="privacy" className="bg-white py-20">
        <BentoFAQ items={[{ title: 'Privacy Policy', content: 'Brief summary of the privacy policy. Click to read the full text.' }]} />
      </section>
      <section id="cta" className="bg-f5f8ff py-20">
        <h2 className="text-2xl font-bold mb-4">Get in Touch with Us</h2>
        <form onSubmit={e => e.preventDefault()} className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" className="p-2 border border-gray rounded" required/>
          <input type="email" name="email" placeholder="Your Email" className="p-2 border border-gray rounded" required/>
          <textarea name="message" placeholder="Your Message" className="p-2 border border-gray rounded" required/>
          <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Send Message</button>
        </form>
      </section>
    </SiteThemeProvider>
  );
}