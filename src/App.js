import axios from "axios";
import React from "react";
import Card from "./Card";
import './App.css'

const baseURL = "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed";

export default function App() {
  const [post, setPost] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      setIsLoading(true);
    });
  }, []);

  if (!post) return null;

  return (
    <div>
      
       {isLoading ? post.map((p) => (
        <a href={p.link} target="_blank"><Card pos={p} key={p.id}></Card></a>
      )) 
    :(<h1>Is Loading...</h1>) }
    </div>
  );
}