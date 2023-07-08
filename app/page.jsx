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

        <div className=" grid grid-cols-2 p-16">
          <div className="border-2 ease-in-out duration-200 hover:scale-105 bg-white/[.10] m-5 box-content h-44 w-50 p-4 border-4 rounded-md">
            <div className="flex items-center space-x-5">
              <Image
                src="/assets/icons/profile-lp.svg"
                alt="profile"
                width={80}
                height={80}
                
              />
              <p className="titulo1" class="text-3xl">Perfis profissionais</p>
            </div>
            <p className="text5" class="pt-10 pb-6">Crie um perfil profissional completo com experiência, habilidades e informações relevantes.</p>
          </div>

          <div className="border-2 ease-in-out duration-200 hover:scale-105 bg-white/[.10] m-5 box-content h-44 w-50 p-4 border-4 rounded-md">
            <div className="flex items-center space-x-5">
              <Image 
                src={"/assets/icons/wifi.svg"} 
                alt="profile"
                width={80}
                height={80}
              />
              <p className="text-3xl">Rede de conexões</p>
            </div>
            <p className="text6">Conecte-se com profissionais e expanda sua rede de contatos de forma gratuita.</p>
          </div>

          <div className="border-2 ease-in-out duration-200 hover:scale-105 bg-white/[.10] m-5 box-content h-44 w-50 p-4 border-4 rounded-md">
            <div className="flex items-center space-x-5">
              <Image 
                src={"/assets/icons/feed.svg"} 
                alt="profile"
                width={80}
                height={80}
              />
              <p className="text-3xl">Feed de notícias</p>
            </div>
            <p className="text7">Mantenha-se atualizado com as últimas novidades, atualizações e publicações dos seus contatos.</p>
          </div>

          <div className="border-2 ease-in-out duration-200 hover:scale-105 bg-white/[.10] m-5 box-content h-44 w-50 p-4 border-4 rounded-md">
            <div className="flex items-center space-x-5">
              <Image 
                src={"/assets/icons/chat.svg"} 
                alt="profile"
                width={80}
                height={80}
              />
              <p className="text-3xl">Posts e compartilhamentos</p>
            </div>
            <p className="text8">Compartilhe conteúdo relevante, artigos e atualizações profissionais com sua rede.</p>
          </div>
        </div>
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
        <p>Design by Sofia & Vitor D.</p>
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
