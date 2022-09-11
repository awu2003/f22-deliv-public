import { db } from './firebase';
import { where, getDatabase, ref, query, orderByChild, orderBy, collection } from "firebase/firestore";


//Comparer Function https://www.c-sharpcorner.com/UploadFile/fc34aa/sort-json-object-array-based-on-a-key-attribute-in-javascrip/    
function GetSortOrderUp(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}  

function GetSortOrderDown(prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}  

// Sort by name
export async function sortName(entries, direction) {
    console.log(entries);
    console.log(direction);
    if (direction) {
        entries.sort(GetSortOrderUp("name"));
    } else {
        entries.sort(GetSortOrderDown("name"));
    }
 }

 // Sort by link
export async function sortLink(entries, direction) {
    console.log(entries);
    console.log(direction);
    if (direction) {
        entries.sort(GetSortOrderUp("link"));
    } else {
        entries.sort(GetSortOrderDown("link"));
    }
}

// Filter by category
export async function filterCategory(user) {
    
}