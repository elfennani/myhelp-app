import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Database } from "../types/supabase";

const supabaseUrl = "https://yzwbebpopklngiuurzca.supabase.co";
const client = createClient<Database>(
    supabaseUrl,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6d2JlYnBvcGtsbmdpdXVyemNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE4MzEwMTksImV4cCI6MTk5NzQwNzAxOX0.0WNsNFd9CskZzJVkBNWUqMUKPxLJsl9nHfYcTUazRao",
    {
        auth: { storage: AsyncStorage },
    }
);

export default client;
