export default function App() {
  return (
    <div className="bg-slate-800">
      <section
        className="container mx-auto page-home pt-36 flex justify-center"
        id="#home"
      >
        <div className="self-center">
          <h1 className="text-8xl">Martha Brito</h1>
          <p>
            <span className="font-bold">Correspondente Jurídica </span>
            de alta performance.
          </p>
          <p>
            Mais de
            <span className="font-bold"> 10 cidades atendidas </span>
            para diversos estados
          </p>
          <button className="btn btn-primary rounded">
            Conheça mais sobre min
          </button>
        </div>
        <div className="self-center">
          <img src="./images/profile.png" alt="Martha brito em pose" />
        </div>
      </section>
      <section>
        <h2>Sobre min</h2>
        <span>
          Sou graduada em Direito, atuo como Assistente Jurìdica para Oliveira &
          Carneiro Sociedade de Advogados como parceira jurídica nas áreas
          previdenciária, cível, trabalhista e consumerista; e ainda, como
          Correspondente em diversas áreas, realizando vários tipos de
          diligências.
        </span>
      </section>
      <section>
        <h3>
          Atuo como Correspondente Jurídica na execução de{" "}
          <span>diligências judiciais</span> como :
        </h3>
        <div>
          <div>
            <span>Acompanhamentos de processos;</span>
            <span>Acompanhamentos de pericias judiciais;</span>
            <span>Análises;</span>
            <span>Andamentos;</span>
            <span>Audiências (Preposto);</span>
            <span>Alvarás;</span>
          </div>
          <div>
            <span>Busca e apreensôes;</span>
            <span>Certidões;</span>
            <span>Cópias;</span>
            <span>Distribuição;</span>
            <span>Emissão de Guias;</span>
            <span>Requerimentos;</span>
            <span>Protocolos;</span>
          </div>
        </div>
      </section>
      <section>
        <h3>
          E, ainda com <span>diligências</span> <span>extrajudiciais</span>{" "}
          como:
        </h3>
        <div>
          <div>
            <span>Audiências administrativas;</span>
            <span>Despachos;</span>
            <span>Diligências in loco;</span>
            <span>Notificações extrajudiciais;</span>
            <span>Participações em licitações;</span>
          </div>
          <div>
            <span>Protocolo e retirada de certidões negativas/positivas</span>
            <span>
              Serviços diversos em Cartórios, Prefeituras, Detran e demais
              orgãos públicos e empresas privadas.
            </span>
          </div>
        </div>
      </section>
      <section>
        <h3>Área de atuação:</h3>
        <span>
          Cacoal, Jaru, Ji-Paraná, Ouro Preto do Oeste, Pimenta Bueno e
          presidente Médici, no estado de Rondônia
        </span>
      </section>
      <section className="flex">
        <div>
          <h3>A solução ideal para seu Escritório ou Empresa.</h3>
          <p>
            <span>
              Otimize seu tempo, reduza custos, agilize a realização de
              diligências, e expanda seu escritório
            </span>{" "}
            com prestação de serviços especializado, de qualidade e excelência.
          </p>
        </div>
        <div>img</div>
      </section>
      <section className="footer text-center flex justify-around">
        <div>
          <p>Telefone</p>
          <p>+55 (69) 9 9202-2788</p>
        </div>
        <div>
          <p>E-Mail</p>
          <a href="mailto:contato@marthabritocj.com.br">
            contato@marthabritocj.com.br
          </a>
        </div>
        <div>
          <p>Redes sociais</p>
          <div className="flex">
            <p>IN</p>
            <p>FB</p>
          </div>
        </div>
      </section>
    </div>
  );
}
