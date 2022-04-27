import cuid from "cuid";

export const createKudo = async (
  message: string,
  userId: string,
  recipientId: string,
  style: any
) => {
  // create a kudo, connect author and recipient relations
};

export const getFilteredKudos = async (
  userId: string,
  sortFilter: any,
  whereFilter: any
) => {
  // get all kudos where:
  // - the recipient matches the user id
  // - add ...whereFilter to the filter criteria
  // - order the results by the orderBy parameter

  return [
    {
      id: cuid(),
      style: {
        backgroundColor: "BLUE",
        textColor: "WHITE",
        emoji: "PARTY",
      },
      message: "This is static data.",
      author: {
        profile: {
          firstName: "Feed",
          lastName: "User",
        },
      },
    },
  ];
};

export const getRecentKudos = async () => {
  // get the most recent three kudos. Include the recipients data and the emoji
  return [
    {
      style: {
        emoji: "THUMBSUP",
      },
      recipient: {
        id: cuid(),
        profile: {
          firstName: "Major",
          lastName: "User",
        },
      },
    },
  ];
};
