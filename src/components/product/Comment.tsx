// Comments.tsx
import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

interface CommentsProps {
  productId: string;
}

const Comments: React.FC<CommentsProps> = ({ productId }) => {
  // Sample comments data
  const comments = [
    { username: 'User1', comment: 'Great product!' },
    { username: 'User2', comment: 'Is it still available?' },
  ];

  return (
    <Box mt={4}>
      <Typography variant="h6" gutterBottom>
        Comments
      </Typography>
      <List>
        {comments.map((c, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={c.username}
              secondary={c.comment}
            />
          </ListItem>
        ))}
      </List>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Add a comment"
          multiline
          rows={2}
          variant="outlined"
        />
        <Button variant="contained" color="primary" sx={{ mt: 1 }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Comments;
