import React, { useState } from 'react';
import { weddingData } from './data/weddingData';
import { ParticleCanvas } from './components/ParticleCanvas';
import { IntroScreen } from './components/IntroScreen';
import { MusicController } from './components/MusicController';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import LenisScroll from './components/LenisScroll';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { CoupleGallery } from './components/CoupleGallery';
import { WeddingEvents } from './components/WeddingEvents';
import { MainWeddingSection } from './components/MainWeddingSection';
import { Venue } from './components/Venue';
import { DressCode } from './components/DressCode';
import { FamilySection } from './components/FamilySection';
import { RSVP } from './components/RSVP';
import { GuestMessages } from './components/GuestMessages';
import { ShareSection } from './components/ShareSection';
import { FinalSection } from './components/FinalSection';
import { Footer } from './components/Footer';
import { FloatingNav } from './components/FloatingNav';

export default function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [musicRequested, setMusicRequested] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsInvitationOpened(true);
    setMusicRequested(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    const lenisInstance = window.__lenis || window.lenis;
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
  };

  return (
    <div className="min-h-screen bg-[#071C18] text-[#F8F3E7] relative selection:bg-[#D8B56A]/30 selection:text-[#F8F3E7]">
      {/* Butter-Smooth Lenis Smooth Scroll Engine */}
      <LenisScroll />

      {/* Golden Particle Canvas in Background (Scroll-responsive float) */}
      <ParticleCanvas density={30} />

      {/* Floating Ambient Music Controller */}
      <MusicController isAutoStartRequested={musicRequested} />

      {/* Intro Experience: Touch to Open Wax Seal & Envelope */}
      {!isInvitationOpened && (
        <IntroScreen
          onOpen={handleEnvelopeOpen}
          coupleNames={`${weddingData.groom.firstName} & ${weddingData.bride.firstName}`}
          monogram={weddingData.monogram}
        />
      )}

      {/* Main Wedding Invitation Experience (Mounts fresh with full scroll triggers) */}
      {isInvitationOpened && (
        <main id="main-content" className="relative w-full animate-fade-in">
          {/* Radiant Gold Scroll Progress Bar across top edge */}
          <ScrollProgressBar />

          {/* Floating Navigation Pill */}
          <FloatingNav />

          {/* 1. Hero Section with Scroll Parallax */}
          <Hero data={weddingData} />

          {/* 2. Our Story Timeline with Drawing Line on Scroll */}
          <OurStory story={weddingData.story} />

          {/* 3. Couple Gallery ("A Few Moments") with Staggered Entrance */}
          <CoupleGallery gallery={weddingData.gallery} />

          {/* 4. Wedding Events ("The Celebration") with 3 Staggered Cards */}
          <WeddingEvents events={weddingData.events} />

          {/* 5. Main Wedding Section & Live Countdown */}
          <MainWeddingSection
            groom={weddingData.groom}
            bride={weddingData.bride}
            formattedDate={weddingData.formattedDate}
            weddingDate={weddingData.weddingDate}
          />

          {/* 6. Venue Section with Image Reveal */}
          <Venue venue={weddingData.venue} />

          {/* 7. Dress Code with Symmetrical Slide-ins */}
          <DressCode dressCode={weddingData.dressCode} />

          {/* 8. Family Section with Blessings */}
          <FamilySection
            families={weddingData.families}
            groom={weddingData.groom}
            bride={weddingData.bride}
          />

          {/* 9. RSVP Form & Celebration */}
          <RSVP />

          {/* 10. Guest Messages & Wishes ("Leave a Little Love") */}
          <GuestMessages initialMessages={weddingData.initialMessages} />

          {/* 11. Wedding Hashtag & Share with Action Buttons */}
          <ShareSection
            hashtag={weddingData.hashtag}
            socialShare={weddingData.socialShare}
          />

          {/* 12. Final Cinematic Reveal with Background Zoom */}
          <FinalSection
            groom={weddingData.groom}
            bride={weddingData.bride}
            shortDate={weddingData.shortDate}
            backgroundImage={weddingData.hero.backgroundImage}
          />

          {/* 13. Minimal Luxury Footer */}
          <Footer monogram={weddingData.monogram} />
        </main>
      )}
    </div>
  );
}
