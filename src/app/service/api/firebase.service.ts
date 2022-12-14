import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {DocumentReference} from "@angular/fire/compat/firestore/interfaces";
import {doc, setDoc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private store: AngularFirestore) {
  }

  subscribeToCollection<T>(collection: string, field: string): Observable<T[]> {
    return this.store.collection<T>(collection).valueChanges({idField: field});
  }

  saveInCollection<T>(collection: string, entity: T): Promise<DocumentReference<T>> {
    return this.store.collection<T>(collection).add(Object.assign({}, entity));
  }


  update<T>(collection: string, uid: string, newState: DocumentData): Promise<void> {
   return setDoc(
      doc(this.store.firestore, collection, uid),
      newState
    )
  }

  deleteInCollection(collection: string, uid: string): Promise<void> {
    return this.store.collection(collection).doc(uid).delete()
  }

}
