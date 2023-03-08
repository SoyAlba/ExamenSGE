({
    iniciar: function(component, event, helper) {
        helper.mostrarResultadoFinal
    },
    iniciarJuego: function(component, event, helper) {
        helper.iniciarJuego(component);
    },
    detenerJuego: function(component, event, helper) {
        helper.detenerJuego(component);
    },
    manejarPulsadorSeleccionado: function(component, event, helper) {
        var Topo = event.getParam("Topo");
        helper.manejarPulsadorSeleccionado(Topo);
    }
})
