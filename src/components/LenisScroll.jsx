import { useEffect } from 'react'
import Lenis from 'lenis'

const LenisScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1,
            smoothWheel: true,
            syncTouch: false,
            anchors: {
                offset: -120
            },
        });

        window.__lenis = lenis;

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);

        return () => {
            window.__lenis = null;
            lenis.destroy();
        }
    }, [])
    return null
}

export default LenisScroll