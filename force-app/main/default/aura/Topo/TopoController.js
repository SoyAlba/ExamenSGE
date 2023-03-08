({
    inicializar: function(component, event, helper) {
        helper.deseleccionar(component);
    },
    
    pulsar: function(component, event, helper) {
        var pulsadorSeleccionadoEvent = component.getEvent("pulsadorSeleccionado");
        var id = component.get("v.id");
        var color = component.get("v.color");
        
        if (pulsadorSeleccionadoEvent) {
            pulsadorSeleccionadoEvent.setParams({
                "id": id,
                "color": color
            });
            pulsadorSeleccionadoEvent.fire();
        } else {
            console.log("Error: pulsadorSeleccionadoEvent is null");
        }
    }
})
