/* eslint-disable react/prop-types */

import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  FormTextArea,
  Button,
  Comment,
  Form,
} from 'semantic-ui-react';

export default function InfoUi({ trassa }) {
  return (
    <div className="card mb-3 shadow-sm" style={{ width: '1500px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`https://localhost:3000/${trassa.image}`}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            className="rounded-start"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-truncate">{trassa.title}</h5>
            <p className="card-text text-muted">{trassa.address}</p>
            <p className="card-text">{trassa.description}</p>
            <p className="card-text text-muted">{trassa.coordinate}</p>
            <div className="justify-content-between"></div>
          </div>
          <div style={{ marginLeft: '20px' }}>
            <CommentGroup>
              <Comment>
                <CommentAvatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"
                />
                <CommentContent>
                  <CommentAuthor>Joe Henderson</CommentAuthor>
                  <CommentMetadata>
                    <div>1 day ago</div>
                  </CommentMetadata>
                  <CommentText>
                    <p>
                      The hours, minutes and seconds stand as visible reminders that your
                      effort put them all there.
                    </p>
                    <p>
                      Preserve until your next run, when the watch lets you see how
                      Impermanent your efforts are.
                    </p>
                  </CommentText>
                  <CommentActions>
                    <CommentAction>Reply</CommentAction>
                  </CommentActions>
                </CommentContent>
              </Comment>

              <Comment>
                <CommentAvatar
                  as="a"
                  src="https://react.semantic-ui.com/images/avatar/small/christian.jpg"
                />
                <CommentContent>
                  <CommentAuthor>Christian Rocha</CommentAuthor>
                  <CommentMetadata>
                    <div>2 days ago</div>
                  </CommentMetadata>
                  <CommentText>I re-tweeted this.</CommentText>
                  <CommentActions>
                    <CommentAction>Reply</CommentAction>
                  </CommentActions>
                </CommentContent>
              </Comment>

              <Form reply>
                <FormTextArea />
                <Button content="Add Comment" labelPosition="left" icon="edit" primary />
              </Form>
            </CommentGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
