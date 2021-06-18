import React, { useEffect, useState, useCallback } from "react";
import graphQL from "./db";
import githubQuery from "./Query";
import RepoInfo from "./RepoInfo";

const App = () => {
  const [name, setName] = useState();
  const [repoList, setRepoList] = useState();

  //look at ./Query to find how we write graphQL query
  const fetchData = useCallback(() => {
    //useCallback is used to memorize the data we get from this fetch call
    //and we can optimize how and when items are rendered
    fetch(graphQL.baseURL, {
      method: "POST",
      headers: graphQL.headers,
      body: JSON.stringify(githubQuery),
    })
      .then((res) => res.json())
      .then((data) => {
        const { name, repositories } = data.data.viewer;
        const repos = data.data.search.nodes;
        setName(name);
        setRepoList(repos);
        console.log(repos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="container mt-5">
      <h1 className="text-primary">
        <i className="bi bi-diagram-2-fill"></i>Repos
      </h1>
      <p>
        Hey {name} welcome to your Repo app .<br />
        Its a place where get to see all your repositories with detailed info
      </p>

      <h3 className="text-danger">Here are your Repos {name}</h3>
      {repoList && (
        <ul className="lsit-group list-group-flush">
          {repoList.map((repo) => {
            return <RepoInfo key={repo.id} repo={repo} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default App;
