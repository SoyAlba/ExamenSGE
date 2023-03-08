public with sharing class RandomNumController {
    @AuraEnabled
    public static Integer generarNumeroAleatorio() {
        return (Integer)Math.floor(Math.random() * 8);
    }
}
