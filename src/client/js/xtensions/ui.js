function general(){  

 $(document).ready(function(){
 	 	// funcion para validar fecha 
     $('.datepicker').datepicker();
     //funcion validar fecha minima
     $('.datepicker1').datepicker({
     	minDate: '1/1/2016',
     	});
     //funcion validar fecha maxima
     $('.datepicker2').datepicker({
    	maxDate: '1/1/2017',
     });
     //validar fecha maxima y minima
     $('.datepicker3').datepicker({
     	 minDate: '1/1/2016',
     	maxDate: '1/1/2016',
     });

 /* mascara para celular*/
$('.mask-tel').mask('(000)000-0000');
/*mascara para fecha*/
$('.mask-fecha').mask('00/00/0000');
/*mascar celular*/
$('.mask-cel').mask('(+00) (000) 000-0000');
/*mascara para  pesos*/
$('.mask-pesos').mask('$ 0.000.000.000');
/*mascara fecha y hora*/
$('.mask-fecha-hora').mask('00/00/0000    00:00');
/*mascara para tarjeta de credito*/
$('.mask-creditcard').mask('0000 0000 0000 0000');
/*mascara direccion ip*/
$('.mask-ip').mask('0ZZ.0ZZ.0ZZ.0ZZ', {translation: {'Z': {pattern: /[0-9]/, optional: true}}});
/*mascara date ISO*/
$('.mask-dateISO').mask('0000-00-00');
    })
  }
