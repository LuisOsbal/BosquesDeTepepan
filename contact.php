<?php
//	Envia datos al web service.
	//	Variable para enviar los datos al WS
	$method = 'GetContactos';
	//	Variables de entrada.
	$id_corporativo = '2';
	$idRegistro = '1';
	$nombre = Trim(stripslashes($_POST['name']));
	$tel = Trim(stripslashes($_POST['phone']));
	$email = Trim(stripslashes($_POST['email']));
	// $mobile = Trim(stripslashes($_POST['0']));
	$comentarios = Trim(stripslashes($_POST['message']));
	//	URL del web service
	$WebService="http://wsdl.a-l.com.mx/WebService1.asmx?wsdl";
	//	parametros de la llamada
	$parametros = array();
	$parametros['idCorporativo'] = $id_corporativo;
	$parametros['idTipoReg'] = $idRegistro;
	$parametros['nombre'] = $nombre;
	$parametros['direccion'] = '';
	$parametros['telefono'] = $tel;
	$parametros['email'] = $email;
	$parametros['telefonmovil'] = '';
	$parametros['comentarios'] = $comentarios;
	// Invocación al web service
	$WS = new SoapClient($WebService, $parametros);
	//	Recibe la respuesta dentro de un objeto.
	$result = $WS->$method($parametros);


//	Envia email
	$EmailFrom = "contacto@bosquesdetepepan.com.mx";
	$EmailTo = "contacto@bosquesdetepepan.com.mx";
	$Subject = "Contacto desde bosquesdetepepan.com.mx";
	$Name = Trim(stripslashes($_POST['name']));
	$Email = Trim(stripslashes($_POST['email']));
	$Phone = Trim(stripslashes($_POST['phone']));
	$Mobile = Trim(stripslashes($_POST['mobile']));
	$Message = Trim(stripslashes($_POST['message']));

	// validation
	$validationOK=true;
	if (!$validationOK) {
	  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
	  exit;
	}

	// prepare email body text
	$Body = "";
	$Body .= "name: ";
	$Body .= $Name;
	$Body .= "\n";
	$Body .= "email: ";
	$Body .= $Email;
	$Body .= "\n";
	$Body .= "phone: ";
	$Body .= $Phone;
	$Body .= "\n";
	$Body .= "mobile: ";
	$Body .= $Mobile;
	$Body .= "\n";
	$Body .= "message: ";
	$Body .= $Message;
	$Body .= "\n";

	// send email
	$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

	// redirect to success page
	if ($success){
	  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
	}
	// else{
	//   print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
	// }
?>