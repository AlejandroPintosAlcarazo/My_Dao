import styles from '../styles/DiscussionHistory.module.css';

const discussions = [
  { name: "Jen", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "20m" },
  { name: "Max", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "1h" },
  { name: "Liam", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "2h" },
  { name: "Maya", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "3h" },
  { name: "Daisy", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "4h" },
  { name: "Ethan", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "5h" },
  { name: "Chris", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "6h" },
  { name: "Nora", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "7h" },
  { name: "Sam", message: "Hey I saw your question in the chat. I think I can help. Can we chat?", time: "8h" },
];

const DiscussionHistory = () => {
  return (
    <div className={styles.discussionHistory}>
      {discussions.map((discussion, index) => (
        <div key={index} className={styles.discussion}>
          <div className={styles.avatarContainer}>
            <img className={styles.avatar} src={`/path/to/${discussion.name.toLowerCase()}.png`} alt={`${discussion.name}'s avatar`} />
          </div>
          <div className={styles.messageContainer}>
            <strong className={styles.name}>{discussion.name}</strong>
            <p className={styles.message}>{discussion.message}</p>
          </div>
          <div className={styles.time}>{discussion.time}</div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionHistory;
