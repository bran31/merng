import React, { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Grid, Transition } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POST_QUERY } from "../utils/graphql";

function Home() {
  const { user } = useContext(AuthContext);
  const { loading, data } = useQuery(FETCH_POST_QUERY);

  return (
    <Grid columns={3} className={loading ? "loading" : ""}>
      <Grid.Row className="page-title">
        <h1>Recent Posts</h1>
      </Grid.Row>
      <Grid.Row>
        {user && (
          <Grid.Column>
            <PostForm />
          </Grid.Column>
        )}
        {loading ? (
          <h1>Loading posts..</h1>
        ) : (
          <Transition.Group>
            {data.getPosts &&
              data.getPosts.map((getPost) => (
                <Grid.Column key={getPost.id} style={{ marginBottom: 20 }}>
                  <PostCard post={getPost} />
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
}

export default Home;
