//#region Class
class Notification {

    constructor(){
        this.est_echec = true;
        this.donnee = {};
        this.message = 'Connection lost with server.';
    }

}
//#endregion

// -- Display or not the loading page -- //
function displayLoadingPage(afficher = false, id_bouton = null) {
	if (afficher) {
		// -- Actualiser le bouton -- //
		if (id_bouton != null) {
			$('#' + id_bouton).button('loading');
		}
		// -- Affichier le progress bar -- //
		NProgress.start();
		// -- Afficher le frame de chargelent -- //
		$('#frame_chargement').show();
	} else {
		// -- Actualiser le bouton -- //
		if (id_bouton != null) {
			$('#' + id_bouton).button('reset');
		}
		// -- Finaliser le chargement du progress bar -- //
		NProgress.done();
		// -- Cacher le frae de chargement -- //
		$('#frame_chargement').hide();
	}
}

// -- Load ichack plugins -- //
function loadICheck(color, attribute = 'flat-iCheck') {
	try {
        $('input[type="checkbox"].' + attribute + ', input[type="radio"].' + attribute).iCheck({
            checkboxClass: 'icheckbox_flat-' + color,
            radioClass: 'iradio_flat-' + color
        });
    } catch (e) {
        consoleOut(e.message);
    }
}

// -- Message box de notification -- //
function messageBox(notification = new Notification()) {

	// -- Mise à jour de la taille -- //
	$('#modal_message_taille').removeClass('modal-dialog');
	$('#modal_message_taille').addClass('modal-dialog modal-sm');
	// -- Définir l'entête -- //
	$('#modal_message_titre').html('<i class="fa fa-info text-' + ((notification.est_echec != null) ? (notification.est_echec) ? 'danger'
			                                                                                                                    : 'success'
		                                                                                            : 'info') + '"></i> Information');
	// -- Definir le message -- //
	$('#modal_message_text').html(notification.message);
	// -- Afficher -- //
	$('#modal_message').modal('show');

	// -- Ne pas fermer si la valeur est -1 -- //
	if (appModule.appSettings.messageBoxVisibilityDelay > 0) {
		// -- Supprimer l'alert après un temps défini -- //
		setTimeout(
			function () {
				// -- Fermer le modal -- //
				$('#modal_message').modal('hide');
			},
			appModule.appSettings.messageBoxVisibilityDelay
		);
	}

}

// -- On loading page -- //
$(
    function(){

        //#region Grame loading page
        $('<div id="frame_chargement"/>')
        .css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: $(window).height() + 'px',
            opacity: 0.4,
            zIndex: 999999,
            cursor: 'wait',
            background: 'lightgray url(../images/gif/loading_50px.gif) no-repeat center'
        })
        .hide()
        .appendTo('body');
        //#endregion
        var a = appModule.appSettings();
        
        console.log(
            JSON.stringify(a)
        );

        // appModule.consoleOutStringify(appModule.appSettings());

        //#region iCheck
        loadICheck('green');
        //#endregion
    }
);