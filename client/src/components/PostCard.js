import React from "react";
import { Link } from "react-router-dom";

import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import moment from "moment";

function PostCard({
  post: { body, id, username, createdAt, likeCount, commentCount, likes },
}) {
  function likePost() {
    console.log("Like Post");
  }

  function commentOnPost() {
    console.log("Comment on post");
  }
  return (
    <Card fluid style={{ height: 250 }}>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/molly.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="red" basic>
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic color="red" pointing="left">
            {likeCount}
          </Label>
        </Button>
        <Button as="div" labelPosition="right" onClick={commentOnPost}>
          <Button basic color="blue">
            <Icon name="comments outline" />
            Comments
          </Button>
          <Label as="a" basic color="blue" pointing="left">
            {commentCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
