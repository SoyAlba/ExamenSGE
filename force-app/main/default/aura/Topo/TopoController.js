({
    inicializar: function(component, event, helper) {
        helper.deseleccionar(component);
    },
    
    pulsar: function(component, event, helper) {
        var pulsadorSeleccionadoEvent = component.getEvent("pulsadorSeleccionado");
        var id = component.get("v.id");
        var color = component.get("v.color");
        var seleccionado = component.get("v.seleccionado");
        
        if (pulsadorSeleccionadoEvent) {
            pulsadorSeleccionadoEvent.setParams({
                "id": id,
                "color": color,
                "seleccionado": seleccionado
            });
            pulsadorSeleccionadoEvent.fire();
        } else {
            console.log("Error: pulsadorSeleccionadoEvent is null");
        }
    }
})
