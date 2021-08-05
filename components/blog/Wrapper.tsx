import React from "react";

export default function Wrapper() {
  return (
    <section className="flex items-center justify-center flex-1 my-8">
      <div className="flex flex-col items-center justify-center w-full py-6 border border-gray-100 rounded-md md:py-12 md:max-w-2xl polka-bg-gray">
        <button className="mb-12 primary-button">Teste de butão</button>
        <button className="mb-12 primary-button">Teste de butão</button>
        <button className="mb-12 primary-button">Teste de butão</button>
        <button className="mb-12 primary-button">Teste de botão</button>
        <button className="primary-button">Teste de butão</button>
      </div>
    </section>
  );
}
