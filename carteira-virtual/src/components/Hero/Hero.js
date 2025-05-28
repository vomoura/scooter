import { jsx as _jsx } from "react/jsx-runtime";
import { HeroWrapper } from './Hero.styles';
import scooter from '../../assets/scooter.png';
export const Hero = () => (_jsx(HeroWrapper, { children: _jsx("img", { src: scooter, alt: "Scooter" }) }));
