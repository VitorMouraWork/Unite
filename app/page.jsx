'use client';
import Image from "next/image";

const LandingPage = () => {
  return (
    <>
      <div id="header" class="flex p-30 flex-column justify-content-center rounded-md"> {/* CABEÇALHO */}
        <Image src={""} />
        <p className="home">Home</p>
        <p className="about">Sobre Nós</p>
        <p className="packs">Pacotes</p>
        <p className="download">Baixar</p>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>

      <div id="1parte"> {/* 1 PARTE */}
        <p className="text1">O lugar onde mentes brilhantes se encontram e colaboram.</p>
        <p className="text2">Em nossa plataforma, você tem a oportunidade de construir pontes para o sucesso, conectando-se com mentes brilhantes e especialistas de diversos setores. Nossa comunidade é o ambiente ideal para compartilhar conhecimento, colaborar em projetos inovadores e alcançar seus objetivos profissionais de forma excepcional.</p>
        <button>Get Started</button>
        <Image src={""} />
      </div>

      <div id="2parte"> {/* 2 PARTE */}
        <img src="" alt="" />
        <p className="text3">Quer descobrir oportunidades únicas e conectar-se com os principais líderes da sua indústria?</p>
        <p className="text4">Em nosso aplicativo, oferecemos um ambiente propício para que você descubra oportunidades únicas e se conecte diretamente com os principais líderes e influenciadores da sua área.</p>
        
        <div className="Perfil">
          <div className="fundo1"></div>
          <Image src={""} />
          <p className="titulo1">Perfis profissionais</p>
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

      <div id="rodape"> {/* RODAPÉ */}
        <img src="" alt="" />
        <p className="text28">A Unite foi desenvolvida dentro de um trabalho em grupo da matéria de PIT no Colégio Cotemig.</p>
        
        <p className="text29">Sitemap</p>
        <p className="text30">Política de Privacidade</p>
        <p className="text31">Termos de Serviço</p>
        <p className="text32">Publicidade</p>
        <p className="text33">Marketing</p>
        <p className="text34">Unite para Empresas</p>

        <p className="text35">Equipe</p>
        <p className="nome1">André Bento</p>
        <p className="nome2">Bruna Valgas</p>
        <p className="nome3">Gustavo Alves</p>
        <p className="nome4">Lívia Mansur</p>
        <p className="nome5">Sofia Pereira</p>
        <p className="nome6">Vitor Drumond</p>

        <p className="text36">Acompanhe nossas redes sociais</p>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </>
  )
}

export default LandingPage
