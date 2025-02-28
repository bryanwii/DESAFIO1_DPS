"use client";
//PAGINA WEB
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Image from "next/image";
import PlanoParqueo from '../components/PlanoParqueo';
import SelectorZona from '../components/SelectorZona';
import ResumenReserva from '../components/ResumenReserva';
import { reservarEspacio } from '../redux/actions';
import styles from "./page.module.css";

const zonas = ['Cubierto', 'Descubierto', 'VIP'];

export default function Home() {
  const dispatch = useDispatch();
  const [espacios, setEspacios] = useState(() => [
    { id: 1, nombre: 'Espacio 1', ocupado: false },
    { id: 2, nombre: 'Espacio 2', ocupado: false },
    { id: 3, nombre: 'Espacio 3', ocupado: false },
  ]);
  const [reserva, setReserva] = useState(null);

  const handleSelectZona = (zona) => {
    console.log(`Zona seleccionada: ${zona}`);
    const espacioSeleccionado = espacios.find(espacio => !espacio.ocupado);
    if (espacioSeleccionado) {
      setEspacios(prevEspacios =>
        prevEspacios.map(espacio =>
          espacio.id === espacioSeleccionado.id ? { ...espacio, ocupado: true } : espacio
        )
      );
      dispatch(reservarEspacio(espacioSeleccionado.id, 10)); 
      setReserva({
        espacio: espacioSeleccionado.nombre,
        duracion: 1, 
        total: 10, 
      });
    }
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <SelectorZona zonas={zonas} onSelect={handleSelectZona} />
        <PlanoParqueo espacios={espacios} />
        {reserva && <ResumenReserva reserva={reserva} />}
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
      </footer>
    </div>
  );
}
