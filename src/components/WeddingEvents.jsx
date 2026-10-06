import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { CornerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, SelfDrawingDivider, StaggerContainer, StaggerItem } from './ScrollReveal';

export const WeddingEvents = ({ events }) => {
  // Helper to generate Google Calendar links
  const createGoogleCalendarUrl = (event) => {
    const title = encodeURIComponent(`Zohan & Rose — ${event.name}`);
    const details = encodeURIComponent(`${event.description}\nDress Code: ${event.dressCode}`);
    const location = encodeURIComponent(`${event.venueName}, ${event.venueLocation}`);

    // Dates mapped
    let startIso, endIso;
    if (event.id === 'engagement') {
      startIso = '20261023T190000';
      endIso = '20261023T233000';
    } else if (event.id === 'ceremony') {
      startIso = '20261024T110000';
      endIso = '20261024T143000';
    } else {
      startIso = '20261024T193000';
      endIso = '20261024T235900';
    }

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startIso}/${endIso}&details=${details}&location=${location}`;
  };

  return (
    <section id="events" className="relative py-16 sm:py-32 bg-[#071C18] overflow-hidden">
      {/* Decorative emerald glows */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-[#123C32]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 -left-32 w-80 h-80 bg-[#D8B56A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <FadeUp>
            <span className="section-subtitle">Schedule of Festivities</span>
            <h2 className="section-title">
              The Celebration <span className="italic font-serif gold-text-gradient">Events</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-xl">
              "Three cherished occasions to laugh, celebrate, and create lifelong memories together."
            </p>
          </FadeUp>
        </div>

        {/* 3 Event Cards with One-by-One Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.2}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {events.map((event, index) => (
            <StaggerItem
              key={event.id}
              yOffset={45}
              className="h-full"
            >
              <div className="royal-card relative p-5 sm:p-8 flex flex-col justify-between h-full group">
                <CornerFlourish position="top-right" />
                <CornerFlourish position="bottom-left" />

                <div>
                  {/* Event Tag & Day */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#123C32]/80 border border-[#D8B56A]/40 text-[11px] sm:text-xs font-royal text-[#E8CF91] tracking-widest uppercase">
                      {event.day}
                    </span>
                    <span className="text-[#D8B56A] text-[11px] sm:text-xs font-royal tracking-widest">
                      Event 0{index + 1}
                    </span>
                  </div>

                  {/* Event Name */}
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F8F3E7] font-semibold mb-1 group-hover:text-[#E8CF91] transition-colors">
                    {event.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-royal tracking-widest text-[#D8B56A] uppercase mb-4">
                    {event.subname}
                  </p>

                  {/* Details List */}
                  <div className="space-y-3 pt-3 border-t border-[#D8B56A]/20 my-4 text-xs sm:text-sm text-[#C9C4B6]">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-[#D8B56A] flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-[#D8B56A] flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#D8B56A] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-[#F8F3E7] font-medium block">
                          {event.venueName}
                        </strong>
                        <span className="text-[11px] sm:text-xs text-[#8E9B96]">
                          {event.venueLocation}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-sans text-[#A3AEA9] leading-relaxed italic mb-5">
                    "{event.description}"
                  </p>
                </div>

                {/* Card Footer: Dress & Calendar Button */}
                <div className="pt-4 border-t border-[#D8B56A]/20">
                  <div className="text-[11px] font-royal tracking-wider text-[#D8B56A] uppercase mb-3">
                    <span className="opacity-75">Attire:</span> {event.dressCode}
                  </div>

                  <a
                    href={createGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#123C32]/60 hover:bg-[#D8B56A] text-[#E8CF91] hover:text-[#071C18] border border-[#D8B56A]/40 hover:border-[#D8B56A] font-royal text-xs tracking-wider uppercase font-semibold transition-all duration-300"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Add to Calendar
                  </a>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
