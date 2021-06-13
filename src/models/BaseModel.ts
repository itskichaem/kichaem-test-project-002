import Collections from 'src/constants/collections';
import { firestore, getTimestamp } from 'src/services/FirebaseService';

type Params<T> = {
  collection: Collections;
  data: T;
  id: string;
};

function create<T>(params: Params<T>) {
  const { collection, data, id } = params;

  return firestore
    .collection(collection)
    .doc(id)
    .set({
      ...data,
      id,
      dateCreated: getTimestamp(),
      dateUpdated: getTimestamp(),
    });
}

export default { create };
