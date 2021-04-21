import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";

import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

function PostCard({
  post: { body, id, username, createdAt, likeCount, commentCount, likes },
}) {
  function likePost() {
    console.log("Like Post");
  }
  const { user } = useContext(AuthContext);
  console.log(id);
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header as={Link} to={`/post/${id}`}>
          {username}
        </Card.Header>
        <Card.Meta>{moment(createdAt).fromNow(true)}</Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton user={user} post={{ id, likes, likeCount }} />
        <Button
          as="div"
          labelPosition="right"
          as={Link}
          to={`/post/${id}`}
          size="mini">
          <Button basic color="blue">
            <Icon name="comments outline" />
          </Button>
          <Label as="a" basic color="blue" pointing="left" size="mini">
            {commentCount}
          </Label>
        </Button>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
    </Card>
  );
}

export default PostCard;
