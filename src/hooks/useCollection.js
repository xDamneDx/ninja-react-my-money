import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ref = projectFirestore.collection(collection);

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
  }, [collection]);

  return { documents, error };
};
