({
    seleccionar: function(component) {
        component.set("v.color", "blue");
        component.set("v.seleccionado", true);
    },
    deseleccionar: function(component) {
        component.set("v.color", "white");
        component.set("v.seleccionado", false);
    }
})
