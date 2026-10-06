import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Minus, Plus, Heart, CheckCircle2 } from 'lucide-react';
import { CornerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, FadeScale, SelfDrawingDivider } from './ScrollReveal';

export const RSVP = () => {
  const [fullName, setFullName] = useState('');
  const [attendance, setAttendance] = useState('accept'); // 'accept' or 'decline'
  const [guestsCount, setGuestsCount] = useState(2);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) return;

    setSubmittedName(fullName);
    setIsSubmitted(true);

    // Golden Celebration Confetti Burst
    if (attendance === 'accept') {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#D8B56A', '#E8CF91', '#FFFFFF', '#123C32'],
        ticks: 240,
        gravity: 0.85
      });
    }
  };

  return (
    <section id="rsvp" className="relative py-16 sm:py-32 bg-[#071C18] overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#123C32]/35 rounded-full blur-[140px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <FadeUp>
            <span className="section-subtitle">Honor Us With Your Presence</span>
            <h2 className="section-title">
              Will You <span className="italic font-serif gold-text-gradient">Join Us?</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-base sm:text-lg">
              "Your presence would mean the world to us as we embark on this sacred journey."
            </p>
          </FadeUp>
        </div>

        {/* RSVP Card with Scale Reveal */}
        <FadeScale scaleFrom={0.93}>
          <div className="royal-card p-5 sm:p-10 md:p-12 relative overflow-hidden">
            <CornerFlourish position="top-left" />
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-right" />
            <CornerFlourish position="bottom-left" />

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                /* Success State */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-10 flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-[#123C32] border-2 border-[#D8B56A] flex items-center justify-center text-[#E8CF91] mb-5 shadow-[0_0_30px_rgba(216,181,106,0.4)]"
                  >
                    <CheckCircle2 className="w-8 h-8" />
                  </motion.div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F8F3E7] font-semibold mb-2">
                    Thank You, <span className="gold-text-gradient">{submittedName}</span> ✦
                  </h3>

                  <p className="text-base sm:text-lg font-serif italic text-[#C9C4B6] max-w-md mx-auto mb-8">
                    {attendance === 'accept'
                      ? "We can't wait to celebrate our royal evening with you!"
                      : "We will miss your presence dearly, but keep your warm wishes close to our hearts."}
                  </p>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFullName('');
                      setMessage('');
                    }}
                    className="btn-royal-outline text-xs"
                  >
                    Change or Submit Another RSVP
                  </button>
                </motion.div>
              ) : (
                /* Form State */
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-royal tracking-widest uppercase text-[#D8B56A] mb-2 font-semibold">
                      Full Name <span className="text-[#E8CF91]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mr. & Mrs. Tariq Siddiqui"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-5 py-3.5 rounded-xl bg-[#071C18]/90 border border-[#D8B56A]/40 text-[#F8F3E7] placeholder-[#8E9B96] focus:border-[#D8B56A] focus:outline-none focus:ring-1 focus:ring-[#D8B56A] transition-all font-sans text-sm"
                    />
                  </div>

                  {/* Attendance Selection */}
                  <div>
                    <label className="block text-xs font-royal tracking-widest uppercase text-[#D8B56A] mb-3 font-semibold">
                      Will You Attend?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <label
                        onClick={() => setAttendance('accept')}
                        className={`cursor-pointer p-4 rounded-xl border flex items-center gap-3 transition-all ${
                          attendance === 'accept'
                            ? 'bg-[#123C32]/80 border-[#D8B56A] text-[#F8F3E7] shadow-[0_0_15px_rgba(216,181,106,0.25)]'
                            : 'bg-[#071C18]/60 border-[#D8B56A]/30 text-[#C9C4B6] hover:border-[#D8B56A]/60'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            attendance === 'accept' ? 'border-[#D8B56A]' : 'border-[#8E9B96]'
                          }`}
                        >
                          {attendance === 'accept' && (
                            <div className="w-2 h-2 rounded-full bg-[#D8B56A]" />
                          )}
                        </div>
                        <span className="font-royal text-xs tracking-wider uppercase font-medium">
                          Joyfully Accept
                        </span>
                      </label>

                      <label
                        onClick={() => setAttendance('decline')}
                        className={`cursor-pointer p-4 rounded-xl border flex items-center gap-3 transition-all ${
                          attendance === 'decline'
                            ? 'bg-[#123C32]/80 border-[#D8B56A] text-[#F8F3E7] shadow-[0_0_15px_rgba(216,181,106,0.25)]'
                            : 'bg-[#071C18]/60 border-[#D8B56A]/30 text-[#C9C4B6] hover:border-[#D8B56A]/60'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            attendance === 'decline' ? 'border-[#D8B56A]' : 'border-[#8E9B96]'
                          }`}
                        >
                          {attendance === 'decline' && (
                            <div className="w-2 h-2 rounded-full bg-[#D8B56A]" />
                          )}
                        </div>
                        <span className="font-royal text-xs tracking-wider uppercase font-medium">
                          Regretfully Decline
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Number of Guests (Only if accepting) */}
                  {attendance === 'accept' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <label className="block text-xs font-royal tracking-widest uppercase text-[#D8B56A] mb-2 font-semibold">
                        Number of Guests
                      </label>
                      <div className="flex items-center gap-3 sm:gap-4 flex-wrap sm:flex-nowrap">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <button
                            type="button"
                            onClick={() => setGuestsCount((prev) => Math.max(1, prev - 1))}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#071C18] border border-[#D8B56A]/40 text-[#E8CF91] hover:border-[#D8B56A] flex items-center justify-center transition-colors"
                            aria-label="Decrease guest count"
                          >
                            <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>

                          <div className="w-16 sm:w-20 text-center font-serif text-xl sm:text-2xl text-[#F8F3E7] font-semibold py-1.5 rounded-xl bg-[#071C18] border border-[#D8B56A]/30">
                            {guestsCount}
                          </div>

                          <button
                            type="button"
                            onClick={() => setGuestsCount((prev) => Math.min(10, prev + 1))}
                            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#071C18] border border-[#D8B56A]/40 text-[#E8CF91] hover:border-[#D8B56A] flex items-center justify-center transition-colors"
                            aria-label="Increase guest count"
                          >
                            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>
                        </div>
                        <span className="text-xs text-[#8E9B96] font-sans">
                          {guestsCount === 1 ? 'Guest attending' : 'Guests attending'}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Message for Couple */}
                  <div>
                    <label className="block text-xs font-royal tracking-widest uppercase text-[#D8B56A] mb-2 font-semibold">
                      Message for the Couple
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Share your warm blessings, dietary preferences, or wishes..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 sm:px-5 py-3 sm:py-3.5 rounded-xl bg-[#071C18]/90 border border-[#D8B56A]/40 text-[#F8F3E7] placeholder-[#8E9B96] focus:border-[#D8B56A] focus:outline-none focus:ring-1 focus:ring-[#D8B56A] transition-all font-sans text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full btn-royal-gold py-3.5 sm:py-4 text-xs sm:text-sm"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                      Send RSVP
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </FadeScale>

        <SelfDrawingDivider className="mt-14 sm:mt-20" />
      </div>
    </section>
  );
};
