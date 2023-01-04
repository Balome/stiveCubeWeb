/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

$(document).ready(function()
{
    
    var middleWidth = ( window.innerWidth - $("#imgDomaine").innerWidth() ) / 2;
    
    $("#imgDomaine").css({ marginLeft : middleWidth , marginTop: "0px" , position : "relative" });
    
    $("#menuPrincipal").css({ marginLeft: middleWidth , width : $("#imgDomaine").innerWidth() });
    
    
    
    // -- Deux calcul la marge droite, le formulaire de connexion, l'autre pour le formulaire d'inscription  -- //
    
     middleWidth = ( window.innerWidth - $("#windowConnexion").innerWidth() ) / 2; 
    
    var middleHeight = ( window.innerHeight - $("#windowConnexion").innerHeight() - $("#imgDomaine").innerHeight() - $("#menuPrincipal").innerHeight() ) / 2;
    
    $("#windowConnexion").css({ marginLeft : middleWidth , marginTop : middleHeight });
    
    middleWidth = ( $("#windowConnexion").innerWidth() - $("#submitConnexion").innerWidth()) / 2; 
        
    $("#submitConnexion").css({ marginLeft : middleWidth });
    
    
    
    $("#menuArticlesDomaine").bind("mouseenter" , function()
    {
        $(this).addClass("bouton");
    });
    
     $("#menuArticlesDomaine").bind("mouseleave" , function()
    {
        $(this).removeClass("bouton");
    });
    
    
    $("#menuArticlesFamille").bind("mouseenter" , function()
    {
        $(this).addClass("bouton");
    });
    
     $("#menuArticlesFamille").bind("mouseleave" , function()
    {
        $(this).removeClass("bouton");
    });
    
    
    $("#voirSonProfil").bind("mouseenter" , function()
    {
        $(this).addClass("bouton");
    });
    
     $("#voirSonProfil").bind("mouseleave" , function()
    {
        $(this).removeClass("bouton");
    });
      
    $("#panierClient").bind("mouseenter" , function()
    {               
        $(this).addClass("bouton");
    });
    
     $("#panierClient").bind("mouseleave" , function()
     {
        $(this).removeClass("bouton");
     });
    
     $("#seConnecter").bind("mouseenter" , function()
    {
        $(this).addClass("bouton");
        
        $("#windowConnexion").slideDown("slow").css("overflow" , "hidden");
        
        $("#windowCreerCompteClient").slideUp("slow").css("overflow" , "auto");
        
    });
    
    $("#cancelConnexion").bind("click" , function() 
    {
         $("#windowConnexion").slideUp("slow").css("overflow" , "auto");
         
         $("#windowCreerCompteClient").slideUp("slow").css("overflow" , "auto");
         
         $("#seConnecter").removeClass("bouton");
    });
    
   
    
  
    middleWidth = ( window.innerWidth - $("#windowCreerCompteClient").innerWidth() ) / 2; 
    
    middleHeight = ( window.innerHeight - $("#windowCreerCompteClient").innerHeight() - $("#imgDomaine").innerHeight() ) / 2; 
    
    $("#windowCreerCompteClient").css({ marginLeft : middleWidth , marginTop : middleHeight });
    
    middleWidth = ( $("#windowCreerCompteClient").innerWidth() - $("#submitCreationClient").innerWidth()) / 2; 
        
    $("#submitCreationClient").css({ marginLeft : middleWidth });
    
    // -- Fin mise en page marge -- //
    
    
    
    
   
    
    
    $("#validerConnexion").bind("click", function() 
    {  
                  
        var a = superControl(false , $("#email") , "#control_email" , "image_email");
           
        var b = superControl(false , $("#motdepasse") , "#control_motdepasse" , "image_motdepasse");
    
        verifConnexion( $("#email").val() );
        
        verfifConnexion( $("#motdepasse").val() );
        
        $("#windowCreerCompteClient").css("overflow" , "hidden");
          
        
    }); 
    
    $("#oubli").mouseenter( function() { $(this).css({ cursor : "pointer" , color : "#0F0" , fontWeight : "bolder" }); });
    
    $("#oubli").mouseleave( function() { $(this).css({ cursor : "inherit" ,  color : "#F00" , fontWeight : "normal" }); });
    
    $("#creerCompteClient").mouseenter( function() { $(this).css({ cursor : "pointer" , color : "#6B1" , fontWeight : "bolder" }); });
    
    $("#creerCompteClient").mouseleave( function() { $(this).css({ cursor : "inherit" , color : "#0F0"  , fontWeight : "normal" }); });
    
    $( "#showPassword" ).change(function() {
        
        if ( $("#showPassword").is(":checked") == true )  $("#motdepasse").attr("type", "text");  else $("#motdepasse").attr("type" , "password");
   
    }).change();
    
    
    $("#creerCompteClient").bind("click" , function()
    {
        $("#windowConnexion").slideUp("slow");
        
        $("#windowCreerCompteClient").slideDown("slow");
        
    });
    
    $("#retourConnexionClient").bind("click" , function()
    {
        $("#windowCreerCompteClient").slideUp("slow");
         
        $("#windowConnexion").slideDown("slow");
        
    });
    
    
    $("#validerCreationClient").bind("click", function()
    {
        var nb_erreur = 0;
        
        var a = superControl(false , $("#nomClient") , "#control_nomClient" , "image_nomClient");
        
        if ( a == "false" ) nb_erreur++;
        
        var b = superControl(false , $("#prenomClient") , "#control_prenomClient" , "image_prenomClient");
        
        if ( b == "false" ) nb_erreur++;
        
        var c = superControl(false , $("#adresseClient") , "#control_adresseClient" , "image_adresseClient");
        
        if ( c == "false" ) nb_erreur++;
        
        var d = superControl(false , $("#emailClient") , "#control_emailClient" , "image_emailClient");
        
        if ( d == "false" ) nb_erreur++;
        
        var e = superControl(false , $("#motdepasseClient") , "#control_motdepasseClient" , "image_motdepasseClient");
        
        if ( e == "false" ) nb_erreur++;
        
        
        if ( nb_erreur > 0 )
        {
            $("#windowCreerCompteClient").css("overflow","hidden");
            
            $("#nb_erreur_connexion").text("Erreurs aux nombre de " + nb_erreur + " : Veuillez corriger.").css({color:"#C00", fontSize:"20px", textAlign:"center"}).slideDown("slow");
        }
        
    });
    
    
 
    
    
    // -- Connexion établie et codée avec jQuery qui retourne vrai ou faux  qui est la réponse d'une API REST codée en C# -- //
    
    function verifConnexion(pseudo)
    {
        $.ajax(
        {
            type: "GET" ,

            url: "https://localhost:7107/Calcul/jeuDuCaillou",
            
            data : { joueur : pseudo } ,

            dataType: "json" ,

            success: function (resultat)
            {
                //$("#motdepasse").val( resultat.jeuMachine + "--" + resultat.jeuPersonne + "--" + resultat.gagnant);

            } ,

            error: function () 
            {  
                // $("#motdepasse").val("erreur") + "  " + pseudo  
            }
        });

    }
    
});


