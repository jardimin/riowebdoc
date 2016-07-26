<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width= device-width, initial-scale=1.0">
	<title>RIOWEBDOC</title>

	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.blue-amber.min.css" />
   	<link rel="stylesheet" href="css/rwd_style.css" />
	<script defer src="https://code.getmdl.io/1.1.3/material.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>

    <script type="text/javascript">
    $(document).ready(function(){
    $("a[rel=modal]").click( function(ev){
        ev.preventDefault();
 
        var id = $(this).attr("href");
 
        var alturaTela = $(document).height();
        var larguraTela = $(window).width();
     
        //colocando o fundo preto
        $('#mascara').css({'width':larguraTela,'height':alturaTela});
        $('#mascara').fadeIn(1000); 
        $('#mascara').fadeTo("slow",0.8);
 
        var left = ($(window).width() /2) - ( $(id).width() / 2 );
        var top = ($(window).height() / 2) - ( $(id).height() / 2 );
     
        $(id).css({'top':top,'left':left});
        $(id).show();   
    });
 
    $("#mascara").click( function(){
        $(this).hide();
        $(".window").hide();
    });
 
    $('.fechar').click(function(ev){
        ev.preventDefault();
        $("#mascara").hide();
        $(".window").hide();
    });
    });
    </script>
	 
</head>


<body>
    
	<!-- Div de montagem do layout e definições de header -->
    <div class=" mdl-layout mdl-js-layout mdl-layout--fixed-header">

        <!-- Inclui o header -->
        <?php include "includes/rwd_header.php"; ?>

        <!-- Inclui o drawer com o menu principal -->
        <?php include "includes/rwd_drawer.php"; ?>
       
        <main class="mdl-layout__content" >
        
         <div id="content"> <?php include "includes/rwd_content.php"; ?> </div>
        
         <!-- Inclui um espaçador para separar o footer -->
            

        </main>

       <!-- Inclui o footer -->
        <div class="mdl-layout-spacer"></div>

         <?php include "includes/rwd_footer.php"; ?>

	</div>

    <div class="window" id="janela1">
            <a href="#" class="fechar">X Fechar</a>
            <h4>Primeira janela modal</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam venenatis auctor tempus. Lorem ipsum dolor sit amet,</p>
            <p>Morbi dui lacus, placerat eget pretium vehicula, mollis id ligula. Nulla facilisi. </p>
            </div>

    <div id="mascara"></div> 
</body>
</html>