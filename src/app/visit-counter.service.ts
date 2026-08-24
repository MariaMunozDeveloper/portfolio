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
    const alreadyCounted = localStorage.getItem('visit_counted');

    const promise = getDoc(ref).then(async snap => {
      const currentCount = snap.exists() ? (snap.data()?.['count'] ?? 0) as number : 0;
      if (!snap.exists()) {
        await setDoc(ref, { count: 1 });
        localStorage.setItem('visit_counted', 'true');
        return 1;
      }

      if (!alreadyCounted) {
        await updateDoc(ref, { count: increment(1) });
        localStorage.setItem('visit_counted', 'true');
        return currentCount + 1;
      }

      return currentCount;
    });

    return from(promise);
  }
}
