import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Share2, MessageCircle } from 'lucide-react';
import { CornerFlourish, DividerFlourish, BotanicalFlourish } from './RoyalFlourish';
import { FadeUp, FadeScale } from './ScrollReveal';

export const ShareSection = ({ hashtag, socialShare }) => {
  const [hashtagCopied, setHashtagCopied] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(hashtag);
      setHashtagCopied(true);
      setTimeout(() => setHashtagCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleWhatsAppShare = () => {
    const currentUrl = window.location.href;
    const text = encodeURIComponent(
      `💍 Zohan & Rose are getting married!\nWe'd love for you to be part of our special day.\n✨ Open the royal invitation: ${currentUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: socialShare.shareTitle,
          text: `💍 Zohan & Rose are getting married! We'd love for you to be part of our special day.`,
          url: window.location.href
        });
      } catch {
        // User cancelled
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section id="share" className="relative py-16 sm:py-28 bg-[#0D2923] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#123C32]/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="section-container relative z-10 max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="max-w-xl mx-auto mb-10 sm:mb-12">
          <FadeUp>
            <span className="section-subtitle">Celebrate Together</span>
            <h2 className="section-title">
              Share the <span className="italic font-serif gold-text-gradient">Love</span>
            </h2>
            <BotanicalFlourish className="mx-auto my-3" />
            <p className="text-[#C9C4B6] font-serif italic text-sm sm:text-base">
              "Tag your cherished moments with our official royal celebration hashtag."
            </p>
          </FadeUp>
        </div>

        {/* Hashtag Box with Scale Reveal */}
        <FadeScale scaleFrom={0.93}>
          <div className="royal-card p-6 sm:p-8 md:p-12 max-w-2xl lg:max-w-3xl mx-auto relative mb-8 sm:mb-10 shadow-[0_25px_60px_rgba(0,0,0,0.65)]">
            <CornerFlourish position="top-right" />
            <CornerFlourish position="bottom-left" />

            <h3 className="font-serif text-2xl min-[360px]:text-3xl sm:text-4xl md:text-5xl text-[#E8CF91] tracking-wider mb-6 sm:mb-8 font-semibold break-all sm:break-normal select-all">
              {hashtag}
            </h3>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleCopyHashtag}
                className="btn-royal-gold text-xs sm:text-[13px] py-3 sm:py-3.5 px-5 sm:px-6 w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2"
              >
                {hashtagCopied ? (
                  <>
                    <Check className="w-4 h-4 text-[#071C18]" />
                    <span>Copied ✦</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Hashtag</span>
                  </>
                )}
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleWhatsAppShare}
                className="btn-royal-outline text-xs sm:text-[13px] py-3 sm:py-3.5 px-5 sm:px-6 text-[#25D366] border-[#25D366]/40 hover:border-[#25D366] hover:bg-[#25D366]/15 w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Share on WhatsApp</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleNativeShare}
                className="btn-royal-outline text-xs sm:text-[13px] py-3 sm:py-3.5 px-5 sm:px-6 w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2"
              >
                <Share2 className="w-4 h-4" />
                <span>{linkCopied ? 'Link Copied!' : 'Share Invitation'}</span>
              </motion.button>
            </div>
          </div>
        </FadeScale>

        <DividerFlourish className="mt-12 sm:mt-16" />
      </div>
    </section>
  );
};
