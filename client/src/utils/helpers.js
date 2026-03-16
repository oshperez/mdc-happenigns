// helper to format date nicely
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

// helper to calculate days left
export const daysLeft = (dateString) => {
  const today = new Date();
  const eventDate = new Date(dateString);

  const diff = eventDate - today;

  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days < 0) return "Event passed";
  if (days === 0) return "Today";

  return `${days} days left`;
};
