import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function App() {
  return (
    <div className="bg-slate-800 font-source">
      <section className="container page-home flex mx-auto relative" id="#home">
        <div className="z-10 flex items-center  px-32">
          <div className="text-3xl text-white">
            <h1 className="text-8xl text-primary font-releway font-semibold spacing">
              Martha Brito
            </h1>
            <div className="max-w-xl">
              <p className="mt-8">
                <span className=" font-bold text-primary">
                  Correspondente Jurídica{" "}
                </span>
                de alta performance.
              </p>
              <br />
              <p>
                Mais de
                <span className="font-bold text-primary">
                  {" "}
                  10 cidades atendidas{" "}
                </span>
                para diversos estados
              </p>
            </div>
            <button className="text-white p-4 mt-4 uppercase bg-primary rounded-2xl">
              Conheça mais sobre min
            </button>
          </div>
          <div className="z-10 pt-8">
            <img src="./images/profile.png" alt="Martha brito em pose" />
          </div>
        </div>

        <div className="absolute z-0 h-screen object-fill overflow-hidden">
          <img src="./images/bg-correspondencia.png" alt="" />
        </div>
      </section>
      <section className="container z-100 h-176 flex mx-auto bg-white px-32">
        <div className="flex items-center text-red">
          <div className="max-w-2xl">
            <h2 className="text-7xl mb-8">Sobre mim</h2>
            <span className="mt-12 font-releway text-3xl text-justify">
              Sou graduada em Direito, atuo como Assistente Jurìdica para
              Oliveira & Carneiro Sociedade de Advogados como parceira jurídica
              nas áreas previdenciária, cível, trabalhista e consumerista; e
              ainda, como Correspondente em diversas áreas, realizando vários
              tipos de diligências.
            </span>
          </div>
          <div className="flex items-center w-full h-screen object-cover">
            <img src="./images/profile-branco.png" alt="" />
          </div>
        </div>
      </section>
      <section className="container mx-auto bg-secondary text-white text-center">
        <div className="px-32 pt-12">
          <h3 className="font-bold text-4xl max-w-3xl mx-auto">
            Atuo como Correspondente Jurídica na execução de{" "}
            <span className="font-bold text-red bg-white">
              diligências judiciais
            </span>{" "}
            como:
          </h3>
          <div className="mt-12 grid grid-cols-2 text-3xl gap-16 pb-16">
            <div className="col-span-1 bg-secondary border-white border-4 py-16 rounded-tl-6xl rounded-br-6xl">
              <div>Acompanhamentos de processos;</div>
              <div>Acompanhamentos de pericias judiciais;</div>
              <div>Análises;</div>
              <div>Andamentos;</div>
              <div>Audiências (Preposto);</div>
              <div>Alvarás;</div>
            </div>
            <div className="col-span-1 bg-secondary border-white border-4 py-16 rounded-bl-6xl rounded-tr-6xl">
              <div>Busca e apreensôes;</div>
              <div>Certidões;</div>
              <div>Cópias;</div>
              <div>Distribuição;</div>
              <div>Emissão de Guias;</div>
              <div>Requerimentos;</div>
              <div>Protocolos;</div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto bg-white text-red text-center">
        <div className="px-32 pt-12">
          <div className="mt-12 grid grid-cols-2 text-3xl gap-16 pb-16">
            <div className="col-span-1 bg-primary border-red border-4 py-16 rounded-bl-6xl rounded-tr-6xl">
              <div>Audiências administrativas;</div>
              <div>Despachos;</div>
              <div>Diligências in loco;</div>
              <div>Notificações extrajudiciais;</div>
              <div>Participações em licitações;</div>
            </div>
            <div className="col-span-1 bg-primary border-red border-4 py-16 rounded-tl-6xl rounded-br-6xl">
              <div>Protocolo e retirada de certidões negativas/positivas</div>
              <div>
                Serviços diversos em Cartórios, Prefeituras, Detran e demais
                orgãos públicos e empresas privadas.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto bg-red flex text-white text-center pb-32">
        <div className="max-w-4xl px-32 pt-64 z-10">
          <h3 className="text-5xl text-primary font-releway mb-8">
            Área de atuação
          </h3>
          <span className="text-center text-3xl">
            Cacoal, Jaru, Ji-Paraná, Ouro Preto do Oeste, Pimenta Bueno e
            presidente Médici, no estado de Rondônia
          </span>
        </div>
        <div className="flex items-center -ml-36 mt-32 object-cover z-0">
          <img src="./images/estado-ro.png" alt="" />
        </div>
      </section>
      <section className="container mx-auto bg-white flex text-red pb-32">
        <div className="max-w-5xl px-32 pt-32">
          <h3 className="text-4xl mb-8">
            A solução ideal para seu Escritório ou Empresa.
          </h3>
          <p className="max-w-lg text-4xl">
            <span className="font-semibold">
              Otimize seu tempo, reduza custos, agilize a realização de
              diligências, e expanda seu escritório
            </span>{" "}
            com prestação de serviços especializado, de qualidade e excelência.
          </p>
        </div>
        <div className="flex items-center -ml-64 object-cover z-0">
          <img src="./images/profile-logo.png" alt="" />
        </div>
      </section>
      <section className="container mx-auto py-32 bg-red text-white text-center flex justify-around">
        <div>
          <p className="text-3xl mb-4">Telefone</p>
          <p className="text-2xl">+55 (69) 9 9202-2788</p>
        </div>
        <div>
          <p className="text-3xl mb-4">E-Mail</p>
          <a className="text-2xl" href="mailto:contato@marthabritocj.com.br">
            contato@marthabritocj.com.br
          </a>
        </div>
        <div>
          <p className="text-3xl mb-4">Redes sociais</p>
          <div className="text-xl flex gap-4 justify-center">
            <a>
              <FontAwesomeIcon icon={brands("square-facebook")} class="w-12" />
            </a>
            <a>
              <FontAwesomeIcon icon={brands("square-instagram")} class="w-12" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
