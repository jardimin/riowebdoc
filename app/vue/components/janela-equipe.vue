<style lang="scss">
  .equipe_scroll {
    width: 90%;
    position: relative;
    height: 400px;
    margin-top: 10%;
    overflow: hidden;
  }
</style>

<template>
  <div>
    <div class="rwd_janela_conteudo">
      <h3>Equipe</h3>
      <div class="equipe_scroll">
        <p><b>Prefeito da Cidade do Rio de Janeiro</b><br>Eduardo Paes</p> 

        <p><b>Secretário Especial de Ciência e Tecnologia da Cidade do Rio de Janeiro </b><br>Franklin Dias Coelho</p> 

        <p><b>Assessora Especial e Coordenadora do Projeto das Naves do Conhecimento</b><br>Maria Helena Cautiero Horta Jardim</p> 

        <p><b>Equipe de Conteúdo Projeto Naves do Conhecimento</b><br>Miedja Okada Braga<br>Thalita Mendes Crespo<br>Luiza Valle Souza<br>Dayane Araújo Gonçalves</p> 

        <p><b>Equipe de Criação da Secretaria Especial de Ciência e Tecnologia</b><br>Marcelo de Souza<br>Kelly Schumacher<br>Wagner Calaes<br>Robson da Silva</p> 

        <p><b>Equipe de Tecnologia da Secretaria Especial de Ciência e Tecnologia</b><br>Augusto Carneiro <br>Blanvi Barbosa<br>Felipe Santos</p> 

        <p><b>Rede de Desenvolvimento Humano – Redeh</b><br>Coordenadora Executiva <br>Maria Aparecida Schumaher</p> 

        <p><b>Instituto de Desenvolvimento e Ação Comunitária – Idaco</b><br>Coordenador Executivo: Jean Charles Catalan </p> 

        <p><b>Coordenadores das Naves do Conhecimento</b><br>Carlos Eduardo Scorzello<br>Norton Olegário<br>Marise Fonseca<br>Eliana Elias<br>Vitor Adriano Zavarize<br>Charles Siqueira<br>Roberto Luiz Pereira de Souza</p> 

        <h3>EQUIPE MEU RIO VALE UM WEBDOC</h3>

        <p><b>Produtor executivo do curso e plataforma e professor de fotografia e câmera</b><br>Felipe Varanda<br><i>Fotógrafo e jornalista (UFRJ), pós-graduado em Fotografia como Instrumento de Estudos nas Ciências Sociais (UCAM-RJ), integrou as equipes de fotografia do Jornal do Brasil, Folha de São Paulo e das principais revistas nacionais.  Ministra oficinas de fotografia e vídeo em projetos de jornalismo cidadão, e desenvolve projetos como artista visual interagindo com o território urbano.</i></p> 

        <p><b>Direção criativa, professora de roteiro</b><br>Mayra Jucá<br><i>Jornalista (UFRJ), mestre em Bens Culturais e Projetos Sociais pelo CPDOC/FGV, consultora em comunicação para o terceiro setor e gestão de projetos. Diretora e roteirista de vídeos de ficção e documentários, roteirista de institucionais e videoclipes. Cria e coordena projetos de mídia e internet colaborativa.</i></p> 

        <p><b>Designer de interatividade da plataforma e professor de webdoc</b><br>André Paz<br><i>Professor de Engenharia de Produção com ênfase em cultura na Unirio, realiza pesquisa de pós doutorado em narrativas interativas. Coordena o Bug404, rede de pesquisa e produção de webdocumentários.</i></p> 

        <p><b>Editor de audiovisual e professor de edição</b><br>Silvo Arnault<br><i>Editor com mais de 10 anos de experiência, trabalhou em diversos projetos de cinema e televisão, e com diretores como Silvio Tendler.</i></p> 

        <p><b>Assistente de edição e trilha sonora</b><br>Renato Oliveira</p> 

        <p><b>Assistente de edição</b><br>Clarisse Hammerli</p> 

        <p><b>Comunicação e mídias sociais</b><br>George A. de Araújo</p>

        <p><b>Monitora</b><br>Márcia Verenna</p> 

        <p><b>Fotografia e câmera (monitoria)</b><br>Leonardo Coelho</p> 

        <p><b>Câmera e piloto de drone (monitoria)</b><br>Ramon Gonçalves e Kadeh Ferreira</p> 

        <p><b>Projeto Gráfico</b><br>Thiago Venturotti</p> 

        <p><b>Desenvolvimento/programação da plataforma</b><br><a href="//jardimdigital.com.br" style="text-decoration: none; color: black;">Jardim Digital</a></p> 

        </div>

    </div>
    <div class="rwd_janela_img">
      <img src="../img/icon_equipe.png" class="rwd_janela_icon">
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
      $$$('.equipe_scroll').perfectScrollbar({
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