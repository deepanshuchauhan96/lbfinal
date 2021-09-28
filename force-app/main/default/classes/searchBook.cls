public with sharing class searchBook {
    @AuraEnabled(cacheable=true)
    public static List <Book__c> searchBook() {
        return [
        SELECT id, Book_Name__c, Book_Status__c, Author__c, Category__c, Returned_Date__c, LastModifiedById
        FROM Book__c
        WITH SECURITY_ENFORCED
        ORDER BY Name
        ];

    }
}
