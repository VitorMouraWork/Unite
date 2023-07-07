'use client';
import Image from "next/image";
import Link from "next/link"
const LandingPage = () => {
  return (
    <>

{/* CABEÇALHO */}

      <div id="header" className="ease-in-out duration-200 sans w-full bg-white space-x-10 drop-shadow-2xl flex p-5 flex-column justify-center rounded-md items-center mb-40 w-fit self-center"> 
      <Image 
        src="/assets/icons/Unite.svg"
        alt="Unite"
        width={100}
        height={30}
        className="mr-80"
      />
        <a href="" className="sans-sb text-unite-orange">Home</a>
        <a href="" className="sans text-neutral-400 ">Sobre Nós</a>
        <a href="" className="sans text-neutral-400 ">Pacotes</a>
        <a href="" className="sans text-neutral-400 ">Baixar</a>
        <Link href="Login" className="ease-in-out duration-200 sans-sb text-unite-orange p-3 px-5 hover:px-6 rounded-full border-2 border-unite-orange">Log In</Link>
        <Link href="Login" className="ease-in-out duration-200 sans-sb bg-unite-orange border-2 border-unite-orange p-3 px-5 hover:px-6 rounded-full text-white">Sign Up</Link>
      </div>
      
{/* 1 PARTE */}

      <div className="flex space-y-5"> 
        <div className="flex flex-col space-y-10 w-1/3 mr-10 ml-32">
          <p className="text-5xl">O lugar onde mentes brilhantes se encontram e colaboram.</p>
          <p className="text2">Em nossa plataforma, você tem a oportunidade de construir pontes para o sucesso, conectando-se com mentes brilhantes e especialistas de diversos setores. Nossa comunidade é o ambiente ideal para compartilhar conhecimento, colaborar em projetos inovadores e alcançar seus objetivos profissionais de forma excepcional.</p>
          <button className="text-white sans-sb bg-unite-orange p-3 px-10 rounded-full">Get Started</button>
        </div>
        <Image 
          src="/assets/images/ppl.png"
          alt="Unite"
          width={800}
          height={800}
          className="ml-40"
        />
      </div>

{/* 2 PARTE */}

      <div className="bg-unite-blob w-full bg-unite-orange text-white p-10 flex"> 
        <div className="flex flex-col gap-10 flex-start p-20 w-1/3">
            <p className="text-5xl">Quer descobrir oportunidades únicas e conectar-se com os principais líderes da sua indústria?</p>
            <p className="text4">Em nosso aplicativo, oferecemos um ambiente propício para que você descubra oportunidades únicas e se conecte diretamente com os principais líderes e influenciadores da sua área.</p>
        </div>

        <div className="flex w-2/4">
          <div className="Perfil">
            <div className="flex">
              <Image 
                src="/assets/icons/profile-lp.svg"
                alt="profile"
                width={80}
                height={80}
              />
              <p className="titulo1">Perfis profissionais</p>
            </div>
            <p className="text5">Crie um perfil profissional completo com experiência, habilidades e informações relevantes.</p>
          </div>

          <div className="Rede">
            <div className="fundo2"></div>
            <Image src={""} />
            <p className="titulo2">Rede de conexões</p>
            <p className="text6">Conecte-se com profissionais e expanda sua rede de contatos de forma gratuita.</p>
          </div>

          <div className="Feed">
            <div className="fundo3"></div>
            <Image src={""} />
            <p className="titulo3">Feed de notícias</p>
            <p className="text7">Mantenha-se atualizado com as últimas novidades, atualizações e publicações dos seus contatos.</p>
          </div>

          <div className="Post">
            <div className="fundo4"></div>
            <Image src={""} />
            <p className="titulo4">Posts e compartilhamentos</p>
            <p className="text8">Compartilhe conteúdo relevante, artigos e atualizações profissionais com sua rede.</p>
          </div>
        </div>
      </div>

      <div id="3parte"> {/* 3 PARTE */}
        <Image src={""} />
        <Image src={""} />

        <div className="Free">
          <div className="fundofree"></div>
          <p className="text9">Unite Basic</p>
          <p className="text10">Free</p>
          <p className="text11">Plano gratuito</p>

          <img src="" alt="check1" />
          <p className="text12">Perfis profissionais</p>
          <img src="" alt="check2" />
          <p className="text13">Rede de conexões</p>
          <img src="" alt="check3" />
          <p className="text14">Feed de notícias</p>
          <img src="" alt="check4" />
          <p className="text15">Posts e Compartilhamentos</p>
          <img src="" alt="check5" />
          <p className="text16">Recursos de descoberta</p>

          <button className="btn2">Download</button>
        </div>

        <div className="pro">
          <div className="fundopro"></div>
          <p className="text17">Unite Premium</p>
          <p className="text18">R$ 30,90</p>
          <p className="text19">por mês</p>

          <img src="" alt="" />
          <p className="text20"></p>
          <img src="" alt="" />
          <p className="text21"></p>
          <img src="" alt="" />
          <p className="text22"></p>
          <img src="" alt="" />
          <p className="text23"></p>
          <img src="" alt="" />
          <p className="text24"></p>
          <img src="" alt="" />
          <p className="text25"></p>

          <button className="btn3">Comprar Plano</button>
        </div>

      </div>

      <div id="4parte"> {/* 4 PARTE */}
        <p className="text26">Baixe a Unite em seu dispositivo!</p>
        <p className="text27">A Unite esta disponivel tanto para dispositivos Android quanto para IOS. Baixe já!</p>

        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div id="rodape" className="flex space-x-20 w-full p-14 bg-neutral-200 mt-20"> {/* RODAPÉ */}

      <div className="flex flex-col gap-4 w-1/4">
      <Image 
        src="/assets/icons/Unite.svg"
        alt="Unite"
        width={100}
        height={30}
      />
        <p className="text28">A Unite foi desenvolvida dentro de um trabalho em grupo da matéria de PIT no Colégio Cotemig.</p>
      </div>

      <div className="flex flex-col gap-4 w-1/4">
        <p className="text29">Sitemap</p>
        <p className="text30">Política de Privacidade</p>
        <p className="text31">Termos de Serviço</p>
        <p className="text32">Publicidade</p>
        <p className="text33">Marketing</p>
        <p className="text34">Unite para Empresas</p>
      </div>

      <div className="flex flex-col gap-4 w-1/4">
        <p className="text35">Equipe</p>
        <p className="nome1">André Bento</p>
        <p className="nome2">Bruna Valgas</p>
        <p className="nome3">Gustavo Alves</p>
        <p className="nome4">Lívia Mansur</p>
        <p className="nome5">Sofia Pereira</p>
        <p className="nome6">Vitor Drumond</p>
      </div>

      <div className="flex flex-col gap-4 w-1/4">
        <p className="text36">Acompanhe nossas redes sociais</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      </div>
    </>
  )
}

export default LandingPage
