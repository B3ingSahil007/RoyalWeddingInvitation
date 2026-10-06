import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export const MusicController = ({ isAutoStartRequested = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const synthTimerRef = useRef(null);
  const isPlayingRef = useRef(false);

  // Web Audio Harmonic Royal Harp Synthesizer
  // Creates an ethereal, peaceful, romantic royal ambient soundtrack
  const playHarpNote = (freq, duration = 3.5, timeOffset = 0) => {
    if (!audioCtxRef.current || audioCtxRef.current.state === 'suspended') return;
    const ctx = audioCtxRef.current;

    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    // Warm, soft acoustic tone
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, ctx.currentTime + timeOffset);

    // Warm low-pass filter
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, ctx.currentTime + timeOffset);

    // Envelope (gentle attack, lush decay)
    const startTime = ctx.currentTime + timeOffset;
    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.045, startTime + 0.08);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  };

  const startRoyalAmbientMusic = () => {
    if (!audioCtxRef.current) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      audioCtxRef.current = new AudioContext();
    }

    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }

    isPlayingRef.current = true;
    setIsPlaying(true);

    // D Major / Royal Raag Yaman Pentatonic frequencies
    // D4, E4, F#4, A4, B4, C#5, D5, E5, F#5, A5
    const chordProgressions = [
      // Chord 1: D Major 9
      [293.66, 369.99, 440.0, 554.37, 659.25],
      // Chord 2: B Minor 7
      [246.94, 293.66, 369.99, 440.0, 587.33],
      // Chord 3: G Major 9
      [196.00, 246.94, 293.66, 369.99, 440.0],
      // Chord 4: A Sus 4 / Add 9
      [220.00, 293.66, 329.63, 440.0, 554.37]
    ];

    let chordIndex = 0;

    const playArpeggioCycle = () => {
      if (!isPlayingRef.current) return;
      const currentChord = chordProgressions[chordIndex % chordProgressions.length];
      chordIndex++;

      // Play notes staggered like an acoustic royal harp
      currentChord.forEach((freq, idx) => {
        const delay = idx * 0.45;
        playHarpNote(freq, 4.0, delay);
      });

      // Add a high shimmering octave touch
      const highNote = currentChord[currentChord.length - 1] * 1.5;
      playHarpNote(highNote, 3.0, 1.8);

      synthTimerRef.current = setTimeout(playArpeggioCycle, 3600);
    };

    playArpeggioCycle();
  };

  const stopRoyalAmbientMusic = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopRoyalAmbientMusic();
    } else {
      startRoyalAmbientMusic();
    }
  };

  // Start music automatically when user touches to open the envelope
  useEffect(() => {
    if (isAutoStartRequested && !isPlaying) {
      startRoyalAmbientMusic();
    }
  }, [isAutoStartRequested]);

  useEffect(() => {
    return () => {
      stopRoyalAmbientMusic();
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-20 right-3.5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        className={`group relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full border transition-all duration-300 backdrop-blur-md shadow-lg ${
          isPlaying
            ? 'bg-[#0D2923]/90 border-[#D8B56A] text-[#F8F3E7] shadow-[0_0_20px_rgba(216,181,106,0.35)]'
            : 'bg-[#071C18]/85 border-[#D8B56A]/40 text-[#C9C4B6] hover:border-[#D8B56A]'
        }`}
        aria-label={isPlaying ? 'Pause Royal Wedding Melodies' : 'Play Royal Wedding Melodies'}
        title={isPlaying ? 'Music On — Click to Mute' : 'Music Off — Click to Play'}
      >
        {isPlaying ? (
          <div className="flex items-center gap-1 sm:gap-1.5 h-3.5 sm:h-4">
            <span className="sound-bar" />
            <span className="sound-bar" />
            <span className="sound-bar" />
            <span className="sound-bar" />
          </div>
        ) : (
          <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D8B56A]/80" />
        )}

        <span className="text-[11px] sm:text-xs font-serif tracking-widest uppercase font-medium">
          <span className="sm:hidden">{isPlaying ? '♫ Melodies' : '♫ Mute'}</span>
          <span className="hidden sm:inline">{isPlaying ? '♫ Melodies On' : '♫ Melodies Off'}</span>
        </span>
      </button>
    </div>
  );
};
