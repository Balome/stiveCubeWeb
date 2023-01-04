<!DOCTYPE html>
<html>
    <head>
    <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8" />
    <title>Connexion Client</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="stive.css" /> 
  
    </head>
    
    <body>
     
        <div id="windowConnexion" class="form" 
             
             style="overflow:hidden; padding-bottom:35px; width:750px; border:1px solid #F00; background-color:#363636; font-size:22px; color:#FFF; font-family:'Georgia , sherif';">
            
            <div style="font-weight:bolder; color:#FFF; font-size:30px; padding-top:10px; font-style:italic; text-align:center;" class="boutonTitre ">Acces Compte Client</div>

            <hr style="width:650px; height:1.5px; border-color:#F00;">
            
            <div id="pageConnexion" class="form" style="font-size:26px; font-size:italic;">
                
                
                <div id="image_email" style="float:left; margin-top:25px; width:25px; margin-left:25px;"></div>
                
                <div id="emailLabel" style="margin-top:30px; float:left; margin-left:47px; font-style:italic;">Adresse Mail : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="email" id="email" size="35"/>
                
                </div>
                
                <div style="clear:both;"></div>
                        
                <div id="control_email"></div>
                
                <div style="clear:both;"></div>
                
                
                
                
                <div id="image_motdepasse" style="margin-top:25px; margin-left:25px; float:left; width:25px;"></div>
                
                <div id="passwordLabel" style="margin-top:30px; float:left; margin-left:47px; font-style:italic;">Mot de passe : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                     <input type="password" id="motdepasse"/>

                </div>
                 
                <div style="clear:both;"></div>
              
                <div id="control_motdepasse"></div>        
                
                <div style="clear:both;"></div>
                
                
                
                
                 <div style="margin-top:25px;font-style:italic; font-size:0.75em; margin-left:30px;">
                    
                     <input type="checkbox" id="showPassword"> Afficher le mot de passe
                                           
                </div>
                
                
                <div style="margin-top:25px; margin-top:25px; font-size:0.75em; margin-left:30px; font-style:italic;">
                    
                    <div>Vous avez oublié votre mot de passe : <span style="color:#C00;" id="oubli">Cliquez ici ...</span></div> 
                    
                </div>
                
                <div style="margin-top:25px; margin-top:25px; font-size:0.75em; margin-left:30px; font-style:italic;">
                    
                    <div>Vous n'avez pas de compte : <span style="color:#0F0;" id="creerCompteClient">Créer un compte ...</span></div> 
                    
                </div>
                
            
                <div id="submitConnexion" style="width:350px; margin-top:50px;">
    
                    <div id="cancelConnexion" class="bouton" style="width:150px; height:50px; padding-top:15px; text-align:center; float:left;">Fermer</div>

                    <div id="validerConnexion" class="bouton" style="margin-left:50px; width:150px; height:50px; padding-top:15px; text-align:center; float:left;">Valider</div>
          
                </div>
                
                <div style="clear:both;"></div>
                
    
            </div>
        
        </div>
        
        
        
        <!--/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*                                                                                                                                                                       */
        /*                                                    Fin du formulaire de connexion                                                                                     */
        /*                                                                                                                                                                       */
        /*                                                    Début du formulaire d'inscription                                                                                  */
        /*                                                                                                                                                                       */
        /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
        /*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------*/!-->
        
        
        
        
        <div id="windowCreerCompteClient" class="form" 
             
             style="display:none; overflow:hidden; padding-bottom:35px; width:900px; border:1px solid #F00; background-color:#363636; font-size:22px; color:#FFF; font-family:'Georgia , sherif';">
            
            <div class="boutonTitre" style="font-weight:bolder; color:#CCC; font-size:26px; padding-top:10px; font-style:italic; text-align:center;">Créer un Compte Client</div>

            <hr style="width:800px; height:1.5px; border-color:#F00;">
            
            <div id="pageCreation" class=""form" style="font-style:italic; font-size:26">
                
                <div id="image_nomClient" style="margin-top:25px; margin-left:25px; float:left; width:25px;"></div>
                
                <div id="labelNomClient" style="margin-top:30px; float:left; margin-left:157px;">Nom : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="nomClient" size="30"/>
                
                </div>   
                
                <div style="clear:both;"></div>
              
                <div id="control_nomClient"></div>        
                
                <div style="clear:both;"></div>
               
                
                
                
                 <div id="image_prenomClient" style="margin-top:25px; margin-left:25px; float:left; width:25px;"></div>
                
                <div id="labelPrenomClient" style="margin-top:30px; float:left; margin-left:129px;">Prénom : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="prenomClient" size="30"/>
                
                </div>
                
                <div style="clear:both;"></div>
                        
                <div id="control_prenomClient"></div>
                
                <div style="clear:both;"></div>
                
                
                
                <div id="image_adresseClient" style="margin-top:25px; margin-left:25px; float:left; width:25px;"></div>
                
                <div id="labelAdresseClient" style="margin-top:30px; float:left; margin-left:125px;">Adresse : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="adresseClient" size="50" />
                
                </div>
                
                <div style="clear:both;"></div>
                        
                <div id="control_adresseClient"></div>
                
                <div style="clear:both;"></div>
             
                
                
                 <div id="image_codePostalClient" style="margin-top:25px; margin-left:25px; float:left; width:25px; color:#0F0;">&#10004;</div>
               
                <div id="labelCodePostalClient" style="float:left; margin-top:30px; float:left; margin-left:88px;">Code Postal : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="codePostalClient" size="9"/>
                
                </div>
                
                
                
                <div id="labelVilleClient" style="float:left;  margin-left:22px; margin-top:30px;">Ville : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="villeClient" size="24"/>
                
                </div>
                
                <div style="clear:both;"></div>
                        
                
                
                
                <div id="image_emailClient" style="margin-top:25px; margin-left:25px; float:left; width:25px;"></div>
                
                <div id="labelEmailCreationClient" style="margin-top:30px; float:left; margin-left:78px;">Adresse mail : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="emailClient" size="35"/>
                
                </div>
                
                <div style="clear:both;"></div>
                        
                <div id="control_emailClient"></div>
                
                <div style="clear:both;"></div>
                
                
                
                
                <div id="image_motdepasseClient" style="margin-top:25px; margin-left:25px; float:left; width:25px;"></div>
                
                <div id="labelMotdepasseCreationClient" style="margin-top:30px; float:left; margin-left:78px;">Mot de passe : </div>

                <div  style="margin-left:6px; margin-top:23px; float:left; color:#000;">

                    <input type="text" id="motdepasseClient" size="22"/>
                
                </div>
                
                <div style="clear:both;"></div>
                        
                <div id="control_motdepasseClient"></div>
                
                <div style="clear:both;"></div>
                
                
                <div id="submitCreationClient" style="width:500px; margin-top:35px;">
    
                    <div id="retourConnexionClient" class="bouton" style="margin-top:25px; width:300px; height:50px; padding-top:15px; text-align:center; float:left;">Retour connexion</div>

                    <div id="validerCreationClient" class="bouton" style="margin-top:25px; margin-left:50px; width:150px; height:50px; padding-top:15px; text-align:center; float:left;">Valider</div>
          
                </div>
                
                <div style="clear:both;"></div>
                
            </div>
         
        </div>

                
        <script src="jquery-3.6.3.min.js" type="text/javascript"></script>

        <script src="connexion.js" type="text/javascript"></script>
        
        <script src="control.js" type="text/javascript"></script>
        
        
       

    </body>
</html>
