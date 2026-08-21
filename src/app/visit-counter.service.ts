import { Injectable } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from '@angular/fire/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitCounterService {

  constructor(private firestore: Firestore) {}

  getAndIncrementVisits(): Observable<number> {
    const ref = doc(this.firestore, 'stats', 'visits');

    const promise = getDoc(ref).then(async snap => {
      if (!snap.exists()) {
        await setDoc(ref, { count: 1 });
        return 1;
      }
      await updateDoc(ref, { count: increment(1) });
      const updated = await getDoc(ref);
      return (updated.data()?. ['count'] ?? 0) as number;
    });

    return from(promise);
  }
}
