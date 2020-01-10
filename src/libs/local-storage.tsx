export const loadState = (): any => {
  try {
    const storedState = localStorage.getItem("todoTasks");
    return (storedState && JSON.parse(storedState)) || undefined;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state): boolean => {
  localStorage.setItem("todoTasks", JSON.stringify(state));
  return true;
};
