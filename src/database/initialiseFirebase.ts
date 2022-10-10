import { firebaseConfig } from "./firebaseConfig"
// Initialize Firebase
import { initializeApp } from "firebase/app"

export {
  getDatabase, set, ref, get, update, child, remove, onValue,
} from "firebase/database"
export const app = initializeApp(firebaseConfig)
