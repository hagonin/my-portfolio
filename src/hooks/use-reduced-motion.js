import { useReducedMotion } from 'framer-motion';

/**
 * Re-export useReducedMotion from framer-motion for convenience.
 * Use this hook to check if user prefers reduced motion, then
 * conditionally apply motion props.
 *
 * Example:
 *   const prefersReduced = useReducedMotion();
 *   const motionProps = prefersReduced
 *     ? { initial: false }
 *     : { initial: { opacity: 0 }, animate: { opacity: 1 } };
 */
export { useReducedMotion };
