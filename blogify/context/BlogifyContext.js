import {useState,useEffect,createContext} from "react";
import { db } from "../firebase";
import {getDoc,getDocs,collection,doc,setDoc,onSnapshot,deleteDoc} from "firebase/firestore";

const BlogifyContext = createContext({});
const BlogifyProvider = ({ children }) => {
  const [posts, setposts] = useState([]);
  const getPosts = async () => {
    // This part helps us to fetch data from firebase. But the problem is that to see the updated results we have to refresh the page.
    // try {
    //   const ref = collection(db, "blogpost");
    //   const snap = await getDocs(ref);
    //   var postlist = [];
    //   snap.docs.map((e) => {
    //     // snap.docs.map((doc) => console.log(doc.data()));
    //     postlist.push(e.data());
    //   });
    //   setposts(postlist);
    // } catch (error) {
    //   setError(error.message);
    // }

    // This part helps us to fetch data from firebase and without refreshing the page we can easily see the updated results.
    try {
      const ref = collection(db, "blogpost");
      const unsubcribe = onSnapshot(ref, (snap) => {
        var postlist = [];
        snap.docs.map((e) => {
          postlist.push(e.data());
        });
        setposts(postlist);
      });
      return () => unsubcribe();
    } catch (error) {
      setError(error.message);
    }
  };
  //   This useEffect will automatically gives the data exact at the same time  when the page loads.
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <BlogifyContext.Provider value={posts}>{children}</BlogifyContext.Provider>
  );
};

export { BlogifyContext, BlogifyProvider };
