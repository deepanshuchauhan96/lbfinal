import { LightningElement, wire } from 'lwc';
import searchBook from '@salesforce/apex/searchBook.searchBook';
import {refreshApex} from '@salesforce/apex';

const COLUMS =[
    { label: 'Id', fieldName: 'Id', type: 'text' },
    { label: 'Book Name', fieldName: 'Book_Name__c', type: 'text' },
    { label: 'Author', fieldName: 'Author__c', type: 'text' },
    { label: 'Category', fieldName: 'Category__c', type: 'text' },
    { label: 'Status', fieldName: 'Book_Status__c', type: 'text' },
    { label: 'Member ID', fieldName: 'LastModifiedById', type: 'text' },
];
export default class SearchBook extends LightningElement {
    columns = COLUMS;
    @wire(searchBook)
    searchbooks;

    finalSearchBooks = [];
    searchBy = '';
    value = '';
    onClickId() {
        console.log(this.searchbooks);
        this.searchBy = 'Id';
    }
    onClickName() {
        this.searchBy = 'Book_Name__c';
    }
    onClickAuthor() {
        this.searchBy = 'Author__c';
    }

    onClickCategory() {
        this.searchBy = 'Category__c';
    }

    onClickMember(){
        this.searchBy = 'LastModifiedById';
    }

    onChangeInput(event) {
        this.value = event.target.value;
    }
    
    onSearch() {
        if (this.searchbooks.data) {
            console.log(this.value);
            console.log(this.searchBy);
            //change code
    refreshApex(this.searchbooks);
    //changecode  
            this.finalSearchBooks = this.searchbooks.data.filter(book => book[this.searchBy].toLowerCase().includes(this.value.toLowerCase()));
            console.log(this.searchbooks);
            console.log(this.finalSearchBooks);

        }
        
    }
    onClear(){
        this.finalSearchBooks = [];
    }

}