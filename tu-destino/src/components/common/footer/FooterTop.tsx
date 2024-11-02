"use client";
import Link from "next/link";
import { useState, FC } from "react";

export default function FooterTop() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Lógica para manejar la suscripción con el correo electrónico
    console.log(email);
  };

  return (
    <section className="relative bg-[#ff414d] pt-20 md:pt-32 pb-0 grid gap-md">
      <div className="mx-auto md:max-w-[90rem] px-5">
        <div className="text-center">
          <h2 className="text-[3rem] text-balance md:text-[7rem] md:max-w-[42rem] mx-auto font-serif text-center leading-none tracking-tight text-[#fffdf1] mb-8 md:mb-16">Únete y encuentra Tu Destino</h2>
          <Link href="#" className="text-[#ff414d] bg-[#fffdf1] border-4 border-[#fffdf1] hover:bg-transparent hover:text-[#fffdf1] focus:ring-4 focus:outline-none focus:ring-stop-cream/30 font-medium rounded-full text-lg md:text-[3rem] px-6 py-2 md:px-[3.5rem] md:py-[2rem] text-center inline-block transition">Sign up</Link>
        </div>
      </div>
      <div className="w-full h-[340px]"></div>
    </section>
  );
}
