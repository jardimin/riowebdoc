<style lang="scss">
  .pscroll {
    width: 90%;
    position: relative;
    height: 75%;
    margin-top: 10%;
    overflow: hidden;
    p {
      padding-right: 15px;
    }
  }
</style>

<template>
  <div style="height: 100%;">
    <div style="height: 100%;" class="rwd_janela_conteudo">
      <div style="height: 100%;">
        <h3>O Projeto</h3>
        <div class="pscroll">
          <h3>Bem-vindo!</h3>

          <p>O mosaico de “postais audiovisuais” do Rio que apresentamos aqui é criação coletiva dos grupos de alunos do curso Meu Rio Vale Um Webdoc.</p> 

          <p>Você está navegando pelo primeiro “webdoc”, ou “webdocumentário” realizado pelas Naves do Conhecimento, uma iniciativa da Secretaria de Ciência e Tecnologia do município do Rio de Janeiro junto com a Cria Projetos.</p>

          <p>O projeto Meu Rio Vale Um Webdoc é uma experiência inovadora no cruzamento entre o vídeo, a fotografia e a interatividade do ambiente digital.</p> 

          <p>O webdocumentário, ou “webdoc”, é um gênero de audiovisual que agrega a interatividade da internet às múltiplas possibilidades narrativas do documentário. A partir de uma plataforma web, o espectador interage com os conteúdos criando seu próprio percurso. Uma combinação das perspectivas criadas pelos autores, e das escolhas do espectador, faz com que o ato de assistir ao webdoc não seja passivo, mas sim uma experiência singular e dinâmica.</p>

          <p>A plataforma Meu Rio Vale um Webdoc traz cinco postais audiovisuais de cada um dos oito bairros, comunidades ou localidades que sediam as Naves do Conhecimento participantes do curso: Irajá, Madureira, Vila Aliança, Padre Miguel, Triagem, Nova Brasília, Penha e Santa Cruz.</p>

          <p>Sob este mote criativo, os alunos buscaram identificar e representar as principais paisagens e personagens - de ruas, praças, centros culturais e comerciais, a rodas de rap e de capoeira, compositores, religiosos e peladeiros.</p>

          <p>Reunimos os vídeos de produção coletiva da cada turma e fragmentos de exercícios, sobrevoos, planos de 360 graus, time lapses, entrevistas, clipes musicais, percursos e leituras poéticas, nesta plataforma onde cada Nave do Conhecimento é uma estação, um elo numa teia multimídia.</p>

          <p>Convidamos você a navegar por nossas Naves, explorar nossos postais audiovisuais, e interagir com eles, criando e enviando suas versões de webdoc. Vamos nessa?</p>

          <h3>O curso Meu Rio Vale um Webdoc</h3>

          <p>O curso acontece nas Naves e Praças do Conhecimento, espaços criados pela Secretaria Municipal de Ciência e Tecnologia do Rio de Janeiro. As oficinas são compostas de 10 aulas, totalizando 30 horas-aula.</p>

          <p>O curso apresenta ao aluno técnicas básicas do audiovisual e da fotografia, bem como tecnologias de imagem contemporâneas como câmera 360 graus e o vídeo aéreo com drone. Além do contato com equipamentos de ponta, o curso oferece caminhos acessíveis de produção, com a utilização de aplicativos web e redes sociais, câmeras compactas e smartphones.</p>

          <p>Ao longo do programa iniciado em julho de 2016, os alunos desenvolveram suas habilidades em exercícios individuais e em grupo, dentro de um fluxo que culminou com a prática colaborativa onde cada turma produziu o webdoc de sua Nave, e juntas montaram o grande mosaico da plataforma Meu Rio Vale Um Webdoc, transmitindo a mensagem de que a diversidade de olhares e perspectivas compartilhadas contribui para ampliar as percepções de cidade, e de mundo, de todos nós.</p>

          <h3>Lançamento da Plataforma e Premiação</h3>

          <p>No dia 15 de dezembro, às 10h, a Secretaria de Ciência e Tecnologia lança oficialmente a plataforma e celebra o encerramento do projeto em 2016, com entrega de certificados aos alunos e premiação dos destaques entre os produtos audiovisuais criados pelas turmas. O evento acontece no Imperator - Centro Cultural João Nogueira (R. Dias da Cruz, 170 – Meier), com presenças confirmadas do prefeito Eduardo Paes e do Secretário Especial de Ciência e Tecnologia, Franklin Coelho.</p> 

          <p>Participam do corpo de jurados:</p>

          <ul>
            <li>Franklin Dias Coelho (Secretário Especial de Ciência e Tecnologia)</li>
            <li>Maria Helena Cautiero Horta Jardim (Assessora Especial de Ciência e Tecnologia e Coordenadora do Projeto Naves do Conhecimento)</li>
            <li>Jazmin Kuan Veng (Diretora do VFX Rio)</li>
            <li>Karina Firme (Sócia e Diretora da Empresa Uview 360)</li>
            <li>Lorran Dias (Curador da Semana Cinerama de Cinema)</li>
            <li>Maria Aparecida Schumaher (Coordenadora Executiva da Rede de Desenvolvimento Humano - REDEH)</li>
            <li>Suely Avellar (Coordenadora de Arte-Educação do Projeto Portinari)</li>
            <li>Rosa Maria Araujo (Presidente da Fundação Museu da Imagem e do Som)</li>
          </ul>


          <p>Leia o regulamento da premiação <a href="https://trello-attachments.s3.amazonaws.com/579651e258529dcff443a82a/5858a049c0e7de9498b2684b/aa5926a62467630197b0ed07714ffd26/Regulamento_(MRVW).pdf" target="_blank" style="color: #06303c">aqui.</a></p>


        </div>
        

      </div>
    </div>
    <div class="rwd_janela_img">
      <img src="../img/icon_projeto.png" class="rwd_janela_icon">
    </div>
  </div>
</template>

<script>
  var $$$ = require('jquery')
  var marked = require('marked')
  var perfectScrollbar = require('perfect-scrollbar/jquery')($$$)

  module.exports = {
    replace: true,
    props: [],
    data: function(){
      return {
        
      }
    },
    methods: {

    },
    computed: {

    },
    attached: function () {
      $$$('.pscroll').perfectScrollbar({
        suppressScrollX: true
      });

      componentHandler.upgradeDom()
    },
    components: {

    },
    filters: {
      
    }
  }
</script>