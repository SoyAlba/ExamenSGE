({
    generarNumeroAleatorio: function(component) {
        var action = component.get("c.generarNumeroAleatorio");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var numeroAleatorio = response.getReturnValue();
                this.mostrarPulsadorAleatorio(component, numeroAleatorio);
            }
            else {
                console.log("Error al obtener el número aleatorio");
            }
        });
        $A.enqueueAction(action);
    },
    mostrarPulsadorAleatorio: function(component, numero) {
        var pulsadores = component.get("v.pulsadores");
        pulsadores[numero].color = "blue";
        pulsadores[numero].seleccionado = true;
        component.set("v.pulsadores", pulsadores);        
        //solo se muestra el topo corecto 3 segundos y luego se vuelve a ocultar
        window.setTimeout(function() {
            pulsadores[numero].color = "white";
            component.set("v.pulsadores", pulsadores);
        }
        , 500);
        
    },
    mostrarResultado: function(component, mensaje) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": mensaje,
            "type": mensaje == "CORRECTO" ? "success" : "error"
        });
        toastEvent.fire();
    },
    mostrarResultadoFinal: function(component) {
        var contador = component.get("v.contador");
        var mensaje = "Has acertado " + contador + " veces";
        var title = contador == 4 ? "¡FELICIDADES!" : "Lo siento...";
        var type = contador == 4 ? "success" : "error";
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": title,
            "message": mensaje,
            "type": type
        });
        toastEvent.fire();
    },
    iniciarJuego: function(component) {
        component.set("v.jugando", true);
        var pulsadores = component.get("v.pulsadores");
        pulsadores.forEach(function(Topo) {
            Topo.color = "white";
            Topo.seleccionado = false;
        });
        component.set("v.pulsadores", pulsadores);
        component.set("v.contador", 0);
        this.generarNumeroAleatorio(component);
    },
    detenerJuego : function(component, event, helper) {
        var pulsadores = component.get("v.pulsadores");
        for (var i = 0; i < pulsadores.length; i++) {
            pulsadores[i].color = "white";
            pulsadores[i].seleccionado = false;
        }
        component.set("v.pulsadores", pulsadores);
        component.set("v.contador", 0);
        this.mostrarResultadoFinal(component);
    },
    manejarPulsadorSeleccionado: function(component, Topo) {
        if (Topo.seleccionado = true) {
            Topo.seleccionado = true;
            Topo.color = "green";
            component.set("v.contador", component.get("v.contador") + 1);
            this.mostrarResultado(component, "CORRECTO");
            this.generarNumeroAleatorio(component);
        }
        else {
            this.mostrarResultado(component, "INCORRECTO");
            component.set("v.contador", 0);
        }
    }
})
