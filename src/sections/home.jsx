import { motion } from "framer-motion";
import videoBg from "../assets/videoS/japan-nature.mp4";
import Navbar from "../components/Navbar";

import styles from "../styles/home.module.scss";


export default function Home() {
  return (
    <section className={styles.homeSection}>
      {/* 🎥 Video de fondo */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* 🌓 Overlay oscuro para contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* 🔘 Navbar importado */}
      <Navbar />

      {/* ✨ Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Samuel
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
           Exploro el código, la filosofía y la mente humana 🌱
        </motion.p>
      </div>
    </section>
  );
}
