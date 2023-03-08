({
    iniciar: function(component, event, helper) {
        helper.mostrarResultadoFinal
    },
    iniciarJuego: function(component, event, helper) {
        helper.iniciarJuego(component);
    },
    detenerJuego: function(component, event, helper) {
        var intentos = component.get("v.contador");
        var mensaje = "Has acertado " + intentos + " veces";

        window.alert(mensaje);
    },
    manejarPulsadorSeleccionado: function(component, event, helper) {
        var Topo = event.getParam("Topo");
        
    }
})
