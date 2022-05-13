import { useEffect, useRef, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  // Fixing infinite loop (array) in useEffect:
  const query = useRef(_query).current;

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

    if (query) {
      ref = ref.where(...query);
    }

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // Update state:
        setDocuments(results);
        setError(null);
      },
      (error) => setError(error.message)
    );

    // Unsubscribe on unmount:
    return () => unsubscribe();
  }, [collection, query]);

  return { documents, error };
};
