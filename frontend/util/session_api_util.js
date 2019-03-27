export const signup = (user) => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/users",
      data: { user }
    })
  );
};

// THIS HAS NOT BEEN TESTED
export const login = (user) => {
  return (
    $.ajax({
      method: "POST",
      url: "/api/session",
      data: { user }
    })
  );
};

// THIS HAS NOT BEEN TESTED
export const logout = () => {
  return (
    $.ajax({
      method: "DELETE",
      url: "/api/session",
    })
  );
};