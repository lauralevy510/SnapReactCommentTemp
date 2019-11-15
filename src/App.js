import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

function App() {
  const initialComments = [
    {
      author:"Shawn Spencer",
      text:"I've heard it both ways dadio!"
    },
    {
      author:"Burton Guster",
      text:"You hear about Pluto? That's messed up dawg1"
    }
  ];

  const CommentBox = props => {
    const [comments, setComments] = React.useState(initialComments);

    const handleCommentSubmit = comment => (
      setComments([
        ...comments,
        comment
      ])
    );

    return (
      <div className="comment-box">
        <CommentForm data={comments} onCommentSubmit={handleCommentSubmit} />
        <CommentList data={comments} />
      </div>
    );
  };

  const CommentForm = props => {
    const handleSubmit = e => {
      e.preventDefault();

      const authorVal = e.target[0].value.trim();
      const textVal = e.target[1].value.trim();

      if (!textVal || !authorVal)
        return;

      props.onCommentSubmit({
        author: authorVal,
        text: textVal
      });

      /* Reset Name field */
      // e.target[0].value = '';
      /* Reset Comment field */
      e.target[1].value = '';
    };

    return (
      <form className="comment-form form-group" onSubmit={handleSubmit}>
        <div className="input-group">
          <div class="input-group-prepend">
            <span className="input-group-text">Name</span>
          </div>
          <input type="text" placeholder="Your name" className="form-control" />
        </div>
        <div className="input-group">
          <div class="input-group-prepend">
            <span className="input-group-text">Comment</span>
          </div>
          <input type="text" placeholder="Say something..." className="form-control" />
        </div>
        <input type="submit" value="Post" className="btn btn-primary" />
      </form>
    );
  };

  const CommentList = props => (
    <div className="comment-list">
      {
        props.data.map((comment, index) => (
          <Comment
            author={comment.author}
            text={comment.text}
            key={index}
          />
        ))
      }
    </div>
  );

  const Comment = props => (
    <div className="comment">
      <h2 className="author">{props.author}</h2>
      <p>{props.text}</p>
    </div>
  );

  ReactDOM.render(
    <CommentBox />,
    document.getElementById('app')
  );
}
export default App;
