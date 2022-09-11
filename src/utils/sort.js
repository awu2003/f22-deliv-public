import { db } from './firebase';
import { getDatabase, ref, query, orderByChild, orderBy, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import q from "../App"

// Sort by name
export async function sortName(entries, user) {
    console.log(user?.uid);
    console.log(entries);
 }

 // Sort by link
export async function sortLink(e, entries, user) {
    console.log(user?.uid);
    console.log(entries);
}

// Filter by category
export async function filterCategory(user) {
    
}