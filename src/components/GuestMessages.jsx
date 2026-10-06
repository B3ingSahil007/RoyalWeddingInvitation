import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, MessageSquareHeart } from 'lucide-react';
import { CornerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, FadeScale, SelfDrawingDivider, StaggerContainer, StaggerItem } from './ScrollReveal';

export const GuestMessages = ({ initialMessages }) => {
  const [messages, setMessages] = useState(initialMessages);
  const [authorName, setAuthorName] = useState('');
  const [relation, setRelation] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (!authorName.trim() || !newMsg.trim()) return;

    const created = {
      id: `msg-${Date.now()}`,
      name: authorName.trim(),
      relation: relation.trim() || 'Well-wisher',
      message: newMsg.trim(),
      time: 'Just now'
    };

    setMessages([created, ...messages]);
    setAuthorName('');
    setRelation('');
    setNewMsg('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="messages" className="relative py-16 sm:py-32 bg-[#0D2923] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#123C32]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="section-subtitle">Heartfelt Blessings</span>
            <h2 className="section-title">
              Leave a <span className="italic font-serif gold-text-gradient">Little Love</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-lg">
              "Your warm words and prayers are the greatest gift you could bestow upon us."
            </p>
          </FadeUp>
        </div>

        {/* Message Input Form with Scale Reveal */}
        <FadeScale scaleFrom={0.94}>
          <div className="royal-card p-5 sm:p-8 mb-10 sm:mb-12 max-w-2xl mx-auto relative">
            <CornerFlourish position="top-right" />
            <form onSubmit={handleAddMessage} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-royal tracking-wider text-[#D8B56A] uppercase mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ayesha & Sameer"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#071C18]/90 border border-[#D8B56A]/40 text-[#F8F3E7] placeholder-[#8E9B96] text-sm focus:border-[#D8B56A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-royal tracking-wider text-[#D8B56A] uppercase mb-1.5 font-semibold">
                    Relation / City (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cousin / Mumbai"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#071C18]/90 border border-[#D8B56A]/40 text-[#F8F3E7] placeholder-[#8E9B96] text-sm focus:border-[#D8B56A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-royal tracking-wider text-[#D8B56A] uppercase mb-1.5 font-semibold">
                  Your Blessing or Message
                </label>
                <textarea
                  rows="2"
                  required
                  placeholder="Congratulations Zohan & Rose! Wishing you both a lifetime of happiness..."
                  value={newMsg}
                  onChange={(e) => setNewMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#071C18]/90 border border-[#D8B56A]/40 text-[#F8F3E7] placeholder-[#8E9B96] text-sm focus:border-[#D8B56A] focus:outline-none resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
                {submitted ? (
                  <span className="text-xs font-serif italic text-[#E8CF91] flex items-center gap-1.5 text-center sm:text-left">
                    <Heart className="w-3.5 h-3.5 text-[#D8B56A] fill-current" />
                    Your beautiful blessing has been recorded!
                  </span>
                ) : <div />}

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="btn-royal-gold text-xs py-2.5 px-6 w-full sm:w-auto"
                >
                  <Send className="w-3.5 h-3.5" />
                  Post Blessing
                </motion.button>
              </div>
            </form>
          </div>
        </FadeScale>

        {/* Wishes Cards Grid with Staggered Entrance */}
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        >
          {messages.map((item) => (
            <StaggerItem key={item.id} yOffset={35}>
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="royal-card p-5 sm:p-6 flex flex-col justify-between relative group hover:border-[#D8B56A] h-full"
              >
                <div>
                  <MessageSquareHeart className="w-5 h-5 text-[#D8B56A]/70 mb-3" />
                  <p className="font-serif italic text-base text-[#F8F3E7] leading-relaxed mb-4">
                    "{item.message}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#D8B56A]/20 flex items-center justify-between">
                  <div>
                    <h4 className="font-royal text-xs font-bold text-[#E8CF91] uppercase tracking-wider">
                      {item.name}
                    </h4>
                    <span className="text-[11px] text-[#8E9B96]">
                      {item.relation}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#D8B56A]/60 font-royal">
                    {item.time}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
