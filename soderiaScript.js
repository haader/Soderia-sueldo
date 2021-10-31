

function btn10(){
    
        
    /*-------------------------- DIAS LABORABLES EN EL MES --(dMES)------------------------------------ */

        var D10=26;
        

    /*-------------------------- DIAS FALTADOS EN EL MES --(fMES)------------------------------------ */


        var F10=document.getElementById("faltas10").innerHTML;
        console.log("la cantidad de faltas son="+F10);
        


    /*-------------------------- SUELDO MENSUAL --(MES)------------------------------------ */

        var sueldo=86195;
        

        var diasueldo= (sueldo/D10)

    /*-------------------------- SUELDO DIARIO --(sdMES)------------------------------------ */

        

        document.getElementById('sueldodia10').innerHTML=diasueldo;


        
    /*--------------------------DESCUENTOS POR FALTAR--(dfMES)------------------------------------ */

    document.getElementById('descuentos10').innerHTML=(F10*diasueldo);
    var descuentosporfaltar=(F10*diasueldo);

    /*--------------------------ADELANTOS-PEDIDOS (apMES)------------------------------------- */


    var adelantos=document.getElementById('adelanto10').innerHTML;;
    console.log("adelantos= "+adelantos);



    var dtotal=(Number(adelantos) + Number(descuentosporfaltar));


    /*----------------------------TOTAL A COBRAR (tcMES)---(SUELDO MENOS DESCUENTOS POR FALTAR)------------------------------------ */


    document.getElementById('cobro10').innerHTML=(Number(sueldo)- Number(dtotal));
    var sueldotc=(Number(sueldo)- Number(dtotal));;

    /*-------------------------------------ABONADO (aMES) Y REMANENTE-----(rMES)----------------------------------------------- */

    var abonado=document.getElementById('abonado10').innerHTML;

    document.getElementById('remanente10').innerHTML= (Number(sueldotc)-Number(abonado));



};

                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */



function btn11(){
            
        
        /*-------------------------- DIAS LABORABLES EN EL MES --(dMES)------------------------------------ */

        var D10=26;
        

    /*-------------------------- DIAS FALTADOS EN EL MES --(fMES)------------------------------------ */


        var F10=14;
        
        


    /*-------------------------- SUELDO MENSUAL --(MES)------------------------------------ */

        var sueldo=86195;
        

        var diasueldo= (sueldo/D10)

    /*-------------------------- SUELDO DIARIO --(sdMES)------------------------------------ */

        

        document.getElementById('sueldodia11').innerHTML=diasueldo;


        
    /*--------------------------DESCUENTOS POR FALTAR--(dfMES)------------------------------------ */

    document.getElementById('descuentos11').innerHTML=(F10*diasueldo);
    var descuentosporfaltar=(F10*diasueldo);

    /*--------------------------ADELANTOS-PEDIDOS (apMES)------------------------------------- */


    var adelantos=document.getElementById('adelanto11').value;



    var dtotal=(Number(adelantos) + Number(descuentosporfaltar));


    /*----------------------------TOTAL A COBRAR (tcMES)---(SUELDO MENOS DESCUENTOS POR FALTAR)------------------------------------ */


    document.getElementById('cobro11').innerHTML=(Number(sueldo)- Number(dtotal));
    var sueldotc=(Number(sueldo)- Number(dtotal));;

    /*-------------------------------------ABONADO (aMES) Y REMANENTE-----(rMES)----------------------------------------------- */

    var abonado=document.getElementById('abonado11').value

    document.getElementById('remanente11').innerHTML= (Number(sueldotc)-Number(abonado));


    


        

        
        /*----------------------------------------------------------------------------------------- */
    
};

                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */
                /*----------------------------------------------------------------------------------------- */

    
function btn12(){
        
                
        
        /*-------------------------- DIAS LABORABLES EN EL MES --(dMES)------------------------------------ */

        var D10=27;
        

    /*-------------------------- DIAS FALTADOS EN EL MES --(fMES)------------------------------------ */


        var F10=13;
        
        


    /*-------------------------- SUELDO MENSUAL --(MES)------------------------------------ */

        var sueldo=86195;
        

        var diasueldo= (sueldo/D10)

    /*-------------------------- SUELDO DIARIO --(sdMES)------------------------------------ */

        

        document.getElementById('sueldodia12').innerHTML=diasueldo;


        
    /*--------------------------DESCUENTOS POR FALTAR--(dfMES)------------------------------------ */

    document.getElementById('descuentos12').innerHTML=(F10*diasueldo);
    var descuentosporfaltar=(F10*diasueldo);

    /*--------------------------ADELANTOS-PEDIDOS (apMES)------------------------------------- */


    var adelantos=document.getElementById('adelanto12').value;



    var dtotal=(Number(adelantos) + Number(descuentosporfaltar));


    /*----------------------------TOTAL A COBRAR (tcMES)---(SUELDO MENOS DESCUENTOS POR FALTAR)------------------------------------ */


    document.getElementById('cobro12').innerHTML=(Number(sueldo)- Number(dtotal));
    var sueldotc=(Number(sueldo)- Number(dtotal));;

    /*-------------------------------------ABONADO (aMES) Y REMANENTE-----(rMES)----------------------------------------------- */

    var abonado=document.getElementById('abonado12').value

    document.getElementById('remanente12').innerHTML= (Number(sueldotc)-Number(abonado));


    


        

        
        /*----------------------------------------------------------------------------------------- */

    
    /*----------------------------------------------------------------------------------------- */
     /*
    document.getElementById('tcjunio').value=(Number(sueldo)- Number(dtotal));

    var sueldotc=document.getElementById('tcjunio').value;
    
    var dos=2;

    var aguinaldo = (Number(sueldotc)/ Number(dos));

    document.getElementById('tcjunio').value = (Number(aguinaldo) + Number (sueldotc));

    var sueldofinal=document.getElementById('tcjunio').value
    es el aguinaldo */
};                     


function btn1(){
        
                
        
    /*-------------------------- DIAS LABORABLES EN EL MES --(dMES)------------------------------------ */

    var D10=27;
    

/*-------------------------- DIAS FALTADOS EN EL MES --(fMES)------------------------------------ */


    var F10=13;
    
    


/*-------------------------- SUELDO MENSUAL --(MES)------------------------------------ */

    var sueldo=86195;
    

    var diasueldo= (sueldo/D10)

/*-------------------------- SUELDO DIARIO --(sdMES)------------------------------------ */

    

    document.getElementById('sueldodia1').innerHTML=diasueldo;


    
/*--------------------------DESCUENTOS POR FALTAR--(dfMES)------------------------------------ */

document.getElementById('descuentos1').innerHTML=(F10*diasueldo);
var descuentosporfaltar=(F10*diasueldo);

/*--------------------------ADELANTOS-PEDIDOS (apMES)------------------------------------- */


var adelantos=document.getElementById('adelanto1').value;



var dtotal=(Number(adelantos) + Number(descuentosporfaltar));


/*----------------------------TOTAL A COBRAR (tcMES)---(SUELDO MENOS DESCUENTOS POR FALTAR)------------------------------------ */


document.getElementById('cobro1').innerHTML=(Number(sueldo)- Number(dtotal));
var sueldotc=(Number(sueldo)- Number(dtotal));;

/*-------------------------------------ABONADO (aMES) Y REMANENTE-----(rMES)----------------------------------------------- */

var abonado=document.getElementById('abonado1').value

document.getElementById('remanente1').innerHTML= (Number(sueldotc)-Number(abonado));


};


function btn2(){
        
                
        
    /*-------------------------- DIAS LABORABLES EN EL MES --(dMES)------------------------------------ */

    var D20=27;
    

/*-------------------------- DIAS FALTADOS EN EL MES --(fMES)------------------------------------ */


    var F20=13;
    
    


/*-------------------------- SUELDO MENSUAL --(MES)------------------------------------ */

    var sueldo=86295;
    

    var diasueldo= (sueldo/D20)

/*-------------------------- SUELDO DIARIO --(sdMES)------------------------------------ */

    

    document.getElementById('sueldodia2').innerHTML=diasueldo;


    
/*--------------------------DESCUENTOS POR FALTAR--(dfMES)------------------------------------ */

document.getElementById('descuentos2').innerHTML=(F20*diasueldo);
var descuentosporfaltar=(F20*diasueldo);

/*--------------------------ADELANTOS-PEDIDOS (apMES)------------------------------------- */


var adelantos=document.getElementById('adelanto2').value;



var dtotal=(Number(adelantos) + Number(descuentosporfaltar));


/*----------------------------TOTAL A COBRAR (tcMES)---(SUELDO MENOS DESCUENTOS POR FALTAR)------------------------------------ */


document.getElementById('cobro2').innerHTML=(Number(sueldo)- Number(dtotal));
var sueldotc=(Number(sueldo)- Number(dtotal));;

/*-------------------------------------ABONADO (aMES) Y REMANENTE-----(rMES)----------------------------------------------- */

var abonado=document.getElementById('abonado2').value

document.getElementById('remanente2').innerHTML= (Number(sueldotc)-Number(abonado));


};