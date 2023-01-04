$(document).ready(function()
{

    $('input').addClass("background_input");

    $('input[type=text] , input[type=password] , input[type=email]').bind('keyup' , function()
    {
       superControl(false , $(this) , '#control_' + $(this).attr('id') , 'image_' + $(this).attr('id') , 'definie_saisie_continue');
               
    });

 
});



function superControl( validate , elt , type_Div , image_valider , saisie_continue )         // (elt) est un objet de champ de saisie de formulaire
{
    var substr_type_Div = '' ,
           
        validate_saisie ,
        
        validate_acceuil ,
        
        max_animate = 0;
       
       
    substr_type_Div = type_Div.substr(type_Div.indexOf('_') + 1);

    if ( type_Div.match(/motdepasse/) )      validate_saisie = controlRegExp2( $(elt).val() , 'mot de passe' );

    else if ( type_Div.match(/email/) )      validate_saisie = controlRegExp3( $(elt).val() , 'adresse mail' );

    else if ( substr_type_Div.match(/message/) )     validate_saisie = controlRegExp1( $(elt).val() , 'message' );

    else   validate_saisie = controlRegExp( $(elt).val() , substr_type_Div );

  

    validate_acceuil = true;

    if ( $(elt).val() === 'undefined'  || $(elt).val() === '' ) 
        
            validate_acceuil = false;
    
    
    if ( validate_saisie.control === false &&  validate === false  && validate_acceuil === true ) 
    {
        if ( typeof(saisie_continue) === 'undefined' )
        {
            $(type_Div).children().remove();

            $(type_Div).slideDown('slow').css({marginTop:'10px' , position:'relative'});

            $(type_Div).append('<div><marquee behavior="scroll" direction="down" scrollamount="2" height="33">' + validate_saisie.error_Message + '</marquee></div>');

            $(type_Div).addClass('control');

            max_animate = $('#windowCreerCompteClient').innerWidth();

            $(type_Div).animate({left: '150'},1400);

            $(type_Div).delay(8000).animate({left: max_animate},900);

            $(type_Div).animate({left: - max_animate}, 20);

            $(type_Div).slideUp('slow');
            
            
        }
        else
        {
            $('#' + image_valider).css({color:'#F00'}).html('&#10008;');
            
            valide = false;
        }
        
    }

    else if ( validate_acceuil === true && validate_saisie.control === true )  
    {
        $('#' + image_valider).css({color : "#0F0"}).html('&#10004;');
        
        valide = true;
   }

    else   
    {  
        $('#' + image_valider).css({color:'#F00' }).html('&#10008;'); 
        
        valide = false;
    
    }
    
    $('#' + image_valider).slideDown('slow');
    
    return valide;
}



    /*--------------------------------------------------------------------------*/



 function controlRegExp(elt,champ)  
 {
    var myreg = new RegExp("^.{4,50}$") ,
            
        error_Message;
    
     error_Message = 'Saisissez un ' + champ + ' entre 4 et 50 caractères ...';
     
     
    return {control : myreg.test( elt ) , error_Message : error_Message }; 
}


function controlRegExp1(elt,champ)  
{
    var error_Message ,
            
        control;
    
    error_Message = 'Saisissez un ' + champ + ' supéieur à  2 caractères ...';
    
   
    if ( elt.length <= 3)  control = false;  else control = true;
    
     return {control : control , error_Message : error_Message }; 
}

function controlRegExp2(elt,champ)
{
    var myreg = new RegExp("^.{6,30}$") ,
            
        error_Message;
       
    
    error_Message = 'Saisissez un ' + champ + ' entre 6 et 30 caractères';
    
    return {control : myreg.test( elt ) , error_Message : error_Message }; 

}


function controlRegExp3(elt,champ)  
{
    var myreg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i') ,
           
       error_Message;
   
    error_Message = 'Saisissez une ' + champ + ' valide ....';
    
    return {control : myreg.test( elt ) , error_Message : error_Message }; 

   
}



function verif_form_inscription(validate)  
{

    var valider1 ,
            
        valider2 ,
        
        valider3 ,
        
        valider4 ,
        
        valider5 ,
        
        valider6 ,
            
        nb_erreur = 0;

        valider1 = superControl(false , $('#nom') ,'#control_nom','image_nom');
            
    if (!valider1)  nb_erreur++;

    valider2 = superControl(false , $('#prenom') ,'#control_prenom','image_prenom');
    
    if (!valider2)  nb_erreur++;

    valider3 = superControl(false , $('#ville') ,'#control_ville','image_ville');
    
    if (!valider3)  nb_erreur++;

    valider4 = superControl(false , $('#email') ,'#control_email','image_email');
    
    if (!valider4)  nb_erreur++;

    valider6 = superControl(false , $('#motdepasse') , '#control_motdepasse','image_motdepasse');
    
    if (!valider6)  nb_erreur++;



    if ( valider1.valueOf() && valider2.valueOf() && valider3.valueOf() && valider4.valueOf() && valider6.valueOf())
    
         return true; 	      
    
    else  affiche_erreur(nb_erreur); 
    
    return false;
    
 }


function verif_form_connexion()  
{
    var nb_erreur = 0 ,
            
        valider1 ,
            
        valider2 ;

    valider1 = superControl(false , $('#email') , '#control_email','image_email');

    if (!valider1)  nb_erreur++;

    valider2 = superControl(false , $('#motdepasse') , '#control_motdepasse','image_motdepasse');

    if (!valider2)  nb_erreur++;



    if (valider1 && valider2)  return true;      else    affiche_erreur(nb_erreur); 
    
    return false;
}

function verif_form_contact()  
{
    var valider1 ,
            
        valider2 ,
        
        valider3 ,
        
        valider4 ,
        
        valider5 ,
            
        nb_erreur = 0;
    
    valider1 = superControl(false , $('#nom_contact') , '#control_nomClient' , 'image_nomClient' );
    
    if (!valider1)  nb_erreur++;

    valider2 = superControl(false , $('#prenomClient') , '#control_prenomClient' , 'image_prenomClient' );
    
    if (!valider2)  nb_erreur++;

    valider3 = superControl(false , $('#email_contact') , '#control_emailClient' , 'image_emailClient' );
    
    if (!valider3)  nb_erreur++;

    valider4 = superControl(false , $('#motdepasseClient') , '#control_motdepasseClient' , 'image_motdepasseClient' );
    
    if (!valider4)  nb_erreur++;

    valider5 = superControl(false , $('#adresseClient') , '#control_adresseClient' , 'image_adresseClient' );
    
    if (!valider5)  nb_erreur++;

    
    if (valider1 === true && valider2 == true && valider3 == true && valider4 == true && valider5 == true)  return true;      else     affiche_erreurClient(nb_erreur); 
    
    return false;
}

function verif_email(validate)  
{
    var valider1 = superControl(false , $('#email') , '#control_email','image_email');

    if (valider1)  return true;      else affiche_erreur_class(); 
    
    return false;
}



function affiche_erreur(erreur)
{
    $('#erreur_connexion')
	
	.text('Erreurs aux nombre de ' + erreur + ' : Veuillez corriger.')
	
    .css({color:'#C00', fontSize:'20px', textAlign:'center', display:'block'});
}


function affiche_erreurClient(erreur)
{
    $('#erreurCreationClient')
	
	.text('Erreurs aux nombre de ' + erreur + ' : Veuillez corriger.')
    
	.css({color:'#C00', fontSize:'20px', textAlign:'center', display:'block'});
}


function affiche_erreur_class()
{
    $('.erreur_connexion')
	
	.text("Veuillez corriger l'adresse mail.")
    
	.css({position:'relative', color:'#C00', fontSize:'20px', textAlign:'center', display:'block'});
}
