// VisitorCounter.jsx
import { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

export const VisitorCount = () => {
    const [count, setCount] = useState(undefined);

    useEffect(() => {
        try {
            const docRef = doc(db, "portfolio", "visitorCount");

            // Real-time listener
            const unsub = onSnapshot(docRef, (docSnap) => {
                if (docSnap.exists()) {
                    setCount(docSnap.data().count);
                }
            });

            // Increment on first visit per session
            const hasVisited = sessionStorage.getItem("hasVisited");
            if (!hasVisited) {
                (async () => {
                    const snap = await getDoc(docRef);
                    if (snap.exists()) {
                        await updateDoc(docRef, { count: snap.data().count + 1 });
                    } else {
                        await setDoc(docRef, { count: 1 });
                    }
                    sessionStorage.setItem("hasVisited", "true");
                })();
            }

            return () => unsub();
        } catch (error) {
            console.error("Error fetching/updating visitor count:", error);
            setCount(0);
        }
    }, []);

    return <div className="text-purple-950 dark:text-white">👀 {count}</div>;
}
